import './globals.css'

export const metadata = {
      title: 'JMB Design & Build | Premium Construction Hertfordshire & London',
      description: 'Award-winning construction company based in Hertfordshire. Specialists in loft conversions, house extensions, home renovations and new builds across Hertfordshire, London and surrounding areas. Houzz Award Winner 2022-2026.',
      keywords: 'JMB Design Build, construction Hertfordshire, loft conversions Potters Bar, house extensions Hertfordshire, home renovations London, new build homes, building contractor Hertfordshire',
      openGraph: {
              title: 'JMB Design & Build | Premium Construction Hertfordshire & London',
              description: 'Award-winning construction specialists. Loft conversions, extensions, renovations and new builds across Hertfordshire and London.',
              type: 'website',
      },
}

export default function RootLayout({ children }) {
      return (
              <html lang="en">
                <head>
                  <link rel="canonical" href="https://hd-tiling.vercel.app"/>
                  <meta name="robots" content="index, follow"/>
                  <meta name="viewport" content="width=device-width, initial-scale=1"/>
                  <meta name="theme-color" content="#1a1a1a"/>
          </head>
          <body>{children}</body>
          </html>
      )
}
