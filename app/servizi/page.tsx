import type { Metadata } from 'next'
import { companyPurposeServices, services, workflow } from '@/lib/site-data'
import { Container, FeatureList, PageHero, SectionHead, ServiceCard } from '@/components/site/ui'

export const metadata: Metadata = {
  title: 'Servizi',
  description:
    'Movimento terra, demolizioni, costruzioni, muratura, finiture, gestione appalti, noleggio macchine, trasporti e agricoltura.',
}

export default function ServiziPage() {
  return (
    <>
      <PageHero
        eyebrow="Servizi"
        title="Tutto ciò che serve al tuo cantiere."
        lead="Nove aree di competenza, un unico interlocutore: dalla preparazione del terreno alla consegna dell'opera finita."
      />

      <section className="section">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 sm:[&>*:last-child:nth-child(odd)]:col-span-2 lg:grid-cols-3 lg:[&>*:last-child:nth-child(odd)]:col-span-1">
            {services.map((s, i) => (
              <ServiceCard key={s.title} index={i} {...s} delay={(i % 3) * 80} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section border-y border-border bg-muted">
        <Container>
          <SectionHead
            eyebrow="Oggetto sociale"
            title="Attività autorizzate."
            lead="Estratto dell'oggetto sociale che comprende anche trasporti, produzione e commercio agricolo e gestione appalti."
          />
          <FeatureList items={companyPurposeServices} />
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHead eyebrow="Come lavoriamo" title="Un processo in quattro fasi." centered />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step, i) => (
              <li
                key={step.title}
                className="reveal relative flex flex-col rounded-2xl border border-border bg-card p-6 md:p-7"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-primary font-black text-primary-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-5">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

    </>
  )
}
