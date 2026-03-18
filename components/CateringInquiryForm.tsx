'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface CateringInquiryFormProps {
  endpoint: string
}

export default function CateringInquiryForm({ endpoint = '/api/catering' }: Partial<CateringInquiryFormProps>) {
  const [sent, setSent] = useState(false)

  async function handleSubmit(formData: FormData) {
    const payload = Object.fromEntries(formData.entries())
    await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    setSent(true)
  }

  return (
    <section id="catering" className="bg-white py-16">
      <div className="mx-auto max-w-2xl px-4 md:px-6">
        <h3 className="font-serif text-3xl text-[#722F37]">Catering Inquiry</h3>
        <p className="mt-2 text-sm text-[#606C38]">Typical response time: within 24 business hours.</p>
        <form action={handleSubmit} className="mt-6 grid gap-4">
          <Input name="name" placeholder="Contact Name" required />
          <Input name="email" type="email" placeholder="Email" required />
          <Input name="eventDate" type="date" required />
          <Input name="guestCount" type="number" min={10} placeholder="Estimated Guest Count" required />
          <Input name="details" placeholder="Event details, dietary needs, service style" required />
          <Button className="bg-[#606C38] text-white hover:bg-[#4f5a2e]">Submit Inquiry</Button>
          {sent && <p className="text-sm text-[#606C38]">Thank you! We will contact you with a custom proposal.</p>}
        </form>
      </div>
    </section>
  )
}
