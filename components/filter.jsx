import { loadTagList } from "lib/tags"
import Link from "next/link"

export default async function Filter() {
    const tagList = await loadTagList()

    return <>
        <Link href="/">All (Unfiltered)</Link>
        <h2>Tags</h2>
        <ul>
            {tagList.map(([tag, items]) => <li key={tag}>
                <Link href={`/tags/${tag}`}>{tag} ({items.length})</Link>
            </li>)}
        </ul>
    </>
}
