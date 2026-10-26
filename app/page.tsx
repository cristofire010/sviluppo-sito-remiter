import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { activities, company, services } from '@/lib/site-data'
import { ActivityStrip } from '@/components/site/activity-strip'
import { ButtonLink, Container, SectionHead, ServiceCard } from '@/components/site/ui'

const facts = [
  { label: 'Sede', value: `${company.address.city} (${company.address.province})` },
  { label: 'Forma', value: 'S.a.s.' },
  { label: 'Settori di attività', value: String(activities.length) },
  { label: 'Servizi', value: String(services.length) },
]

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-12 md:pb-24 md:pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(255,183,3,0.12),transparent_45%)]"
        />
        <Container className="relative grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Impresa edile · Francavilla al Mare (CH)
            </span>
            <h1 className="mt-6">
              <span className="text-gold-gradient">Costruiamo solide basi per</span>{' '}
              <em className="not-italic text-primary">ogni progetto.</em>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {company.name}: movimento terra, demolizioni, costruzioni edili, gestione appalti, noleggio mezzi,
              trasporti e attività agricole, con mezzi propri e personale qualificato.
            </p>
            <div className="mt-8 grid max-w-lg gap-3 sm:grid-cols-2">
              <ButtonLink href="/servizi">
                I nostri servizi <ArrowRight aria-hidden className="size-4" />
              </ButtonLink>
              <ButtonLink href="#contatti" variant="ghost">
                Contatti
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <ActivityStrip />

      <section className="section border-t border-border bg-muted">
        <Container>
          <SectionHead
            eyebrow="Servizi in evidenza"
            title="Dal primo scavo alla consegna dell'opera."
            lead="Un'unica impresa per tutte le fasi del cantiere, con mezzi e competenze interne."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <ServiceCard key={s.title} index={i} title={s.title} description={s.description} delay={(i % 3) * 80} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <ButtonLink href="/servizi" variant="ghost">
              Tutti i servizi <ArrowRight aria-hidden className="size-4" />
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  )
}
