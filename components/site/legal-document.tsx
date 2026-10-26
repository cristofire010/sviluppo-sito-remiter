import Link from 'next/link'
import { legalLinks, legalUpdatedAt } from '@/lib/site-data'
import { Container, PageHero } from './ui'

export type LegalSection = { id: string; title: string; body: React.ReactNode }

export function LegalDocument({
  eyebrow,
  title,
  lead,
  sections,
  currentHref,
}: {
  eyebrow: string
  title: string
  lead: string
  sections: LegalSection[]
  currentHref: string
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} lead={lead} />
      <section className="section">
        <Container className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:self-start">
            <nav aria-label="Indice del documento">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Indice</p>
              <ol className="mt-4 grid gap-2 text-sm">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-muted-foreground transition-colors duration-200 hover:text-primary">
                      {i + 1}. {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <nav aria-label="Documenti legali" className="mt-8 border-t border-border pt-6">
              <ul className="grid gap-2 text-sm">
                {legalLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      aria-current={l.href === currentHref ? 'page' : undefined}
                      className="font-semibold text-muted-foreground transition-colors duration-200 hover:text-primary aria-[current=page]:text-primary"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="max-w-3xl">
            <p className="text-sm text-muted-foreground">Ultimo aggiornamento: {legalUpdatedAt}</p>
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="mt-10 first-of-type:mt-6">
                <h2 id={`${s.id}-title`} className="text-xl md:text-2xl">
                  {i + 1}. {s.title}
                </h2>
                <div className="legal-prose mt-4">{s.body}</div>
              </section>
            ))}
          </article>
        </Container>
      </section>
    </>
  )
}
