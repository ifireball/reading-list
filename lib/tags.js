import { loadData } from "./load-data";

export async function loadTags() {
    const data = await loadData()
    const tags = new Map()

    data.forEach((item) => {
        item.tags.forEach((tag) => {
            const tagList = (tags.get(tag) || [])
            tags.set(tag, tagList)
            tagList.push(item)
        })
    })
    return tags
}

export async function loadTagList() {
    const tags = await loadTags()
    const tagList = Array.from(tags.entries())
    tagList.sort()
    return tagList
}
