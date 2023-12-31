import { loadData } from "../lib/load-data"
import Columns from "components/columns"

export default async function Page() {
    const data = await loadData()
    console.log(data)
    const columns = ["To Read", "Reading", "Read"]
    return <>
        <Columns data={data} />
    </>
}
