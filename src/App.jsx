import './App.css'
import { useState } from 'react';

function App() {
    // handle Textbox value
    const [input, setInput] = useState("");
    // prepare todos handler array
    const [todos, setTodos] = useState([]);


    // handle submit click
    function addTodo() {
        if (input == "") {
            alert(`Please type your to-do and click Submit`)
        } else {
            const item = {
                id: Math.floor(Math.random() * 1000),
                value: input,
                status: false
            }
            setTodos(oldTodos => [...oldTodos, item])
            setInput("")
        }
        
    }
    // handle delete todo
    function deleteTodo(id) {
        const newTodoList = todos.filter(todo => todo.id !== id)
        setTodos(newTodoList)
    }

    // mark todo as done
    function doneTodo(id) {
        const todoIndex = todos.findIndex(todo => todo.id == id)
        const tmpTodos = [...todos]
        tmpTodos[todoIndex].status = true
        setTodos(tmpTodos)
    }



    return (
        <div className="App">
            <h1>To-do App</h1>
            <input onChange={e => setInput(e.target.value)} value={input} placeholder='Add todo' />
            <button onClick={() => addTodo()}>Submit</button>
            <br />
            <ul>
                {todos.map(todo => {
                    return (
                        <li key={todo.id} style={{ textDecoration: todo.status ? 'line-through' : ''}}>
                            {todo.value}
                            <div className='buttons-right'>
                                <button onClick={() => deleteTodo(todo.id)}>&#x2715;</button>
                                <button onClick={() => doneTodo(todo.id)}>&#10003;</button>
                            </div>

                        </li>
                    )
                })}
            </ul>

            


        </div>
    )
}

export default App
