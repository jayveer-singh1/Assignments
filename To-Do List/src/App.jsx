import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import './App.css'
import EditIcon from '@mui/icons-material/Edit';

function App() {
  const [text, setText] = useState('')
  const [todo, setTodo] = useState([])
  let addTodo = () => {
    // let newTodo=[...todo]
    // newTodo.push(text)
    // setTodo(newTodo)
    // setText('')
    let newTodo = [...todo]

    if (todo.length >= 1) {
      let newId = todo[todo.length - 1].id + 1
      newTodo.push({ id: newId, task: text, isComplete: false })
    }
    else newTodo.push({ id: 1, task: text, isComplete: false })
    setTodo(newTodo)
    setText('')
    console.log(todo)
  }
  let deleteTast = (i) => {
    let newTodo = [...todo]
    newTodo.splice(i, 1)
    setTodo(newTodo)

    // setTodo(todo.filter((v,index)=>index!=i))
  }
  let taskComplete = (i) => {
    let newTodo = [...todo]
    newTodo[i].isComplete = true
    setTodo(newTodo)
  }
  return (<>
  <h1>To Do List</h1>
    <div className='box-1'>
      <input type="text" onChange={(e) => setText(e.target.value)} value={text} className='inputText' placeholder='What will you do?' />
      <button onClick={addTodo} className='addbtn'><AddIcon /></button>
    </div>

    <ol className='box-1'>
      {todo.map((v, i) => {
        return <li>
          <span style={{ textDecoration: v.isComplete ? 'line-through' : 'none' }}>{v.task} </span>
          <button onClick={() => taskComplete(i)}><DoneIcon /></button>
          <button onClick={() => deleteTast(i)}><DeleteIcon /></button>

        </li>
      })
      }
    </ol>

  </>

  )
}

export default App