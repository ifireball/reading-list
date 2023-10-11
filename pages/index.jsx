import { loadDataAsProps } from "../lib/load-data"

export async function getStaticProps() {
    return await loadDataAsProps()
}

export default function Page({ data }) {
    console.log(data)
    const columns = ["To Read", "Reading", "Read"]
    return <main>
        <h1>My reading list</h1>
        <div className="columns">
            {columns.map((col) => <Column
                key={col}
                title={col}
                items={data.filter(({status}) => status.toLowerCase() === col.toLowerCase())}
            />)}
        </div>
        <style jsx>{`
            .columns {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                > :global(*) {
                    padding: 0.5em;
                    border-right: 1px solid black;
                    > :global(article) {
                        background: white;
                        padding: 0 0.5em;
                        margin-bottom: 0.5em;
                        border: solid 1px;
                        border-radius: 5px;
                    }
                }
                > :global(:first-child) {
                    background-color: rgb(227, 255, 227);
                    > :global(article) {
                        border-color: green;
                    }
                }
                > :global(:nth-child(2)) {
                    background-color: rgb(229, 229, 255);
                    > :global(article) {
                        border-color: rgb(157, 157, 255);
                    }
                }
                > :global(:last-child) {
                    background-color: rgb(224, 224, 224);
                    border-right: none;
                    > :global(article) {
                        border-color: gray;
                    }
                }
            }
        `}</style>
    </main>
}

export function Column({ title, items }) {
    return <section className="root">
        <h2>{title}</h2>
        {items.map((item) => <Item key={item.key} {...item} />)}
    </section>
}

export function Item({ title, url, notes }) {
    return <article>
        <h3><a href={url}>{title}</a></h3>
        <div dangerouslySetInnerHTML={{__html: notes}} />
    </article>
}
