'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { Logo } from './logo'

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-[60] border-b backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300 ease-premium',
        scrolled ? 'border-border bg-background/90 shadow-[0_10px_40px_-20px_rgba(255,183,3,0.35)]' : 'border-transparent bg-background/50',
      )}
    >
      <div className="mx-auto flex h-[var(--header-h)] max-w-[1200px] items-center justify-between px-[clamp(1rem,4vw,2rem)]">
        <Link href="/" aria-label="REMITER — Home" onClick={() => setOpen(false)}>
          <Logo
            className={cn(
              'origin-left text-2xl transition-transform duration-300 ease-premium md:text-[1.75rem]',
              scrolled && 'scale-[0.85]',
            )}
          />
        </Link>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        <nav
          id="site-nav"
          aria-label="Navigazione principale"
          className={cn(
            'absolute inset-x-0 top-full border-b border-border bg-background/95 backdrop-blur-md md:static md:border-0 md:bg-transparent md:backdrop-blur-none',
            open ? 'block' : 'hidden md:block',
          )}
        >
          <ul className="flex flex-col gap-1 px-[clamp(1rem,4vw,2rem)] py-4 md:flex-row md:gap-8 md:p-0">
            {navLinks.map((link) => {
              const active = link.href.startsWith('#')
                ? false
                : link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'group relative block py-2 text-sm font-semibold tracking-wide transition-colors',
                      active ? 'text-primary' : 'text-secondary-foreground hover:text-foreground',
                    )}
                  >
                    {link.label}
                    <span
                      aria-hidden
                      className={cn(
                        'absolute inset-x-0 bottom-0 h-0.5 origin-left rounded-full bg-primary transition-transform duration-[250ms] ease-premium',
                        active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                      )}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
