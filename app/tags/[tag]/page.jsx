import { loadData } from "lib/load-data"
import { loadTagList, loadTags } from "lib/tags"
import Columns from "components/columns"

export async function generateStaticParams() {
    const tagList = await loadTagList()
    return tagList.map(([tag]) =>({tag: encodeURI(tag)}))
}

export default async function Page({params}) {
    const tags = await loadTags()
    const data = tags.get(decodeURI(params.tag))

    return <Columns data={data} />
}
