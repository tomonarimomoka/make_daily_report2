import { useState , useRef} from 'react';
import './App.css';
import { TodoList } from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
function App() {


  type fanctionTogleTodo = (id:number) => void
  //useStateは変数を監視管理するためのフックス
  //const [todos , setTodos ] = useState(["本日の業務" , "所感"]);
  const [todos , setTodos ] = useState<todo[]>([
   //   {id:1,name:"本日の業務",completed:false}
   // , {id:1,name:"所感",completed:true}
  ]);
  //const [value, setValue] = useState<itemType | null>(itemType[0]);
  type  todo = {
    id:number
    ,name:string
    ,completed:boolean
  }
  //todosはオブジェクト
  //todosが更新されると再レンダリングされる

  //要素を取得するuseRef
  const todoNameRef =useRef<HTMLInputElement>();
  const handleAddTodo = () =>{
    //タスクを追加
    //コンソールに出してみる
    //console.log(todoNameRef.current.value);
    //const name = todoNameRef.current.value;
    const name = ( todoNameRef.current!=undefined ) ? (todoNameRef.current.value):"";
    //const name = (todoNameRef!=undefined) ? (( todoNameRef.current!=undefined ) ?todoNameRef.current.value:"");
    if(name === "") return;
    setTodos((prevTodos:todo[]) =>{
      //...はスプレッド構文。今ある状態に一つたす。
      return[...prevTodos,{id:uuidv4(),name:name,completed:false}];
    });
  };

  const handleDelTodo = () =>{
    //タスクを削除
    const newTodos = todos.filter((todo:todo) => !todo.completed);
    setTodos(newTodos);
  }
 
  const togleTodo : fanctionTogleTodo= (id:number) => {
    const newTodos:todo[] = [...todos];
    const todo = newTodos.find((todo) => todo.id === id) ;
    if(typeof(todo) != "undefined"){
      todo.completed = !todo.completed;
      
    }
    setTodos(newTodos);
    
  }
  
  return (
    //このDIVタグは消すとエラーになる。
    <div>      
      {/* <input type="text" ref={todoNameRef}></input> */}
      <input
          type="text"
          ref={(input: HTMLInputElement) => { todoNameRef } }
        />
      <button onClick={handleAddTodo}>追加</button>
      <button onClick={handleDelTodo}>削除</button>
      <div>▼項目一覧（TURE={todos.filter((todo:todo) => !todo.completed).length}個）</div>
      <TodoList todos={todos} togleTodo={togleTodo}/>
    </div>
  );
}

export default App;
