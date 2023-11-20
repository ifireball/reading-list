import { loadData } from "lib/load-data"
import css from "./layout.module.scss"

import Columns from "components/columns"
import Filter from "components/filter"

export default async function Page() {
    const data = await loadData()

    return <>
        <nav className={css.nav}><Filter/></nav>
        <main className={css.main}><Columns data={data}/></main>
    </>
}
