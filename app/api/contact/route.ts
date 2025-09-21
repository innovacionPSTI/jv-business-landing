import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { insertContactSubmission, initDatabase } from '@/lib/db';
import { sendContactEmail } from '@/lib/email';

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name too long'),
  email: z.string().email('Invalid email address').max(255, 'Email too long'),
  phone: z.string().min(10, 'Phone must be at least 10 characters').max(20, 'Phone too long'),
  service: z.string().min(1, 'Service is required').max(100, 'Service name too long'),
  message: z.string().max(1000, 'Message too long').optional(),
});

// Rate limiting (simple in-memory store)
const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 3;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userRequests = rateLimit.get(ip) || [];

  // Remove old requests
  const recentRequests = userRequests.filter((time: number) => now - time < RATE_LIMIT_WINDOW);

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  recentRequests.push(now);
  rateLimit.set(ip, recentRequests);
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Initialize database (creates table if it doesn't exist)
    await initDatabase();

    // Save to database
    const submission = await insertContactSubmission({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      service: validatedData.service,
      message: validatedData.message || '',
    });

    // Send email notification
    await sendContactEmail({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      service: validatedData.service,
      message: validatedData.message || '',
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully',
        id: submission.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form submission error:', error);

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: error.errors
        },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}