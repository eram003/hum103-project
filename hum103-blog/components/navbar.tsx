"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-serif font-bold text-white tracking-tight">
              HUM103
            </Link>
            <div className="hidden md:flex md:ml-12 space-x-10">
              <Link
                href="/"
                className="text-white hover:text-gray-200 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="#introduction"
                className="text-white hover:text-gray-200 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Introduction
              </Link>
              <Link
                href="/contributors"
                className="text-white hover:text-gray-200 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Contributors
              </Link>
            </div>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90">
          <div className="pt-2 pb-3 space-y-1 px-6">
            <Link href="/" className="text-white block py-3 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link
              href="#introduction"
              className="text-white hover:text-gray-200 block py-3 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Introduction
            </Link>
            <Link
              href="/contributors"
              className="text-white hover:text-gray-200 block py-3 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contributors
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
