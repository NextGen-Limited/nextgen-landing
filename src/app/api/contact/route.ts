import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { contactSchema } from '@/lib/validations/contact'

// Simple in-memory rate limit (use Redis in production)
const rateLimit = new Map<string, number[]>()

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate
    const data = contactSchema.parse(body)

    // Check honeypot
    if (data.honeypot) {
      return NextResponse.json({ success: true }) // Silent fail for bots
    }

    // Rate limit check
    const headersList = await headers()
    const ip = headersList.get('x-forwarded-for') || 'unknown'
    const now = Date.now()
    const timestamps = rateLimit.get(ip) || []
    const recent = timestamps.filter((t) => now - t < 60000) // 1 minute window

    if (recent.length >= 3) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }

    rateLimit.set(ip, [...recent, now])

    // TODO: Send email with Resend/SendGrid
    // For now, just log the submission
    console.log('Contact submission:', data)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
  }
}
