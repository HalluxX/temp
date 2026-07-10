'use client'

import { useState, FormEvent } from 'react'

const inputClassName =
  'w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-normal text-base'

const labelClassName = 'mb-2 block text-sm font-semibold text-gray-900'

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
      // Post to the static HTML form page so Netlify Forms can handle it
      // (POSTing to "/" hits Next.js and returns 405 on Netlify)
      const response = await fetch('/__forms.html', {
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
      <div className="contact-submit p-8 text-black mx-auto w-full max-w-2xl">
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
    <div className="contact-submit p-8 text-black mx-auto w-full max-w-2xl">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="hidden"
          name="subject"
          data-remove-prefix
          value="New contact form submission from homemaxrg.com"
        />
        <p className="hidden" aria-hidden="true">
          <label>
            Don&apos;t fill this out if you&apos;re human:
            <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </p>

        {/* Contact info */}
        <div className="grid grid-cols-1 gap-5">
          <div>
            <label className={labelClassName} htmlFor="contact-name">
              Your name <span className="text-red-600">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className={inputClassName}
            />
          </div>

          <div>
            <label className={labelClassName} htmlFor="contact-email">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={inputClassName}
            />
          </div>
        </div>

        {/* Phone + topic */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className={labelClassName} htmlFor="contact-help">
              What can we help you with?
            </label>
            <input
              id="contact-help"
              name="help"
              type="text"
              placeholder="e.g. Roofing quote, electrical work"
              className={inputClassName}
            />
          </div>

          <div>
            <label className={labelClassName} htmlFor="contact-phone">
              Phone <span className="text-red-600">*</span>
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              className={inputClassName}
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className={labelClassName} htmlFor="contact-message">
            Message <span className="text-red-600">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            className={`${inputClassName} resize-y min-h-[8rem]`}
            placeholder="Tell us about your project or question..."
          />
        </div>

        {error && (
          <p className="text-red-600 text-sm font-medium">
            Something went wrong. Please try again or email us directly.
          </p>
        )}

        <div className="pt-2">
          {sending ? (
            <p className="text-gray-600 text-sm font-medium">Sending your request...</p>
          ) : (
            <button
              type="submit"
              className="flex items-center gap-3 text-black text-lg md:text-xl font-bold hover:opacity-80 transition-opacity"
            >
              Submit
              <span aria-hidden="true">→</span>
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
