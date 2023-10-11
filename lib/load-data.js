import path from 'path'
import fs from 'fs/promises'
import YAML from 'yaml'
import { remark } from 'remark'
import html from 'remark-html'

export async function loadDataAsProps() {
    const dataPath = path.join(process.cwd(), "data")
    const filesInData = await fs.readdir(dataPath)
    const yamlFiles = filesInData.filter((f) => f.endsWith('.yaml'))
    const data = await Promise.all(yamlFiles.map(async (file) => {
        const item = YAML.parse(await fs.readFile(path.join(dataPath, file), 'utf-8'))
        item.key = file
        item.notes = (await remark().use(html).process(item.notes)).toString()
        return item
    }))
    return { props: { data }}
}
