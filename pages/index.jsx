import { loadDataAsProps } from "../lib/load-data"

export async function getStaticProps() {
    return await loadDataAsProps()
}

export default function Page({ data }) {
    console.log(data)
    return <>
        <h1>My reading list</h1>
        <ul>
            {data.map((item, idx) => <li key={idx}>{item.title}</li>)}
        </ul>
    </>
}
