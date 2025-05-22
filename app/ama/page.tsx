"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function AMA() {
  const [question, setQuestion] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Here you would typically send the data to a server
    // For now, we'll just simulate a submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setQuestion("")
    setEmail("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-pink-50">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-48 mb-8 md:mb-0">
          <div className="mb-6">
            <Image
              src="/images/new-leaf-logo.png"
              alt="Marie and Michael Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
          </div>

          <nav className="space-y-2">
            <Link href="/" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded">
              Home
            </Link>
            <Link href="/books" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded">
              Books
            </Link>
            <Link href="/stack" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded">
              Stack
            </Link>
            <Link href="/ama" className="block py-2 px-4 bg-gray-100 text-gray-900 rounded">
              AMA
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <main className="flex-1">
          <h1 className="text-3xl font-serif mb-4">AMA</h1>

          <p className="text-gray-700 mb-8">Ask us anything!</p>

          {isSubmitted ? (
            <div className="bg-teal-50 border border-teal-200 text-teal-700 px-4 py-3 rounded mb-8">
              Thank you for your question! We'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
              <div>
                <textarea
                  className="w-full border border-gray-300 rounded p-3 h-32 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your question..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  required
                ></textarea>
              </div>

              <div>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="jane@example.com (optional)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
                  disabled={isSubmitting || !question}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          )}
        </main>
      </div>
    </div>
  )
}
