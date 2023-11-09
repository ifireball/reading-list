import css from "./layout.module.scss"

export const metadata = {
  title: 'My reading list',
  description: 'Barak Korren`s reading list',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
        {children}
    </html>
  )
}
