import { useLanguage } from '../context/useLanguage'

const MAP_EMBED_SRC =
  'https://www.openstreetmap.org/export/embed.html?bbox=39.805%2C21.405%2C39.835%2C21.435&layer=mapnik'

export default function OpenStreetMapEmbed() {
  const { t } = useLanguage()
  return (
    <iframe
      title={t('contact.mapTitle')}
      src={MAP_EMBED_SRC}
      className="map-embed__frame"
      width={880}
      height={550}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )
}
