import { ArrowRight } from 'lucide-react'
import { ButtonLink, Container, Eyebrow } from './ui'

export function CtaBand() {
  return (
    <section className="section">
      <Container>
        <div className="reveal relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-12 text-center md:px-12 md:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,183,3,0.16),transparent_65%)]"
          />
          <div className="relative">
            <Eyebrow className="justify-center">Parliamo del tuo progetto</Eyebrow>
            <h2 className="mx-auto mt-4 max-w-2xl">Hai un cantiere da avviare o un appalto da gestire?</h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Contattaci tramite PEC o vieni a trovarci in sede: valutiamo insieme le esigenze e ti proponiamo la
              soluzione più adatta.
            </p>
            <div className="mx-auto mt-8 grid max-w-md gap-3 sm:grid-cols-2">
              <ButtonLink href="#contatti">
                Contattaci <ArrowRight aria-hidden className="size-4" />
              </ButtonLink>
              <ButtonLink href="/servizi" variant="ghost">
                Scopri i servizi
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
