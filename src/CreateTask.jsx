import React, { useState } from 'react';

const CreateTask = ({ addNewTask }) => {

    const [inputValue, setInputValue] = useState(' ');

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const readDataFromInput = (e) => {
        e.preventDefault();
        let inputText = inputValue.trim();
        if (inputText === "") {
            return
        } else {
            addNewTask(inputValue);
            setInputValue('');
        }

    }
    return (
        <form className='create-task' onSubmit={readDataFromInput}>
            <input type="text"
                className='create-task__input'
                value={inputValue} onChange={handleChange} />
            <button type='submit' className='create-task__btn'>Create</button>
        </form>
    )
}

export default CreateTask;