import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleEdit = (id) => {
    let t = todos.find((i) => i.id === id);
    setTodo(t.todo);
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const handleDelete = (id) => {
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const handleAdd = () => {
    if (todo !== '') {
      setTodos([...todos, { id: todos.length, todo, isCompleted: false }]);
      setTodo('');
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (id) => {
    let index = todos.findIndex((item) => item.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <>
      <h1>iTask - Manage your todos at one place</h1>
      <h2>Add a Todo</h2>
      <input onChange={handleChange} value={todo} type="text" />
      <button onClick={handleAdd}>
        Save
      </button>
      <h2>Your Todos</h2>
      {todos.map((item) => (
        <div key={item.id}>
          <input
            name={item.id}
            onChange={() => handleCheckbox(item.id)}
            type="checkbox"
            checked={item.isCompleted}
          />
          <span style={{ marginLeft: '10px', textDecoration: item.isCompleted ? 'line-through' : 'none' }}>{item.todo}</span>
          <button onClick={() => handleEdit(item.id)}>Edit</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default App;
