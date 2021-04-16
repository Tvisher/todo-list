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

        tasksGateway
            .updateTask(taskId, updatedTusk)
            .then(() => dispatch(getTaskList()))
    }
    return thunkAction;
}

export const deleteTaskList = (taskId) => {
    const thunkAction = (dispatch) => {
        tasksGateway
            .deleteTask(taskId)
            .then(() => dispatch(getTaskList()))
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
