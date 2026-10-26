import type { Metadata } from 'next'
import Link from 'next/link'
import { company } from '@/lib/site-data'
import { LegalDocument, type LegalSection } from '@/components/site/legal-document'

export const metadata: Metadata = {
  title: 'Cookie policy',
  description: `Informativa sull'uso di cookie e tecnologie di tracciamento — ${company.name}.`,
  alternates: { canonical: '/cookie-policy' },
}

const sections: LegalSection[] = [
  {
    id: 'cosa-sono',
    title: 'Cosa sono i cookie',
    body: (
      <p>
        I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell&apos;utente, dove vengono
        memorizzati per essere ritrasmessi agli stessi siti alla visita successiva. Tecnologie analoghe (local storage,
        pixel, fingerprinting) sono equiparate ai cookie dalle Linee guida del Garante del 10 giugno 2021.
      </p>
    ),
  },
  {
    id: 'cookie-utilizzati',
    title: 'Cookie utilizzati da questo sito',
    body: (
      <>
        <p>
          Questo sito <strong>non installa cookie di profilazione</strong>. Al primo accesso un banner informa
          l&apos;utente e gli consente di accettare, rifiutare o scegliere per categoria. Chiudere il banner con la
          &quot;X&quot; equivale a rifiutare. Fino a una scelta esplicita vengono usati solo gli strumenti necessari.
        </p>
        <div className="overflow-x-auto">
          <table>
            <caption className="sr-only">Strumenti utilizzati e relativa natura</caption>
            <thead>
              <tr>
                <th scope="col">Categoria</th>
                <th scope="col">Strumento e fornitore</th>
                <th scope="col">Finalità</th>
                <th scope="col">Durata</th>
                <th scope="col">Consenso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Necessari</td>
                <td>
                  Cookie <code>remiter_consent</code> — {company.name}
                </td>
                <td>Memorizzare le scelte espresse nel banner</td>
                <td>6 mesi</td>
                <td>Non richiesto</td>
              </tr>
              <tr>
                <td>Statistiche</td>
                <td>Web Analytics — Netlify Inc.</td>
                <td>Statistiche di visita aggregate e anonime, senza cookie</td>
                <td>—</td>
                <td>Richiesto</td>
              </tr>
              <tr>
                <td>Contenuti esterni</td>
                <td>Mappa — OpenStreetMap Foundation</td>
                <td>Visualizzazione della posizione della sede (trasmette l&apos;indirizzo IP)</td>
                <td>—</td>
                <td>Richiesto</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: 'link-esterni',
    title: 'Link a siti esterni',
    body: (
      <p>
        Il link &quot;Apri in Google Maps&quot; conduce a un sito di terze parti, che può installare propri cookie
        secondo la relativa informativa. Il Titolare non ha controllo su tali cookie, che vengono installati solo se
        l&apos;utente sceglie di seguire il collegamento.
      </p>
    ),
  },
  {
    id: 'gestione',
    title: 'Gestione dei cookie dal browser',
    body: (
      <p>
        L&apos;utente può modificare o revocare il consenso in qualsiasi momento tramite il link &quot;Preferenze
        cookie&quot; nel piè di pagina. Può inoltre visualizzare, bloccare o cancellare i cookie dalle impostazioni del
        proprio browser (Chrome, Firefox, Safari, Edge). Il rifiuto non pregiudica la navigazione su questo sito.
      </p>
    ),
  },
  {
    id: 'aggiornamenti',
    title: 'Aggiornamenti',
    body: (
      <p>
        In caso di introduzione di nuovi strumenti, la presente informativa sarà aggiornata e il banner verrà
        riproposto per raccogliere un nuovo consenso. Per le altre informazioni sul trattamento dei dati si rinvia
        alla <Link href="/privacy">Privacy policy</Link>.
      </p>
    ),
  },
]

export default function CookiePolicyPage() {
  return (
    <LegalDocument
      currentHref="/cookie-policy"
      eyebrow="Documenti legali"
      title="Cookie policy"
      lead="Informativa resa ai sensi dell'art. 122 del D.Lgs. 196/2003 e delle Linee guida cookie del Garante privacy del 10 giugno 2021."
      sections={sections}
    />
  )
}
