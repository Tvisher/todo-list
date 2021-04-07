const tasksUrlData = 'https://crudcrud.com/api/e0cdb7b71f36498c942a21b9fdbed5b1/tasks'

export const createTask = (taskData) => {
    return fetch(tasksUrlData, {
        method: "POST",
        headers: {
            'Content-Type': "application/json,utf-8"
        },
        body: JSON.stringify(taskData)
    }).then(res => {
        if (!res.ok) {
            throw new Error('Failed to create task')
        }
    })
}


export const fetchTaskList = () => {
    return fetch(tasksUrlData)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Failed to fetch task list')
            }
        }).then(taskList => {
            const tasks = taskList.map(({ _id, ...task }) => ({
                id: _id,
                ...task
            }))
            return tasks
        })
}


export const updateTask = (taskId, taskData) => {
    return fetch(`${tasksUrlData}/${taskId}`, {
        method: "PUT",
        headers: {
            'Content-Type': "application/json,utf-8"
        },
        body: JSON.stringify(taskData)
    }).then(res => {
        if (!res.ok) {
            throw new Error('Failed to updated task')
        }
    })
}

export const deleteTask = (taskId) => {
    return fetch(`${tasksUrlData}/${taskId}`, {
        method: "DELETE",
    }).then(res => {
        if (!res.ok) {
            throw new Error('Failed to delete task')
        }
    })
}
