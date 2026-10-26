import type { Metadata } from 'next'
import { Compass, ShieldCheck, Target } from 'lucide-react'
import { companyPurposeFull, partners } from '@/lib/site-data'
import { Card, Container, FeatureList, PageHero, SectionHead } from '@/components/site/ui'

export const metadata: Metadata = {
  title: 'Chi siamo',
  description: 'Missione, valori e soci di REMITER S.A.S., impresa edile a Francavilla al Mare (CH).',
}

const identity = [
  {
    icon: Target,
    title: 'Missione',
    text: 'Realizzare opere edili e di movimento terra affidabili, rispettando tempi, costi e sicurezza in ogni cantiere.',
  },
  {
    icon: ShieldCheck,
    title: 'Valori',
    text: 'Serietà, trasparenza e rispetto delle normative: rapporti chiari con committenti, fornitori ed enti pubblici.',
  },
  {
    icon: Compass,
    title: 'Approccio',
    text: 'Un referente unico, mezzi propri e una pianificazione accurata per seguire ogni lavoro dall’inizio alla fine.',
  },
]

export default function ChiSiamoPage() {
  return (
    <>
      <PageHero
        eyebrow="Chi siamo"
        title="Un'impresa giovane, con radici nel territorio."
        lead="REMITER S.A.S. nasce a Francavilla al Mare per offrire servizi edili, di movimento terra e agricoli con un approccio concreto e affidabile."
      />

      <section className="section">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {identity.map(({ icon: Icon, title, text }, i) => (
              <div key={title} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <Card className="h-full">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <h2 className="mt-5 text-xl">{title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section border-y border-border bg-muted">
        <Container>
          <SectionHead eyebrow="I soci" title="Le persone dietro REMITER." />
          <div className="grid gap-6 md:grid-cols-2">
            {partners.map((p, i) => (
              <div key={p.name} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <Card className="h-full">
                  <div className="flex items-center gap-4">
                    <span
                      aria-hidden
                      className="flex size-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-lg font-black text-primary-foreground"
                    >
                      {p.name.charAt(0)}
                    </span>
                    <h3>{p.name}</h3>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHead
            eyebrow="Oggetto sociale"
            title="Cosa può fare la società."
            lead="Le attività previste dall'atto costitutivo, come riportate in visura camerale."
          />
          <FeatureList items={companyPurposeFull} centerLast />
        </Container>
      </section>

    </>
  )
}
