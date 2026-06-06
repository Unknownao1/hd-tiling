import './globals.css'

export const metadata = {
    title: 'HD Tiling | Premium Bathroom Renovations',
    description: 'Expert bathroom tiling and renovation services. Transform your bathroom with HD Tiling.',
}

export default function RootLayout({ children }) {
    return (
          <html lang="en">
            <body>{children}</body>
      </html>
    )
}
