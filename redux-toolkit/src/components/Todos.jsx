import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo } from '../features/todo/todoSlice'
import axios from 'axios';

function Todos() {
  // const [data, setData] = useState([{id: 2, todo: "Anu"}])
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/todos");
      const data = await res.data;
      const arrData = data.todos;
      // console.log(data);
      // console.log(arrData);
      //setData(data);
      arrData.map((d) => (dispatch(addTodo(d))));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  // const showData = async() => {
  //   try {
  //     loadData();
  //     console.log(data);
  //     data.map((d) => dispatch(addTodo(d)));
  //   } catch(e){
  //     console.error("Error",e);
  //   }
  // }

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((t) => (
          <div>
            <input type="checkbox" value={t.completed ? true : false} />
            <li key={t.id} >
              <div key={t.id}>{t.todo}</div>
            </li>
            <button
              onClick={() => dispatch(removeTodo(t.id))}
            >Delete
            </button>
          </div>
        ))}
      </ul>
    </>
  )
}

export default Todos