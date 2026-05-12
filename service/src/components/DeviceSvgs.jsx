const directionHeroImages = import.meta.glob('../assets/headers/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
})

function DirectionHero({ slug, alt, fallback }) {
  const heroEntry = Object.entries(directionHeroImages).find(([path]) =>
    path.startsWith(`../assets/headers/${slug}.`),
  )
  const src = heroEntry?.[1]
  if (!src) return fallback ?? null
  return <img src={src} alt={alt} className="device-svg" />
}

function IPhoneSvg() {
  return (
    <svg viewBox="0 0 200 400" className="device-svg">
      <rect x="20" y="50" width="160" height="300" rx="30" fill="#000" />
      <rect x="30" y="70" width="140" height="260" rx="20" fill="#fff" />
      <circle cx="100" cy="320" r="8" fill="#000" />
    </svg>
  )
}

function IPadSvg() {
  return (
    <svg viewBox="0 0 300 400" className="device-svg">
      <rect x="30" y="40" width="240" height="320" rx="20" fill="#000" />
      <rect x="40" y="60" width="220" height="280" rx="15" fill="#fff" />
      <circle cx="150" cy="350" r="10" fill="#000" />
    </svg>
  )
}

function MacSvg() {
  return (
    <svg viewBox="0 0 400 250" className="device-svg">
      <rect x="50" y="20" width="300" height="200" rx="15" fill="#000" />
      <rect x="60" y="40" width="280" height="160" rx="10" fill="#fff" />
      <rect x="150" y="210" width="100" height="10" rx="5" fill="#000" />
    </svg>
  )
}

function WatchSvg() {
  return (
    <svg viewBox="0 0 200 200" className="device-svg">
      <circle cx="100" cy="100" r="90" fill="#000" />
      <circle cx="100" cy="100" r="75" fill="#fff" />
      <circle cx="100" cy="100" r="5" fill="#000" />
    </svg>
  )
}

function AirPodsSvg() {
  return (
    <svg viewBox="0 0 200 100" className="device-svg">
      <ellipse cx="50" cy="50" rx="30" ry="40" fill="#000" />
      <ellipse cx="150" cy="50" rx="30" ry="40" fill="#000" />
      <rect x="80" y="45" width="40" height="10" rx="5" fill="#000" />
    </svg>
  )
}

function WindowsSvg() {
  return (
    <svg viewBox="0 0 400 250" className="device-svg">
      <rect x="50" y="20" width="300" height="200" rx="15" fill="#000" />
      <rect x="60" y="40" width="280" height="160" rx="10" fill="#fff" />
      <rect x="150" y="210" width="100" height="10" rx="5" fill="#000" />
    </svg>
  )
}

function ContactsSvg() {
  return (
    <svg viewBox="0 0 240 240" className="device-svg" aria-hidden="true">
      <rect x="70" y="30" width="100" height="180" rx="22" fill="#000" />
      <rect x="80" y="52" width="80" height="136" rx="14" fill="#fff" />
      <circle cx="120" cy="196" r="6" fill="#fff" />
      <path
        d="M132 88c-10-8-26-8-36 0-10 8-12 23-4 33l8 10c3 4 7 6 12 6h16c5 0 9-2 12-6l8-10c8-10 6-25-4-33z"
        fill="#1971c2"
        opacity="0.9"
      />
    </svg>
  )
}

function IMacImage() {
  return <DirectionHero slug="imac" alt="iMac" fallback={<MacSvg />} />
}

function IPhoneImage() {
  return <DirectionHero slug="iphone" alt="iPhone" fallback={<IPhoneSvg />} />
}

function MacBookImage() {
  return <DirectionHero slug="macbook" alt="MacBook" fallback={<MacSvg />} />
}

function IPadImage() {
  return <DirectionHero slug="ipad" alt="iPad" fallback={<IPadSvg />} />
}

function WatchImage() {
  return <DirectionHero slug="watch" alt="Watch" fallback={<WatchSvg />} />
}

function AirPodsImage() {
  return <DirectionHero slug="airpods" alt="AirPods" fallback={<AirPodsSvg />} />
}

function WindowsImage() {
  return <DirectionHero slug="windows" alt="Windows" fallback={<WindowsSvg />} />
}

function AndroidImage() {
  return <DirectionHero slug="android" alt="Android" fallback={<IPhoneSvg />} />
}

function ContactsImage() {
  return <DirectionHero slug="contacts" alt="Contacts" fallback={<ContactsSvg />} />
}

export {
  IPhoneSvg,
  IPadSvg,
  MacSvg,
  WatchSvg,
  AirPodsSvg,
  WindowsSvg,
  ContactsSvg,
  IMacImage,
  MacBookImage,
  IPhoneImage,
  IPadImage,
  WatchImage,
  AirPodsImage,
  WindowsImage,
  AndroidImage,
  ContactsImage,
}
