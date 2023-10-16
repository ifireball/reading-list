import css from "./layout.module.scss"

export const metadata = {
  title: 'My reading list',
  description: 'Barak Korren`s reading list',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
        <body className={css.body}>
            <header className={css.header}>
                <h1 className={css.h}>My reading list</h1>
            </header>
            <main className={css.main}>{children}</main>
            <footer className={css.footer}>
                <p>Copyright &copy; <time>{new Date().getFullYear()}</time> Barak Korren.</p>
            </footer>
        </body>
    </html>
  )
}
