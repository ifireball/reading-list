import path from 'path'
import fs from 'fs/promises'
import YAML from 'yaml'
import { remark } from 'remark'
import html from 'remark-html'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'

const ajv = new Ajv({verbose: true, allErrors: true})
addFormats(ajv)
const dataPath = path.join(process.cwd(), "data")

async function listYamlFiles() {
    console.log(`Loading data from: ${dataPath}`)
    const filesInData = await fs.readdir(dataPath)
    return filesInData
        .filter((f) => f.endsWith('.yaml'))
        .map(f => path.join(dataPath, f))
}

export async function loadData() {
    const yamlFiles = await listYamlFiles()
    const data = await Promise.all(yamlFiles.map(async (file) => {
        const item = YAML.parse(await fs.readFile(file, 'utf-8'))
        item.key = path.basename(file)
        item.notes = (await remark().use(html).process(item.notes)).toString()
        return item
    }))
    return data
}

export async function validateData() {
    const schemaFile = path.join(dataPath, "schema.json")
    const schema = JSON.parse(await fs.readFile(schemaFile, 'utf-8'))
    const validate = ajv.compile(schema)
    var allPassed = true

    const yamlFiles = await listYamlFiles()
    for (const file of yamlFiles) {
        console.log(`Validating: ${path.basename(file)}`)
        const item = YAML.parse(await fs.readFile(file, 'utf-8'))
        if (!validate(item)) {
            console.log(`  ${ajv.errorsText(validate.errors, {separator: "\n  "})}`)
            allPassed = false
        }
    }
    return allPassed
}
