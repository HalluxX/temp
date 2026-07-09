'use client'

import { useState, FormEvent } from 'react'

const inputClassName =
  'w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-normal'

export default function SubmitDialog() {
  const [sending, setSending] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    setError(false)

    try {
      const formData = new FormData(e.currentTarget)
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  if (submitted) {
    return (
      <div className="contact-submit p-8 text-black text-lg font-bold mx-auto w-full md:w-6/12">
        <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-3">Thank you!</h2>
          <p className="text-green-700 font-medium">
            Your message was submitted successfully. We&apos;ll get back to you soon.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="contact-submit p-8 text-black text-lg font-bold mx-auto w-full md:w-6/12">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden" aria-hidden="true">
          <label>
            Don’t fill this out if you’re human:
            <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="mb-2 block" htmlFor="contact-name">
              Your Name *
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              className={inputClassName}
            />
          </div>
          <div></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="mb-2 block" htmlFor="contact-email">
              Email *
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              className={inputClassName}
            />
          </div>
          <div>
            <label className="mb-2 block" htmlFor="contact-company">
              Company *
            </label>
            <input
              id="contact-company"
              name="company"
              type="text"
              required
              className={inputClassName}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="mb-2 block" htmlFor="contact-help">
              What can we help you with?
            </label>
            <input
              id="contact-help"
              name="help"
              type="text"
              className={inputClassName}
            />
          </div>
          <div>
            <label className="mb-2 block" htmlFor="contact-phone">
              Phone *
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              required
              className={inputClassName}
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block" htmlFor="contact-message">
            MESSAGE
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            className={`${inputClassName} h-32 resize-vertical`}
            placeholder="Enter your message here..."
          />
        </div>

        {error && (
          <p className="text-red-600 font-medium">
            Something went wrong. Please try again or email us directly.
          </p>
        )}

        <div className="pt-4">
          {sending ? (
            <div className="text-gray-600">Sending your request now ...</div>
          ) : (
            <button
              type="submit"
              className="flex items-center gap-3 text-black text-left text-lg md:text-xl font-bold hover:opacity-80 transition-opacity"
            >
              SUBMIT
              <span aria-hidden="true">→</span>
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
