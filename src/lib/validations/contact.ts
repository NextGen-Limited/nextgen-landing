import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  company: z.string().optional(),
  projectType: z.enum(['mobile', 'fullstack', 'e2e', 'consulting']),
  budget: z.enum(['<5k', '5k-15k', '15k-50k', '>50k']),
  message: z.string().min(50, 'Please provide more details (at least 50 characters)'),
  honeypot: z.string().max(0, 'Bot detected'),
})

export type ContactFormData = z.infer<typeof contactSchema>
