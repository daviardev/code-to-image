import './globals.css'

export const metadata = {
  title: 'Image converter to code',
  description: 'Application for convert you code snippet to image'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body>{children}</body>
    </html>
  )
}
