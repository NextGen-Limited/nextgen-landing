'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { contactSchema, ContactFormData } from '@/lib/validations/contact'

export function ContactForm() {
  const t = useTranslations('contact.form')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      projectType: 'mobile',
      budget: '5k-15k',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Honeypot */}
      <input type="text" {...register('honeypot')} className="hidden" tabIndex={-1} autoComplete="off" />

      <Input
        {...register('name')}
        id="name"
        label={t('name')}
        placeholder="John Doe"
        error={errors.name?.message}
      />

      <Input
        {...register('email')}
        id="email"
        type="email"
        label={t('email')}
        placeholder="john@example.com"
        error={errors.email?.message}
      />

      <Input
        {...register('company')}
        id="company"
        label={t('company')}
        placeholder="Acme Inc. (optional)"
      />

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {t('projectType')}
        </label>
        <select
          {...register('projectType')}
          className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
        >
          <option value="mobile">{t('projectTypes.mobile')}</option>
          <option value="fullstack">{t('projectTypes.fullstack')}</option>
          <option value="e2e">{t('projectTypes.e2e')}</option>
          <option value="consulting">{t('projectTypes.consulting')}</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {t('budget')}
        </label>
        <select
          {...register('budget')}
          className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
        >
          <option value="<5k">{t('budgets.<5k')}</option>
          <option value="5k-15k">{t('budgets.5k-15k')}</option>
          <option value="15k-50k">{t('budgets.15k-50k')}</option>
          <option value=">50k">{t('budgets.>50k')}</option>
        </select>
      </div>

      <Textarea
        {...register('message')}
        id="message"
        label={t('message')}
        placeholder={t('messagePlaceholder')}
        error={errors.message?.message}
        rows={5}
      />

      <Button
        type="submit"
        size="lg"
        className="w-full"
        isLoading={status === 'loading'}
      >
        {status === 'loading' ? t('sending') : t('submit')}
      </Button>

      {status === 'success' && (
        <p className="text-green-500 text-center">{t('success')}</p>
      )}
      {status === 'error' && (
        <p className="text-red-500 text-center">{t('error')}</p>
      )}
    </form>
  )
}
