import { getDoc, doc, collection } from "firebase/firestore"

export default function Todo({data}) {
    
    return (
        <h1>{data}</h1>
    )
}

// export async function getStaticPaths() {
//     const todos = await getDocs(collection(db, 'posts'))
//     const ids = todos.docs.map(doc => doc.data())

//     return {
//         paths: ids,
//         fallback: true
//     }
// }

export function getStaticProps(context) {
    const id = context.query.id
    const doc = doc(collection(db, 'posts'), id)
    const item = getDoc(doc)
    return {
        props: {
            data: item
        }
    }
}