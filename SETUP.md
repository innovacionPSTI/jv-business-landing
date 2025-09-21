# Configuración del Formulario de Contacto

Este documento explica cómo configurar la base de datos Neon y el servicio de email Resend para el formulario de contacto.

## 1. Configuración de Neon Database

### Paso 1: Crear cuenta en Neon
1. Ve a [https://neon.tech/](https://neon.tech/)
2. Crea una cuenta gratuita
3. Crea un nuevo proyecto

### Paso 2: Obtener la URL de conexión
1. En tu dashboard de Neon, ve a la sección "Connection Details"
2. Copia la "Connection string" que se ve como:
   ```
   postgresql://username:password@ep-example.us-east-1.aws.neon.tech/neondb?sslmode=require
   ```

## 2. Configuración de Resend

### Paso 1: Crear cuenta en Resend
1. Ve a [https://resend.com/](https://resend.com/)
2. Crea una cuenta gratuita
3. Verifica tu dominio de email

### Paso 2: Obtener API Key
1. En tu dashboard de Resend, ve a "API Keys"
2. Crea un nuevo API Key
3. Copia la clave que comienza con `re_`

### Paso 3: Configurar dominio
1. En Resend, ve a "Domains"
2. Agrega tu dominio `jvbusinessservices.com`
3. Configura los registros DNS según las instrucciones de Resend

## 3. Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto con:

```env
# Database Configuration (Neon)
DATABASE_URL="postgresql://username:password@ep-example.us-east-1.aws.neon.tech/neondb?sslmode=require"

# Email Configuration (Resend)
RESEND_API_KEY="re_your_api_key_here"

# Application Configuration
NEXT_PUBLIC_APP_URL="https://jvbusinessservices.com"
EMAIL_TO="info@jvbusinessservices.com"
EMAIL_FROM="noreply@jvbusinessservices.com"
```

## 4. Verificación

### Desarrollo Local
```bash
npm run dev
```

### Producción (Vercel)
1. En tu proyecto de Vercel, ve a Settings → Environment Variables
2. Agrega todas las variables de entorno del archivo `.env.local`
3. Redeploya el proyecto

## 5. Funcionamiento del Formulario

### Características implementadas:
- ✅ Validación de datos con Zod
- ✅ Rate limiting (3 requests por minuto por IP)
- ✅ Almacenamiento en base de datos Neon
- ✅ Envío de email automático con Resend
- ✅ UI con estados de carga y mensajes de éxito/error
- ✅ Soporte bilingüe (español/inglés)
- ✅ Email HTML profesional con datos del contacto

### Flujo de envío:
1. Usuario llena el formulario
2. Validación en frontend y backend
3. Datos se guardan en Neon database
4. Email se envía automáticamente a `info@jvbusinessservices.com`
5. Usuario recibe confirmación visual

### Seguridad:
- Rate limiting por IP
- Validación estricta de datos
- Sanitización de inputs
- Variables de entorno seguras
- Headers de seguridad en vercel.json