import React from 'react';

import Task from './Task'



const TasksList = ({ taskList, handleTaskStatusChange, handleTaskDelete }) => {

    const reverseTaskList = taskList
        .slice()
        .reverse()
        .sort((a, b) => a.done - b.done);

    return (
        <div className='todo-list'>
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