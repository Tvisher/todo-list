import React, { useState, useEffect } from 'react';
import TasksList from './TasksList'
import CreateTask from './CreateTask';
import { createTask, fetchTaskList, updateTask, deleteTask } from './tasksGateway'

const TodoList = () => {
    const [taskList, setList] = useState([]);

    useEffect(() => {
        fetchTasks()
    }, [])

    const fetchTasks = () => {
        fetchTaskList()
            .then(taskList => setList([...taskList]))
    }

    const addNewTask = (text) => {
        const newTask = {
            text,
            done: false,
        }
        createTask(newTask)
            .then(() => fetchTasks())
    }


    const handleTaskStatusChange = (id) => {
        const { done, text } = taskList.find(task => task.id === id);
        const updatedTusk = {
            text,
            done: !done
        };
        updateTask(id, updatedTusk).then(() => fetchTasks())
    }


    const handleTaskDelete = (id) => {
        deleteTask(id).then(() => fetchTasks())
    }

    return (
        <>
            <h1 className='todo-title'>Todo List</h1>
            <CreateTask addNewTask={addNewTask} />
            <TasksList
                taskList={taskList}
                addNewTask={addNewTask}
                handleTaskStatusChange={handleTaskStatusChange}
                handleTaskDelete={handleTaskDelete} />
        </>
    )
}

export default TodoList;