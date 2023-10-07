import path from 'node:path'
import * as fs from 'node:fs/promises'

export async function loadDataAsProps() {
    const dataPath = path.join(process.cwd(), "data")
    const filesInData = await fs.readdir(dataPath)
    const data = filesInData
    return { props: { data }}
}
