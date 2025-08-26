
import Todo from "./Todo"
import React from 'react'
//型を宣言
interface todo {
  id:number , 
  name:string , 
  completed:boolean
}
type fanctionTogleTodo = (id:number) => void
// type  todo = {
//   id:number , 
//   name:string , 
//   completed:boolean
// }

//関数コンポーネント
//exportはどこからでもつかるということ（Javaと同じ）
export const TodoList = (todos:todo[] , togleTodo:fanctionTogleTodo) => {
  return (
    //｛｝の中に変数を直接書くことができる
    //<div>{todos}</div>
    todos.map((todo:todo) => <Todo todo={todo} togleTodo={togleTodo}/>)
  )
}
