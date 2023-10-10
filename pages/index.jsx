import { loadDataAsProps } from "../lib/load-data"

export async function getStaticProps() {
    return await loadDataAsProps()
}

export default function Page({ data }) {
    console.log(data)
    const columns = ["To Read", "Reading", "Read"]
    return <main>
        <style jsx>{`
            .columns {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
            }
        `}</style>
        <h1>My reading list</h1>
        <div className="columns">
            {columns.map((col) => <Column
                key={col}
                title={col}
                items={data.filter(({status}) => status.toLowerCase() === col.toLowerCase())}
            />)}
        </div>
    </main>
}

export function Column({ title, items }) {
    return <section className="root">
        <style jsx>{`
            .root { padding: 1em }
        `}</style>
        <h2>{title}</h2>
        {items.map((item) => <Item key={item.key} {...item} />)}
    </section>
}

export function Item({ title, url, notes }) {
    return <article>
        <h3><a href={url}>{title}</a></h3>
        <p>{notes}</p>
    </article>
}
