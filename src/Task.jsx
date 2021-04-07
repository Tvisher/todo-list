import React from 'react';
import classNames from 'classnames';


const Task = ({ task, onChange, onDelete }) => {
    const listItemClasses = classNames('list-item', { "list-item_done": task.done });

    return (
        <li className={listItemClasses}>
            <input type="checkbox"
                className='list-item__checkbox'
                defaultChecked={task.done}
                onChange={() => onChange(task.id)} />
            <p className='list-item__text'>{task.text}</p>
            <button onClick={() => onDelete(task.id)} className='list-item__delete'>+</button>
        </li>)
}

export default Task;