import React, { useState } from "react";
import Todo from "../components/Todo";

const Form = () => {
  const [todo, setTodo] = useState({});
  const [qty, setQty] = useState({});
  const [todos, setTodos] = useState([
    { todo: "tomate", qty: 1 },
    { todo: "lechuga", qty: 2 },
    { todo: "zanahoria", qty: 3 },
  ])

  const handleChange = e => setTodo({[e.target.name]: e.target.value})

  const handleClick = e => {
    if (Object.keys(todo).length === 0 || todo.todo.trim() === '') {
              alert('el campo no puede estar vacio')
        return
      }
    
      setTodos([...todos, todo]);
    }
    

    const deleteTodo = indice => {
      const newTodos = [...todos]
      newTodos.splice(indice, 1)
      setTodos(newTodos)
    }
  
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>compra</label>
        <input type="text" name="todo" onChange={handleChange} />
        <label>cantidad</label>
        <input type="number" name="qty" onChange={handleChange} />
        <br/>
        <button onClick={handleClick}>agregar</button>
        <br/>
        <hr/>
      {todos.map((value, index) => (
        <Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo} qty={value.qty}/>
      ))}
      <hr/>
      </form>
      
    </>
  );
};
export default Form;
