import type { Metadata } from 'next'
import Link from 'next/link'
import { company, fullAddress } from '@/lib/site-data'
import { LegalDocument, type LegalSection } from '@/components/site/legal-document'

export const metadata: Metadata = {
  title: 'Note legali',
  description: `Informazioni societarie obbligatorie e condizioni d'uso del sito — ${company.name}.`,
  alternates: { canonical: '/note-legali' },
}

const sections: LegalSection[] = [
  {
    id: 'informazioni-societarie',
    title: 'Informazioni societarie',
    body: (
      <>
        <p>
          Informazioni rese ai sensi dell&apos;art. 2250 c.c., dell&apos;art. 35 del D.P.R. 633/1972 e dell&apos;art. 7
          del D.Lgs. 70/2003.
        </p>
        <ul>
          <li>
            <strong>Denominazione:</strong> {company.name}
          </li>
          <li>
            <strong>Forma giuridica:</strong> {company.legalForm}
          </li>
          <li>
            <strong>Sede legale:</strong> {fullAddress}
          </li>
          <li>
            <strong>C.F. e Partita IVA:</strong> {company.taxCode}
          </li>
          <li>
            <strong>Iscrizione:</strong> {company.registry}, n. REA {company.rea}
          </li>

          <li>
            <strong>PEC:</strong> <a href={`mailto:${company.pec}`}>{company.pec}</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'condizioni-uso',
    title: 'Condizioni d’uso del sito',
    body: (
      <p>
        Il sito ha natura esclusivamente informativa e non consente la conclusione di contratti a distanza. Le
        descrizioni dei servizi non costituiscono offerta al pubblico ai sensi dell&apos;art. 1336 c.c.: condizioni,
        tempi e prezzi sono definiti di volta in volta con preventivo scritto e contratto.
      </p>
    ),
  },
  {
    id: 'proprieta-intellettuale',
    title: 'Proprietà intellettuale',
    body: (
      <p>
        Testi, marchi, logo, grafica e immagini presenti sul sito sono di proprietà di {company.name} o utilizzati su
        licenza, e sono protetti dalla Legge 633/1941. Ne è vietata la riproduzione, anche parziale, senza
        autorizzazione scritta. I dati cartografici sono © contributori di OpenStreetMap, distribuiti con licenza ODbL.
      </p>
    ),
  },
  {
    id: 'responsabilita',
    title: 'Limitazione di responsabilità',
    body: (
      <p>
        Il Titolare cura con diligenza l&apos;esattezza e l&apos;aggiornamento delle informazioni pubblicate, ma non
        garantisce che siano sempre complete o prive di errori, né che il sito sia accessibile senza interruzioni. Il
        Titolare non è responsabile dei contenuti dei siti esterni raggiungibili tramite collegamenti.
      </p>
    ),
  },
  {
    id: 'legge-foro',
    title: 'Legge applicabile e foro competente',
    body: (
      <p>
        Le presenti note sono regolate dalla legge italiana. Per ogni controversia è competente il Foro di Chieti, fatta
        salva la competenza inderogabile del foro del consumatore ai sensi dell&apos;art. 66-bis del D.Lgs. 206/2005.
        Per il trattamento dei dati personali si rinvia alla <Link href="/privacy">Privacy policy</Link>.
      </p>
    ),
  },
]

export default function NoteLegaliPage() {
  return (
    <LegalDocument
      currentHref="/note-legali"
      eyebrow="Documenti legali"
      title="Note legali"
      lead="Dati identificativi della società e condizioni che regolano l'utilizzo del sito."
      sections={sections}
    />
  )
}
