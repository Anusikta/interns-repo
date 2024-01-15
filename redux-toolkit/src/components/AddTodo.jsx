import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const [check, setCheck] = useState(false)
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        const task = {todo: input, completed: check}
        dispatch(addTodo(task))
        setInput('')
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input type='checkbox' value={check} onChange={(e) => setCheck(e.target.value)} />
      <input
        type="text" value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default AddTodo