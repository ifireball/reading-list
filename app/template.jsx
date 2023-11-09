import css from "./layout.module.scss"
import Image from "next/image"
import Filter from "components/filter"

export default function RootTemplate({ children }) {
    return <body className={css.body}>
        <header className={css.header}>
            <h1>My reading list</h1>
            <a href="https://github.com/ifireball/reading-list">
                <Image
                    src="/reading-list/github-mark.svg"
                    alt="GitHub"
                    title="Fork me on GitHub"
                    width={40}
                    height={40}
                />
            </a>
        </header>
        <nav className={css.nav}><Filter/></nav>
        <main className={css.main}>{children}</main>
        <footer className={css.footer}>
            <p>Copyright &copy; <time>{new Date().getFullYear()}</time> Barak Korren.</p>
        </footer>
    </body>
}
