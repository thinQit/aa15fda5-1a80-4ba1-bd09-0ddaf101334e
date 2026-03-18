'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface ReservationFormProps {
  endpoint: string
}

export default function ReservationForm({ endpoint = '/api/reservations' }: Partial<ReservationFormProps>) {
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  async function onSubmit(formData: FormData) {
    setLoading(true)
    setDone(false)
    const payload = Object.fromEntries(formData.entries())
    await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    setLoading(false)
    setDone(true)
  }

  return (
    <section className="bg-[#FEFAE0] py-16" id="reservation-form">
      <div className="mx-auto max-w-2xl px-4 md:px-6">
        <h3 className="font-serif text-3xl text-[#722F37]">Reservation Request</h3>
        <form action={onSubmit} className="mt-6 grid gap-4">
          <Input name="name" placeholder="Full Name" required />
          <Input name="email" type="email" placeholder="Email" required />
          <Input name="phone" placeholder="Phone Number" required />
          <Input name="date" type="date" required />
          <Input name="time" type="time" required />
          <Input name="partySize" type="number" min={1} max={20} placeholder="Party Size" required />
          <Button disabled={loading} className="bg-[#722F37] text-white hover:bg-[#5f2730]">{loading ? 'Submitting...' : 'Send Request'}</Button>
          {done && <p className="text-sm text-[#606C38]">Thanks! Your request has been received. We will confirm shortly.</p>}
        </form>
      </div>
    </section>
  )
}
