import Todos from '../../redux-toolkit/src/components/Todos';
import AddTodo from '../../redux-toolkit/src/components/AddTodo';
import './App.css';

function App() {
  return (
    <>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
