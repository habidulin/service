import { MacSvg, ContactsImage, IMacImage, MacBookImage, IPhoneImage, IPadImage, WatchImage, AirPodsImage, WindowsImage, AndroidImage } from '../components/DeviceSvgs.jsx'

export const categories = [
  { key: 'iMac', label: 'iMac' },
  { key: 'MacBook', label: 'MacBook' },
  { key: 'iPad', label: 'iPad' },
  { key: 'iPhone', label: 'iPhone' },
  { key: 'Watch', label: 'Watch' },
  { key: 'AirPods', label: 'AirPods' },
  { key: 'Windows', label: 'Windows' },
  { key: 'Android', label: 'Android' },
  { key: 'Contacts', label: 'Contacts' },
]

export const services = {
  iPhone: [
    { name: 'Display Reparatur', price: '299€', link: '/repair/iphone/display' },
    { name: 'Akku Austausch', price: '149€', link: '/repair/iphone/akku' },
    { name: 'Backcover Austausch', price: '199€', link: '/repair/iphone/backcover' },
    { name: 'Kamera Reparatur', price: '179€', link: '/repair/iphone/kamera' },
    { name: 'Audio Reparatur', price: '89€', link: '/repair/iphone/audio' },
    { name: 'Tasten Reparatur', price: '79€', link: '/repair/iphone/tasten' },
    { name: 'Ladebuchse Reparatur', price: '99€', link: '/repair/iphone/ladebuchse' },
    { name: 'Wasserschaden Reparatur', price: '249€', link: '/repair/iphone/wasserschaden' },
    { name: 'Software Update / Reparatur', price: '59€', link: '/repair/iphone/software' },
    { name: 'Diagnose', price: '39€', link: '/repair/iphone/diagnose' },
  ],
  iPad: [
    { name: 'Display Reparatur', price: '249€', link: '/repair/ipad/display' },
    { name: 'Akku Austausch', price: '129€', link: '/repair/ipad/akku' },
    { name: 'Kamera Reparatur', price: '159€', link: '/repair/ipad/kamera' },
    { name: 'Audio Reparatur', price: '79€', link: '/repair/ipad/audio' },
    { name: 'Ladebuchse Reparatur', price: '89€', link: '/repair/ipad/ladebuchse' },
    { name: 'Wasserschaden Reparatur', price: '199€', link: '/repair/ipad/wasserschaden' },
    { name: 'Software Update / Reparatur', price: '49€', link: '/repair/ipad/software' },
    { name: 'Diagnose', price: '29€', link: '/repair/ipad/diagnose' },
  ],
  iMac: [
    { name: 'Display Reparatur', price: '399€', link: '/repair/imac/display' },
    { name: 'Audio Reparatur', price: '99€', link: '/repair/imac/audio' },
    { name: 'Tasten Reparatur', price: '149€', link: '/repair/imac/tasten' },
    { name: 'Wasserschaden Reparatur', price: '299€', link: '/repair/imac/wasserschaden' },
    { name: 'Software Update / Reparatur', price: '69€', link: '/repair/imac/software' },
    { name: 'Diagnose', price: '49€', link: '/repair/imac/diagnose' },
  ],
  MacBook: [
    { name: 'Display Reparatur', price: '299€', link: '/repair/macbook/display' },
    { name: 'Akku Austausch', price: '149€', link: '/repair/macbook/akku' },
    { name: 'Audio Reparatur', price: '89€', link: '/repair/macbook/audio' },
    { name: 'Tasten Reparatur', price: '129€', link: '/repair/macbook/tasten' },
    { name: 'Ladebuchse Reparatur', price: '79€', link: '/repair/macbook/ladebuchse' },
    { name: 'Wasserschaden Reparatur', price: '199€', link: '/repair/macbook/wasserschaden' },
    { name: 'Software Update / Reparatur', price: '59€', link: '/repair/macbook/software' },
    { name: 'Diagnose', price: '39€', link: '/repair/macbook/diagnose' },
  ],
  Watch: [
    { name: 'Software Update / Reparatur', price: '49€', link: '/repair/watch/software' },
    { name: 'Diagnose', price: '29€', link: '/repair/watch/diagnose' },
  ],
  AirPods: [
    { name: 'Diagnose', price: '19€', link: '/repair/airpods/diagnose' },
  ],
  Windows: [
    { name: 'Display Reparatur', price: '199€', link: '/repair/windows/display' },
    { name: 'Akku Austausch', price: '119€', link: '/repair/windows/akku' },
    { name: 'Audio Reparatur', price: '69€', link: '/repair/windows/audio' },
    { name: 'Tasten Reparatur', price: '99€', link: '/repair/windows/tasten' },
    { name: 'Ladebuchse Reparatur', price: '59€', link: '/repair/windows/ladebuchse' },
    { name: 'Wasserschaden Reparatur', price: '179€', link: '/repair/windows/wasserschaden' },
    { name: 'Software Update / Reparatur', price: '39€', link: '/repair/windows/software' },
    { name: 'Diagnose', price: '29€', link: '/repair/windows/diagnose' },
  ],
  Android: [
    { name: 'Display Reparatur', price: '149€', link: '/repair/android/display' },
    { name: 'Akku Austausch', price: '99€', link: '/repair/android/akku' },
    { name: 'Backcover Austausch', price: '129€', link: '/repair/android/backcover' },
    { name: 'Kamera Reparatur', price: '119€', link: '/repair/android/kamera' },
    { name: 'Audio Reparatur', price: '59€', link: '/repair/android/audio' },
    { name: 'Tasten Reparatur', price: '69€', link: '/repair/android/tasten' },
    { name: 'Ladebuchse Reparatur', price: '49€', link: '/repair/android/ladebuchse' },
    { name: 'Wasserschaden Reparatur', price: '159€', link: '/repair/android/wasserschaden' },
    { name: 'Software Update / Reparatur', price: '29€', link: '/repair/android/software' },
    { name: 'Diagnose', price: '19€', link: '/repair/android/diagnose' },
  ],
  Contacts: [
    { name: 'Diagnose', price: '39€', link: '/repair/contacts/diagnose' },
  ],
}

