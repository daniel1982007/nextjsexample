const TodoList = ({todos})  => {
    console.log(todos)
    return (
        todos.map(todo => {
            return (
                <div key={todo.id}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.body}</h2>
                </div>
            )
        })
    )
}

export default TodoList