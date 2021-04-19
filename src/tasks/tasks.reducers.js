import {
    TASK_LIST_RESIVED,
} from './tasks.actions'


const initialState = {
    tasksList: []
};

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case TASK_LIST_RESIVED:
            return {
                ...state,
                tasksList: action.payload.taskList
            }

        default:
            return state
    }
}

