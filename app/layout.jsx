export const metadata = {
  title: 'My reading list',
  description: 'Barak Korren`s reading list',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
