#!/usr/bin/env node
import { validateData } from "../src/lib/load-data.js"

if (await validateData()) {
    process.exit(0)
} else {
    process.exit(1)
}
