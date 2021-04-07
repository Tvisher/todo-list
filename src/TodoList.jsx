import React from 'react';
import TasksList from './TasksList'


const TodoList = () => {
    return (
        <>
            <h1 className='todo-title'>Todo List</h1>
            <TasksList />
        </>
    )
}

export default TodoList;