import css from './columns.module.scss'

export default function Columns({ data }) {
    const columns = ["To Read", "Reading", "Read"]
    return <div className={css.columns}>
        {columns.map((col) => <Column
            key={col}
            title={col}
            items={data.filter(({status}) => status.toLowerCase() === col.toLowerCase())}
        />)}
    </div>
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
