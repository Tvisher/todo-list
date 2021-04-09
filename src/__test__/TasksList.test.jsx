import React from 'react';
import { shallow } from 'enzyme';
import TasksList from '../TasksList';

describe('<TasksList/>', () => {
    it('Should display sorted by done tasks list', () => {
        const props = {
            taskList: [
                { id: 1, text: 'text 1', done: true },
                { id: 2, text: 'text 2', done: false },
                { id: 3, text: 'text 3', done: false },
                { id: 4, text: 'text 4', done: true },
                { id: 5, text: 'text 5', done: false },
                { id: 6, text: 'text 6', done: false },
            ],
            handleTaskStatusChange: jest.fn(),
            handleTaskDelete: jest.fn(),
        }
        const wrappedComponent = shallow(<TasksList {...props} />)
        expect(wrappedComponent).toMatchSnapshot()
    })
})