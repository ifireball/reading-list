import { loadData } from "lib/load-data"
import Columns from "components/columns"

export default async function Page() {
    const data = await loadData()
    return <Columns data={data} />
}
