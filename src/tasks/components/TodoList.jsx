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
        <div className='todo-wrapper'>
            <div className='todo-title__head'>
                <h1 className='todo-title'>ToDo List</h1>
            </div>
            <div className='todo__body'>
                <CreateTask addNewTask={createTask} />
                <TasksList
                    taskList={tasks}
                    handleTaskStatusChange={updateTaskList}
                    handleTaskDelete={deleteTaskList} />
            </div>
        </div>
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