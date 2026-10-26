import type { Metadata } from 'next'
import Link from 'next/link'
import { company, fullAddress } from '@/lib/site-data'
import { LegalDocument, type LegalSection } from '@/components/site/legal-document'

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: `Informativa sul trattamento dei dati personali ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 — ${company.name}.`,
  alternates: { canonical: '/privacy' },
}

const sections: LegalSection[] = [
  {
    id: 'titolare',
    title: 'Titolare del trattamento',
    body: (
      <>
        <p>
          Il Titolare del trattamento è <strong>{company.name}</strong>, con sede legale in {fullAddress}, P.IVA{' '}
          {company.taxCode}, in persona del legale rappresentante pro tempore.
        </p>
        <p>
          Per qualsiasi richiesta relativa al trattamento dei dati personali è possibile scrivere alla PEC{' '}
          <a href={`mailto:${company.pec}`}>{company.pec}</a>. Il Titolare non ha nominato un Responsabile della
          protezione dei dati (DPO), non ricorrendo i presupposti dell&apos;art. 37 del Regolamento (UE) 2016/679
          (&quot;GDPR&quot;).
        </p>
      </>
    ),
  },
  {
    id: 'dati',
    title: 'Dati trattati e finalità',
    body: (
      <>
        <p>Il sito ha finalità esclusivamente informative e non contiene moduli di registrazione o di contatto.</p>
        <ul>
          <li>
            <strong>Dati di navigazione.</strong> I sistemi informatici che gestiscono il sito acquisiscono, durante il
            normale funzionamento, dati la cui trasmissione è implicita nei protocolli di Internet (indirizzo IP, tipo di
            browser, sistema operativo, data e ora della richiesta, pagina richiesta, codice di risposta). Sono
            utilizzati per garantire il corretto funzionamento e la sicurezza del sito e per accertare eventuali
            responsabilità in caso di reati informatici.
          </li>
          <li>
            <strong>Statistiche aggregate.</strong> Solo previo consenso espresso tramite il banner, il sito utilizza
            un servizio di analisi web fornito da Netlify, che raccoglie dati di utilizzo in forma aggregata e anonima, senza cookie e senza
            identificare il singolo visitatore.
          </li>
          <li>
            <strong>Preferenze sulla privacy.</strong> Le scelte espresse nel banner sono salvate in un cookie tecnico
            (<code>remiter_consent</code>) per 6 mesi, al solo fine di non riproporre il banner a ogni visita e di
            documentare il consenso.
          </li>
          <li>
            <strong>Dati forniti volontariamente.</strong> Se l&apos;utente scrive all&apos;indirizzo PEC indicato sul sito,
            il Titolare tratta l&apos;indirizzo del mittente e i dati contenuti nel messaggio al solo fine di
            riscontrare la richiesta e, se del caso, di formulare preventivi o dare esecuzione a misure precontrattuali.
          </li>
          <li>
            <strong>Mappa della sede.</strong> Solo previo consenso ai &quot;contenuti esterni&quot;, la mappa nel piè di
            pagina carica le immagini cartografiche dai server di OpenStreetMap Foundation: il browser dell&apos;utente
            comunica a tali server il proprio indirizzo IP. La mappa non installa cookie.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'basi-giuridiche',
    title: 'Basi giuridiche',
    body: (
      <ul>
        <li>
          Dati di navigazione e cookie tecnico delle preferenze: legittimo interesse del Titolare alla sicurezza e al
          buon funzionamento del sito (art. 6, par. 1, lett. f GDPR).
        </li>
        <li>
          Statistiche aggregate e mappa OpenStreetMap: consenso dell&apos;interessato (art. 6, par. 1, lett. a GDPR),
          revocabile in qualsiasi momento dal link &quot;Preferenze cookie&quot; nel piè di pagina, senza pregiudicare la
          liceità del trattamento basata sul consenso prima della revoca.
        </li>
        <li>
          Risposta alle richieste e preventivi: esecuzione di misure precontrattuali adottate su richiesta
          dell&apos;interessato (art. 6, par. 1, lett. b GDPR).
        </li>
        <li>
          Eventuali obblighi contabili, fiscali o di legge: adempimento di un obbligo legale (art. 6, par. 1, lett. c
          GDPR).
        </li>
      </ul>
    ),
  },
  {
    id: 'destinatari',
    title: 'Destinatari e trasferimenti extra UE',
    body: (
      <>
        <p>
          I dati possono essere trattati, in qualità di responsabili del trattamento ai sensi dell&apos;art. 28 GDPR,
          dai fornitori dei servizi tecnici necessari al funzionamento del sito, in particolare{' '}
          <strong>Netlify Inc.</strong> (hosting e statistiche aggregate) e il gestore della casella PEC. Le immagini
          della mappa sono fornite da <strong>OpenStreetMap Foundation</strong> (Regno Unito), Paese per il quale la
          Commissione europea ha adottato una decisione di adeguatezza.
        </p>
        <p>
          Il trattamento dei dati da parte di Netlify avviene nel rispetto delle normative vigenti e,
          ove applicabile, sulla base di decisioni di adeguatezza della Commissione europea o di Clausole contrattuali
          standard. I dati non sono diffusi né ceduti a terzi per finalità di marketing.
        </p>
      </>
    ),
  },
  {
    id: 'conservazione',
    title: 'Periodo di conservazione',
    body: (
      <ul>
        <li>Dati di navigazione: per il tempo strettamente necessario e comunque non oltre 30 giorni, salvo esigenze di accertamento di illeciti.</li>
        <li>Statistiche aggregate: in forma anonima, senza limiti di tempo.</li>
        <li>
          Comunicazioni ricevute: per il tempo necessario a gestire la richiesta; se ne deriva un rapporto contrattuale,
          per 10 anni ai sensi dell&apos;art. 2220 c.c.
        </li>
      </ul>
    ),
  },
  {
    id: 'diritti',
    title: 'Diritti dell’interessato',
    body: (
      <>
        <p>
          L&apos;interessato può esercitare in qualsiasi momento i diritti di accesso, rettifica, cancellazione,
          limitazione, portabilità e opposizione previsti dagli artt. 15–22 GDPR, scrivendo a{' '}
          <a href={`mailto:${company.pec}`}>{company.pec}</a>. Il Titolare risponde entro un mese dalla richiesta.
        </p>
        <p>
          L&apos;interessato ha inoltre diritto di proporre reclamo al Garante per la protezione dei dati personali
          (Piazza Venezia 11, 00187 Roma —{' '}
          <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">
            www.garanteprivacy.it
          </a>
          ).
        </p>
      </>
    ),
  },
  {
    id: 'natura',
    title: 'Natura del conferimento e processi decisionali',
    body: (
      <p>
        Il conferimento dei dati tramite PEC è facoltativo, ma necessario per ricevere una risposta. Il Titolare non
        effettua processi decisionali automatizzati né profilazione. Per l&apos;uso di cookie e tecnologie simili si
        rinvia alla <Link href="/cookie-policy">Cookie policy</Link>.
      </p>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <LegalDocument
      currentHref="/privacy"
      eyebrow="Documenti legali"
      title="Privacy policy"
      lead="Informativa sul trattamento dei dati personali resa ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 e del D.Lgs. 196/2003."
      sections={sections}
    />
  )
}
