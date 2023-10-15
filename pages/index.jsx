import { loadData } from "../lib/load-data"
import Columns from "components/columns"

export async function getStaticProps() {
    return {props: {data: await loadData()}}
}

export default function Page({ data }) {
    console.log(data)
    const columns = ["To Read", "Reading", "Read"]
    return <>
        <header>
            <h1>My reading list</h1>
        </header>
        <main>
            <Columns data={data} />
        </main>
    </>
}
