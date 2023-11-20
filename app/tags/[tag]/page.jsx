import { loadData } from "lib/load-data"
import { loadTagList, loadTags } from "lib/tags"

import css from "../../layout.module.scss"

import Columns from "components/columns"
import Filter from "components/filter"

export async function generateStaticParams() {
    const tagList = await loadTagList()
    return tagList.map(([tag]) =>({tag: encodeURI(tag)}))
}

export default async function Page({params}) {
    const tags = await loadTags()
    const tag = decodeURI(params.tag)
    const data = tags.get(tag)

    return <>
        <nav className={css.nav}><Filter tag={tag}/></nav>
        <main className={css.main}><Columns data={data}/></main>
    </>
}
