import React from 'react';
import Task from './Task'



const TasksList = ({ taskList, handleTaskStatusChange, handleTaskDelete }) => {

    return (
        <div className='todo-list'>
            <ul className='list'>
                {taskList.map(task =>
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