import React, {useState} from 'react'
import './ToDoList.scss'
import '@fortawesome/fontawesome-free/css/all.css'


function ToDoList(props) {
  const [input, setInput] = useState("")
  const [todoList, setTodoList] = useState([])
  const [edited, setEdited] = useState("")
  const [edit, setEdit] = useState(false)
  
  const handleInput = (e) => {
    if(e.target.value.length === 0){}
    else{
      setInput(e.target.value)
    }
    console.log(input);
  }
  const addItems = (e) => {
    e.preventDefault()
    if(!input.length){}
    else{
      setTodoList(todoList => [...todoList, input]);
      setInput("")
    }
    console.log(todoList);
  }
  const removeTask = (e) => {
    let value = e.target.parentElement.previousElementSibling.value
    setTodoList(todoList.filter(item => item !== value))
    console.log(todoList);
  }
  const doneTask = (e) => {
    e.target.parentElement.previousElementSibling.style.textDecoration = "line-through"
  }
  const editTask = (e) => {
    setEdit(true)
    setInput(e.target.parentElement.previousElementSibling.value)
    // e.target.parentElement.previousElementSibling
    // setTodoList(todoList.map(item => item === value ? ))
    // console.log(e.target.parentElement.previousElementSibling);
  }
  const handleEdit = (e) => {
    if(e.target.value.length === 0){}
    else{
      setEdited(e.target.value)
    }
    console.log(edited);
    console.log(input);
  }
  const editItem = (e) => {
    e.preventDefault()
    setTodoList(todoList.map(item => item === input ? edited : item))
    setEdited("")
    setInput("")
    setEdit(false)
  }
  return (
    <div className="ToDoList">
      <div className="mainTodo">
        <form className="addItems"onSubmit={addItems}>
          <input type="text" placeholder="...write your tasks here" onChange={handleInput} value={input}/>
          <input type="submit" value="add task"></input>
        </form>
        {edit ? (<form className="editItems"onSubmit={editItem}>
          <input type="text" placeholder="...edit your task here" onChange={handleEdit} value={edited}/>
          <input type="submit" value="edit task"></input>
        </form>) : ""}        
        {todoList.map(item=>{return (
          <form className="task" key={Math.random()}>
            <input type="text" value={item}></input>
            <div className="icons">
              <i className="far fa-minus-square" onClick={removeTask} title="delete"></i>
              <i className="far fa-check-square" onClick={doneTask} title="done"></i>
              <i className="far fa-edit" onClick={editTask} title="edit"></i>
            </div>
          </form>
        )})}

      </div>


    </div>
  )
}

export default ToDoList
