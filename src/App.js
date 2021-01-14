import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import {ReactComponent as Hero} from "./hero.svg"

function App() {
  return (
    <div>

<Hero className="hero" />  
          
      <div className='todo-app'>
      
      <TodoList />
    </div>
    </div>
  );
}

export default App;