import React, { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { ITodo } from './interfaces';
import { Header } from './components/Header';


function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTitle = (title:string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    console.log(newTodo);
    setTodos(prev => [...prev, newTodo])
  }

  const removeTodo = (id:number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  // const checkedTodo = (id:number) => {
  //   setTodos(prev => prev.map(todo => {
      
  //     if (todo.id === id) {
  //       todo.completed = !todo.completed;
  //       console.log('ckecked', todo)
  //       // className={todo.completed ? 'completed' : ''}
  //     }
      
  //     return {...todo}
  //   }))
  // }

  // const checkedTodo = (selectedTodo:any) => {
  //   const newTodos = todos.map(todo => {
  //     if (todo == selectedTodo) {
  //       return{
  //         ...todo,
  //         completed: !todo.completed
  //       }
  //     }
  //     return todo
  //   })
  //   setTodos(newTodos)
  // }

  const checkedTodo = (id:number) => {
    const newTodos = todos.map(todo => {
      if (todo.id == id) {
        return{
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }
  

  return (
    <div className="App">
      <Header />
      <div className="main-wrapper">
        <div className="container">
          <TodoInput onAdd={addTitle}/>
          <TodoList todos={todos} onRemove={removeTodo} onChecked={checkedTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
