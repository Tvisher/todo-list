import React, { useState, useEffect } from 'react';
import CreateTask from './CreateTask';
import Task from './Task'
import { createTask, fetchTaskList, updateTask, deleteTask } from './tasksGateway'


const TasksList = (props) => {
    const [taskList, setList] = useState([]);

    useEffect(() => {
        fetchTaskList().then(tasks => setList([...tasks]));
    }, [])

    const fetchTask = () => {
        fetchTaskList()
            .then(taskList => setList([...taskList]))
    }

    const addNewTask = (text) => {
        const newTask = {
            text,
            done: false,
        }
        createTask(newTask)
            .then(() => fetchTask())
    }


    const handleTaskStatusChange = (id) => {
        const { done, text } = taskList.find(task => task.id === id);
        const updatedTusk = {
            text,
            done: !done
        };
        updateTask(id, updatedTusk).then(() => fetchTask())
    }


    const handleTaskDelete = (id) => {
        deleteTask(id).then(() => fetchTask())
    }

    const reverseTaskList = taskList
        .slice()
        .reverse()
        .sort((a, b) => a.done - b.done);

    return (
        <div className='todo-list'>
            <CreateTask addNewTask={addNewTask} />
            <ul className='list'>
                {reverseTaskList.map(task =>
                    <Task key={task.id}
                        task={task}
                        onChange={handleTaskStatusChange}
                        onDelete={handleTaskDelete}
                    />
                )}
            </ul>
        </div>
    )
}

export default TasksList;