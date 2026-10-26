export const company = {
  name: 'REMITER S.A.S.',
  legalForm: 'Società in accomandita semplice',
  taxCode: '02879310692',
  rea: 'CH-440512',
  address: {
    street: 'Contrada Cetti, 18',
    zip: '66023',
    city: 'Francavilla al Mare',
    province: 'CH',
  },
  // Valori PEC da sostituire con quelli ufficiali riportati in visura.
  pec: 'remitersas@pec.it',
  // Geocodifica OpenStreetMap del civico 18, Contrada Cetti, 66023 Francavilla al Mare (CH).
  coordinates: [42.4238134, 14.2668677] as [number, number],
  registry: 'Registro delle Imprese di Chieti Pescara',
}

export const legalUpdatedAt = '23 ottobre 2026'

export const legalLinks = [
  { href: '/privacy', label: 'Privacy policy' },
  { href: '/cookie-policy', label: 'Cookie policy' },
  { href: '/note-legali', label: 'Note legali' },
]

export const fullAddress = `${company.address.street}, ${company.address.zip} ${company.address.city} (${company.address.province})`

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/chi-siamo', label: 'Chi siamo' },
  { href: '/servizi', label: 'Servizi' },
]

export type ActivityKey =
  | 'movimento-terra'
  | 'demolizione'
  | 'costruzioni'
  | 'appalti'
  | 'noleggio'
  | 'agricoltura'

export const activities: { key: ActivityKey; label: string }[] = [
  { key: 'movimento-terra', label: 'Movimento terra' },
  { key: 'demolizione', label: 'Demolizioni' },
  { key: 'costruzioni', label: 'Costruzioni edili' },
  { key: 'appalti', label: 'Gestione appalti' },
  { key: 'noleggio', label: 'Noleggio mezzi' },
  { key: 'agricoltura', label: 'Agricoltura' },
]

export const services = [
  {
    title: 'Movimento terra e scavi',
    description: 'Sbancamenti, scavi di fondazione, livellamenti e preparazione dei terreni con mezzi propri.',
    items: ['Scavi a sezione obbligata e ampia', 'Rinterri e riempimenti', 'Livellamento e compattazione', 'Opere di drenaggio'],
  },
  {
    title: 'Demolizioni',
    description: 'Demolizioni totali e parziali di fabbricati e manufatti, con gestione dei materiali di risulta.',
    items: ['Demolizioni controllate', 'Strip-out interni', 'Rimozione macerie', 'Avvio a recupero e smaltimento'],
  },
  {
    title: 'Costruzioni edili',
    description: 'Realizzazione di edifici civili e industriali, dalle opere strutturali al grezzo avanzato.',
    items: ['Nuove costruzioni', 'Opere in cemento armato', 'Ampliamenti', 'Ristrutturazioni'],
  },
  {
    title: 'Opere di muratura',
    description: 'Murature portanti e di tamponamento, tramezzature e opere murarie di completamento.',
    items: ['Murature in blocchi e laterizio', 'Tramezzi e divisori', 'Intonaci', 'Ripristini strutturali'],
  },
  {
    title: 'Finiture edili',
    description: 'Lavori di finitura per consegnare ambienti pronti all’uso, curati in ogni dettaglio.',
    items: ['Massetti e sottofondi', 'Pavimenti e rivestimenti', 'Cartongesso', 'Tinteggiature'],
  },
  {
    title: 'Gestione appalti',
    description: 'Assunzione e coordinamento di appalti pubblici e privati, con gestione completa del cantiere.',
    items: ['Partecipazione a gare', 'Coordinamento subappalti', 'Direzione operativa di cantiere', 'Sicurezza e documentazione'],
  },
  {
    title: 'Noleggio macchine',
    description: 'Noleggio di macchine movimento terra e attrezzature edili, con o senza operatore.',
    items: ['Escavatori e miniescavatori', 'Pale e terne', 'Attrezzature di cantiere', 'Noleggio con operatore'],
  },
  {
    title: 'Trasporti',
    description: 'Trasporto conto terzi di materiali inerti, mezzi d’opera e materiali da costruzione.',
    items: ['Trasporto inerti', 'Movimentazione mezzi', 'Consegna materiali in cantiere', 'Trasporto materiali di risulta'],
  },
  {
    title: 'Produzione e commercio agricolo',
    description: 'Coltivazione, produzione e commercializzazione di prodotti agricoli e lavorazioni per conto terzi.',
    items: ['Lavorazioni agricole', 'Sistemazione fondi rustici', 'Commercio prodotti agricoli', 'Manutenzione del verde'],
  },
]

export const companyPurposeFull = [
  'Esecuzione di lavori di movimento terra, scavi, sbancamenti e rinterri',
  'Demolizione di edifici e di altre strutture',
  'Costruzione di edifici residenziali e non residenziali',
  'Ristrutturazione, manutenzione ordinaria e straordinaria di fabbricati',
  'Realizzazione di opere murarie e strutture in cemento armato',
  'Lavori di finitura e completamento degli edifici',
  'Posa in opera di pavimenti e rivestimenti',
  'Realizzazione di opere stradali e di urbanizzazione',
  'Lavori di drenaggio e sistemazione idraulica dei terreni',
  'Assunzione di appalti pubblici e privati nel settore edile',
  'Noleggio di macchine e attrezzature per lavori edili, con o senza operatore',
  'Trasporto di merci su strada per conto terzi',
  'Commercio di materiali edili e inerti',
  'Coltivazione e produzione di prodotti agricoli',
  'Commercio all’ingrosso e al dettaglio di prodotti agricoli',
  'Lavorazioni agricole e sistemazione di terreni per conto terzi',
  'Manutenzione del verde pubblico e privato',
]

export const companyPurposeServices = companyPurposeFull.filter((_, i) =>
  [0, 1, 2, 3, 5, 7, 9, 10, 11, 12, 13, 15].includes(i),
)

export const partners = [{ name: 'Francesco' }, { name: 'Stefania' }]

export const workflow = [
  { title: 'Analisi', description: 'Sopralluogo, rilievo delle esigenze e valutazione tecnica del sito.' },
  { title: 'Pianificazione', description: 'Preventivo dettagliato, cronoprogramma e organizzazione di mezzi e squadre.' },
  { title: 'Esecuzione', description: 'Lavori in cantiere nel rispetto di tempi, sicurezza e normative.' },
  { title: 'Consegna', description: 'Verifica finale, pulizia del cantiere e consegna dell’opera finita.' },
]
