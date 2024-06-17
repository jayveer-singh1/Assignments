import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css'
import EditIcon from '@mui/icons-material/Edit';


function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const editBtn = (id) => {
    let t = todos.find((i) => i.id === id);
    setTodo(t.todo);
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const deleteBtn = (id) => {
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const addBtn = () => {
    if (todo !== '') {
      setTodos([...todos, { id: todos.length, todo, isCompleted: false }]);
      setTodo('');
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const CheckboxBtn = (id) => {
    let index = todos.findIndex((item) => item.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <>
    <h1>To Do list</h1>
    <div className='box-1'>
      <input onChange={handleChange} value={todo} type="text" className='inputText' placeholder='What will You Do?'/>
      <button onClick={addBtn} className='addbtn'>
        <AddIcon/>
      </button>
      <h2>Your Todos</h2>
      {todos.map((item) => (
        <div key={item.id}>
          <input
            name={item.id}
            onChange={() => CheckboxBtn(item.id)}
            type="checkbox"
            checked={item.isCompleted} className='checkbtn'
          />
          <span style={{ marginLeft: '10px', textDecoration: item.isCompleted ? 'line-through' : 'none' }} className='todoData'>{item.todo}</span>
          <button onClick={() => editBtn(item.id)}className='btn'><EditIcon/></button>
          <button onClick={() => deleteBtn(item.id)}><DeleteIcon/></button>
          <hr className='underline'/>
        </div>
      ))}
    </div>
    </>
  );
}

export default App;
