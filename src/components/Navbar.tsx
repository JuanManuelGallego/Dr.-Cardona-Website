'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { homeContent } from '@/content/text'

export default function Navbar() {
  const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'INICIO' },
    { href: '/quien-soy', label: 'QUIÉN SOY' },
    { href: '/servicios', label: 'SERVICIOS' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contacto', label: 'CONTACTO' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-soft py-3">
      <div className="container">
        <nav className="flex items-center justify-between">
          {/* Mobile: Logo + Name */}
          <div className="flex md:hidden items-center gap-2">
            <Image
              src="/images/logo-website.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain w-8 h-8"
            />
            <span className="font-heading font-semibold text-sm leading-tight tracking-tight">Dra. Manuela Cardona</span>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex gap-2 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[13px] font-medium tracking-[0.12em] uppercase transition-colors px-4 py-2 rounded-full ${pathname === item.href
                  ? 'text-primary bg-primary/10'
                  : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t py-6">
            <div className="flex flex-col space-y-3 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-all font-medium px-6 py-3 rounded-lg w-full max-w-xs text-center ${pathname === item.href
                    ? 'text-primary font-semibold bg-primary/10'
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
