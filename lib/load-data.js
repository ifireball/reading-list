import path from 'node:path'
import * as fs from 'node:fs/promises'
import YAML from 'yaml'

export async function loadDataAsProps() {
    const dataPath = path.join(process.cwd(), "data")
    const filesInData = await fs.readdir(dataPath)
    const yamlFiles = filesInData.filter((f) => f.endsWith('.yaml'))
    const data = await Promise.all(yamlFiles.map(async (file) => {
        return YAML.parse(await fs.readFile(path.join(dataPath, file), 'utf-8'))
    }))
    return { props: { data }}
}
