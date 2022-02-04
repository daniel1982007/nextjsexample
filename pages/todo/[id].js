import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import { db } from "../../firebase-config"

const Todo = ({todo}) => {

    return (
        <div>
            <h1>{todo.title}</h1>
            <p>{todo.body}</p>
            <p>{todo.id}</p>
        </div>
    )
}

export default Todo

export async function getStaticPaths() {
    const items = await getDocs(collection(db, 'posts'))
    const paths = items.docs.map(doc => ({params: {id: doc.id}}))

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({params}) {
    const todo_ref = doc(collection(db, 'posts'), params.id)
    const todo = await getDoc(todo_ref)
    console.log(todo.data())
    return {
        props: {
            todo: {
                ...todo.data(),
                id: params.id
            }
        },
        revalidate: 1
    }
}