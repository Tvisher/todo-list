import React, { useEffect } from 'react';
import TasksList from './TasksList'
import CreateTask from './CreateTask';
import { connect } from 'react-redux'
import * as taskActions from '../tasks.actions'
import { sortedTaskListSelector } from '../tasks.selector'


const TodoList = ({ getTaskList, tasks, updateTaskList, deleteTaskList, createTask }) => {

    useEffect(() => {
        getTaskList()
    }, [getTaskList])


    return (
        <>
            <h1 className='todo-title'>Todo List</h1>
            <CreateTask addNewTask={createTask} />
            <TasksList
                taskList={tasks}
                handleTaskStatusChange={updateTaskList}
                handleTaskDelete={deleteTaskList} />
        </>
    )
}

const mapDispatch = {
    getTaskList: taskActions.getTaskList,
    updateTaskList: taskActions.updateTaskList,
    deleteTaskList: taskActions.deleteTaskList,
    createTask: taskActions.createTask
}

const mapState = state => {
    return {
        tasks: sortedTaskListSelector(state)
    }
}

export default connect(mapState, mapDispatch)(TodoList);