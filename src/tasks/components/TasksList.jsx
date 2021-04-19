import React from 'react';
import Task from './Task'



const TasksList = ({ taskList, handleTaskStatusChange, handleTaskDelete }) => {

    const taskListResolved = taskList
        .filter(task => task.done === true);

    const taskListUnesolved = taskList
        .filter(task => task.done === false);

    return (
        <div className='todo-list'>
            {taskListUnesolved.length > 0 &&
                <ul className='unresolved-list'>
                    <h3 className='unresolved-tasks__title'>Нерешенные задачи</h3>
                    {taskListUnesolved.map(task =>
                        <Task key={task.id}
                            task={task}
                            onChange={handleTaskStatusChange}
                            onDelete={handleTaskDelete}
                        />)}
                </ul>
            }

            {taskListResolved.length > 0 &&
                <ul className='resolved-list'>
                    <h3 className='resolved-tasks__title'>Выполненно</h3>
                    {taskListResolved.map(task =>
                        <Task key={task.id}
                            task={task}
                            onChange={handleTaskStatusChange}
                            onDelete={handleTaskDelete}
                        />)}
                </ul>
            }
        </div>
    )
}

export default TasksList;