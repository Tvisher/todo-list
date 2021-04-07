import React, { useState, useEffect } from 'react';
import CreateTask from './CreateTask';
import Task from './Task'

// const tasksUrl = 'https://606d506b603ded0017503600.mockapi.io/tasks/tasks';
const tasksUrl = 'https://crudcrud.com/api/e0cdb7b71f36498c942a21b9fdbed5b1/tasks'

const TasksList = (props) => {
    const [taskList, setList] = useState([]);

    useEffect(() => {
        fetchTaskList();
    }, [])

    const fetchTaskList = () => {
        fetch(tasksUrl)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            }).then(taskList => {
                const tasks = taskList.map(({ _id, ...task }) => ({
                    id: _id,
                    ...task
                }))
                setList([...tasks]);
            })
    }

    const addNewTask = (text) => {
        const newTask = {
            text,
            done: false,
            // id: Math.random()
        }

        fetch(tasksUrl, {
            method: "POST",
            headers: {
                'Content-Type': "application/json,utf-8"
            },
            body: JSON.stringify(newTask)
        }).then(res => {
            if (res.ok) {
                fetchTaskList()
            } else {
                throw new Error('Failed to create task')
            }

        })
    }


    const handleTaskStatusChange = (id) => {
        let { done, text } = taskList.find(task => task.id === id);
        const updatedTusk = {
            text,
            done: !done
        };
        fetch(`${tasksUrl}/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': "application/json,utf-8"
            },
            body: JSON.stringify(updatedTusk)
        }).then(res => {
            if (res.ok) {
                fetchTaskList();
            } else {
                throw new Error('Failed to updated task')
            }
            console.log(JSON.stringify(updatedTusk));
        })
    }


    const handleTaskDelete = (id) => {
        fetch(`${tasksUrl}/${id}`, {
            method: "DELETE",
        }).then(res => {
            if (res.ok) {
                fetchTaskList();
            } else {
                throw new Error('Failed to delete task')
            }
        })
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