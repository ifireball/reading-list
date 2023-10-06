export async function getStaticProps() {
    const data = ['a', 'b', 'c']
    return { props: { data }}
}

export default function Page({ data }) {
    console.log(data)
    return <>
        <h1>My reading list</h1>
    </>
}
