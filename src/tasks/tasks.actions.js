import * as tasksGateway from './tasksGateway';
import { taskListSelector } from './tasks.selector'



export const TASK_LIST_RESIVED = 'TASK_LIST_RESIVED';
export const taskListResived = (taskList) => {
    return {
        type: TASK_LIST_RESIVED,
        payload: {
            taskList,
        }
    }
}


export const getTaskList = () => {
    const thunkAction = (dispatch) => {
        tasksGateway.fetchTaskList()
            .then(taskList => dispatch(taskListResived(taskList)))
    }
    return thunkAction;
}


export const updateTaskList = (taskId) => {
    const thunkAction = (dispatch, getState) => {
        const state = getState();
        const tasksList = taskListSelector(state)
        const task = tasksList.find(task => task.id === taskId);
        const updatedTusk = {
            ...task,
            done: !task.done,
        };
        const newTasksList = tasksList
            .filter(task => task.id !== taskId)
            .concat(updatedTusk)

        tasksGateway.updateTask(taskId, updatedTusk)
        dispatch(taskListResived(newTasksList))
    }
    return thunkAction;
}

export const deleteTaskList = (taskId) => {
    const thunkAction = (dispatch, getState) => {
        const state = getState();
        const tasksList = taskListSelector(state)
        const newTasksList = tasksList
            .filter(task => task.id !== taskId)

        tasksGateway
            .deleteTask(taskId)

        dispatch(taskListResived(newTasksList))
    }
    return thunkAction;
}


export const createTask = (text) => {
    const thunkAction = (dispatch) => {
        const newTask = {
            text,
            done: false,
        }
        tasksGateway
            .createTask(newTask)
            .then(() => dispatch(getTaskList()))
    }
    return thunkAction;
}