import TodoForm from './companents/TodoForm';
import ToDo from './companents/Todo';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        task: userInput,
        complete: false,
      }
      setTodos([...todos, newItem])
    }
  }
  
  const removeTask = (id) => {
    setTodos([...todos.filter((todo => todo.id !== id))])
  }
  
  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) => todo.id === id ? {...todo, complete: !todo.complete } : {...todo})
    ])
  }
  return (
    <div className="App">
      <header>
        <h1>Ro'yxatdagi elementning o'rni: {todos.length}</h1>
      </header>

      <TodoForm addTask={addTask} />

      {todos.map((todo) => {
        return (
          <ToDo 
            todo = {todo}
            key = {todo.id}
            toggleTask = {handleToggle}
            removeTask = {removeTask}
          />
        )
      })}
    </div>
  );
}

export default App;
