import { loadTagList } from "lib/tags"

export default async function Filter() {
    const tagList = await loadTagList()

    return <>
        <h2>Tags</h2>
        <ul>
            {tagList.map(([tag, items]) => <li>
                {tag} ({items.length})
            </li>)}
        </ul>
    </>
}
