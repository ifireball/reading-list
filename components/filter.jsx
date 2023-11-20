import { loadTagList } from "lib/tags"
import Link from "next/link"

export default async function Filter({tag}) {
    const tagList = await loadTagList()

    return <>
        {!tag ? "All (Unfiltered)" : <Link href="/">All (Unfiltered)</Link>}
        <h2>Tags</h2>
        <ul>
            {tagList.map(([aTag, items]) => <li key={aTag}>
                {(aTag == tag) ?
                    `${aTag} (${items.length})`
                    :<Link href={`/tags/${aTag}`}>{aTag} ({items.length})</Link>
                }
            </li>)}
        </ul>
    </>
}
