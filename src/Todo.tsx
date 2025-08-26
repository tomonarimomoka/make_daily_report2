import React from 'react'
//型を宣言
interface todo {
  id:number
  ,name:string
  ,completed:boolean
}
type fanctionTogleTodo = (id:number) => void

const Todo = (todo:todo, togleTodo:fanctionTogleTodo) => {
  const handleTodoClecked = () => {
    togleTodo(todo.id);
  }
  return (
    <>
      <label>
        <input 
        type='checkbox' 
        checked={todo.completed} 
        readOnly 
        onChange={handleTodoClecked}></input>
      </label>
      {todo.name}
    </>
  )
}
export default Todo