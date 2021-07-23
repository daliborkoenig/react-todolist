import React, {useState} from 'react'
import anime from 'animejs'
import './Notebook.scss'
import ToDoList from './ToDoList';


function Notebook() {
  const [coverView, setCoverView] = useState(true)
  const [open, setOpen] = useState(false)

  const openBook = (e) => {
    // setZindex(false)
    if(open){
      setTimeout(() => {
        setCoverView(true)
      }, 400);
      anime({
        targets: '.notebook-cover',
        rotateY: 0,
        duration: 400,
      });
      setOpen(false)
    }
    else{
      setTimeout(() => {
        setCoverView(false)
      }, 270);
      anime({
        targets: '.notebook-cover',
        rotateY: -180,
        duration: 400,
      });
      setOpen(true)
    }

  }
  return (
    <div className="Notebook">
      <div className="notebook-wrapper">
        <div className="notebook">
          <div className="notebook-cover" onClick={openBook}>
            {coverView ? <div className="notebook-skin">To Do List</div> : ""}
            <p className="copy"></p>
          </div>
          <div className="notebook-page">
            <ToDoList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notebook

