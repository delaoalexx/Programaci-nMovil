import React, { useState } from 'react';
import './ToDoList.css'; 



const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTask = () => {
        if (inputValue.trim() === '') {
            alert("¡Llene el campo, no sea idiota!");
            return;
        }

        const newTask = {
            id: Date.now(),
            text: inputValue,
            completed: false
        };

        setTasks([...tasks, newTask]);
        setInputValue('');
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="todo-container">
            <h1>ToDoList</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Nueva tarea"
            />
            <button onClick={addTask}>Agregar</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id} className={task.completed ? 'completed' : ''}>
                        {task.text}
                        <button onClick={() => toggleComplete(task.id)}>✓</button>
                        <button onClick={() => deleteTask(task.id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;