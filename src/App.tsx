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
    setTodos([...todos, newTodo])
  }

  const removeTodo = (id:number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const checkedTodo = (id:number) => {
    setTodos(prev => prev.map(todo => {
      
      if (todo.id === id) {
        todo.completed = !todo.completed;
        console.log('ckecked', todo)
        // className={todo.completed ? 'completed' : ''}
      }
      
      return {...todo}
    }))
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
