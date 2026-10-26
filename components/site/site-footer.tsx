import { ExternalLink, Mail, MapPin, type LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { company, fullAddress, legalLinks, mapsUrl } from '@/lib/site-data'
import { ContactMap } from './contact-map'
import { CookiePreferencesButton } from './cookie-preferences-button'
import { Logo } from './logo'
import { Container, Eyebrow } from './ui'

type ContactItem = { icon: LucideIcon; label: string; content: React.ReactNode }

const contactItems: ContactItem[] = [
  {
    icon: Mail,
    label: 'PEC società',
    content: (
      <a href={`mailto:${company.pec}`} className="break-all transition-colors duration-200 hover:text-primary">
        {company.pec}
      </a>
    ),
  },

  {
    icon: MapPin,
    label: 'Sede legale',
    content: (
      <>
        <span className="block">{fullAddress}</span>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          Apri in Google Maps <ExternalLink aria-hidden className="size-3.5" />
        </a>
      </>
    ),
  },
]

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer id="contatti" aria-labelledby="contatti-title" className="border-t border-border bg-muted">
      <Container className="section grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col items-start text-left">
            <Logo className="text-2xl" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              {company.name} — movimento terra, demolizioni, costruzioni edili, gestione appalti, noleggio mezzi,
              trasporti e attività agricole in Abruzzo.
            </p>
          </div >

          <div className="flex flex-col items-start text-left">
            <Eyebrow>Contatti</Eyebrow>
            <h2 id="contatti-title" className="mt-3 text-2xl md:text-3xl">
              Parliamo del tuo progetto.
            </h2>
            <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-1">
              {contactItems.map(({ icon: Icon, label, content }) => (
                <li key={label} className="flex gap-4 bg-card p-5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon aria-hidden className="size-5" />
                  </span >
                  <div className="min-w-0">
                    <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">{label}</h3>
                    <div className="mt-1.5 text-sm font-semibold text-foreground">{content}</div >
                  </div >
                </li>
              ))}
            </ul >
          </div >
        </div >

        <div className="overflow-hidden rounded-2xl border border-border">
          <ContactMap />
        </div >
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-start gap-4 py-6 text-left text-xs leading-relaxed text-muted-foreground lg:flex-row lg:items-start lg:justify-between">
          <div className="grid gap-1">
            <p>
              {'© '}
              {year} {company.name} — {company.legalForm}
            </p>
            <p>
              Sede legale: {fullAddress} · P.IVA {company.taxCode}
            </p>
          </div >
          <nav aria-label="Documenti legali">
            <ul className="flex flex-wrap justify-start gap-x-5 gap-y-2">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-semibold text-foreground/80 transition-colors duration-200 hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <CookiePreferencesButton />
              </li>
            </ul >
          </nav>
        </Container>
        <p className="text-center text-xs text-foreground/60 py-4">
          Sito realizzato da Andrea D'Ettorre
        </p>
      </div >
    </footer >
  )
}