export const heroSvgs = {
  iMac: <IMacImage />,
  MacBook: <MacBookImage />,
  iPad: <IPadImage />,
  iPhone: <IPhoneImage />,
  Watch: <WatchImage />,
  AirPods: <AirPodsImage />,
  Windows: <WindowsImage />,
  Android: <AndroidImage />,
  Contacts: <ContactsImage />,
}

export const reviews = [
  {
    author: 'Tim Halberstadt',
    date: '4 Juli 2025',
    rating: 5,
    text: 'Super freundliche und kompetente Beratung! Mein Anliegen wurde kurzfristig geklärt – vielen Dank an das Team.',
  },
  {
    author: 'kroko530',
    date: '4 Juli 2025',
    rating: 5,
    text: 'Wir waren bestens zufrieden. Ein gut organisiertes Team – kann ich nur weiterempfehlen.',
  },
  {
    author: 'Jakob Neuberger',
    date: '3 Juli 2025',
    rating: 5,
    text: 'Hier erhält man nicht nur eine kompetente Beratung, sondern auch einen klasse Service. Immer wieder gerne.',
  },
  {
    author: 'Mariya S.',
    date: '1 Juli 2025',
    rating: 5,
    text: 'Sehr schnelle Reparatur und faire Preise. Kommunikation top – Gerät wie neu zurückbekommen.',
  },
  {
    author: 'Andreas K.',
    date: '28 Juni 2025',
    rating: 5,
    text: 'Kurz angerufen, direkt einen Termin bekommen. Display gewechselt – alles sauber und professionell.',
  },
  {
    author: 'Sophie L.',
    date: '22 Juni 2025',
    rating: 5,
    text: 'Mega freundlich und transparente Beratung. Ich komme definitiv wieder!',
  },
  {
    author: 'Lena M.',
    date: '18 Juni 2025',
    rating: 5,
    text: 'Sehr guter Service von Anfang bis Ende. Ehrliche Beratung, alles verständlich erklärt und der Preis war genau wie vorher abgesprochen. Die Reparatur ging schneller als erwartet und ich konnte mein Gerät noch am selben Tag abholen. Absolute Empfehlung!',
  },
  {
    author: 'Daniel R.',
    date: '10 Juni 2025',
    rating: 5,
    text: 'Top Erfahrung: Erst Diagnose, dann mehrere Optionen (schnell / günstig / original). Keine versteckten Kosten, super sauber gearbeitet. Nach der Reparatur wurde alles getestet und ich habe sogar ein paar Tipps zur Pflege bekommen. Vielen Dank!',
  },
  {
    author: 'Nina P.',
    date: '2 Juni 2025',
    rating: 5,
    text: 'Ich bin wirklich begeistert. Kommunikation per WhatsApp war schnell, Termin flexibel und vor Ort sehr freundlich. Problem sofort erkannt, kaum Wartezeit und das Ergebnis ist perfekt. Wenn wieder was ist, komme ich direkt hierher.',
  },
]
