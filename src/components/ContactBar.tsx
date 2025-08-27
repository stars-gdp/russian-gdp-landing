import React from 'react'

function normalizePhone(phone: string): string {
  // Remove all non-digits
  const digits = (phone || '').replace(/\D+/g, '')
  return digits.startsWith('0') ? digits : digits // keep as-is; wa.me requires country code
}

export default function ContactBar() {
  const params = new URLSearchParams(window.location.search)
  const raw = params.get('phone') || '+972546253106'
  const normalized = normalizePhone(raw)
  const href = `https://wa.me/${normalized}`

  return (
    <div className="contact-bar" id="contact">
      <a className="btn contact-btn" href={href} target="_blank" rel="noopener noreferrer" aria-label="Связаться в WhatsApp">
        Связаться
      </a>
    </div>
  )
}
