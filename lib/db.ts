import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined in environment variables');
}

export const sql = neon(process.env.DATABASE_URL);

export interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  created_at: Date;
}

// Database initialization function
export async function initDatabase() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        service VARCHAR(100) NOT NULL,
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
}

// Insert new contact submission
export async function insertContactSubmission(data: Omit<ContactSubmission, 'id' | 'created_at'>) {
  try {
    const result = await sql`
      INSERT INTO contact_submissions (name, email, phone, service, message)
      VALUES (${data.name}, ${data.email}, ${data.phone}, ${data.service}, ${data.message})
      RETURNING *
    `;
    return result[0] as ContactSubmission;
  } catch (error) {
    console.error('Error inserting contact submission:', error);
    throw error;
  }
}