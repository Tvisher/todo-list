import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../TodoList';
import { fetchTaskList, deleteTask } from '../tasksGateway'

jest.mock('../tasksGateway.js', () => {
    return {
        createTask: jest.fn(),
        fetchTaskList: jest.fn(() => Promise.resolve([])),
        updateTask: jest.fn(),
        deleteTask: jest.fn(() => Promise.resolve())
    }
})

describe('<TodoList/>', () => {
    it('Should request tasks list', () => {
        shallow(<TodoList />);
        setTimeout(() => {
            expect(fetchTaskList).toBeCalled()
        })
    })

    it('Should handle task delete', () => {
        const wrappedComponent = shallow(<TodoList />);
        const deleteHandler = wrappedComponent.find('TasksList').prop('handleTaskDelete');
        deleteHandler('some-id');
        expect(deleteTask).toBeCalledWith('some-id')
    })
})