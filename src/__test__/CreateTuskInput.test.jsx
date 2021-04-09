import React from 'react';
import { shallow } from 'enzyme';
import CreateTask from '../CreateTask';

describe('<CreateTask/>', () => {

    it('Should create task on submit', () => {
        const MokaAddNewTask = jest.fn()
        const wrappedComponent = shallow(<CreateTask addNewTask={MokaAddNewTask} />);
        wrappedComponent
            .find('.create-task__input')
            .simulate('change', {
                target: {
                    value: 'Learning react'
                }
            })
        wrappedComponent.find('.create-task').simulate('submit', {
            preventDefault: () => {
            }
        });
        expect(MokaAddNewTask).toBeCalledWith('Learning react')


    })


    it('Should clear input after submit', () => {
        const MokaAddNewTask = jest.fn()
        const wrappedComponent = shallow(<CreateTask addNewTask={MokaAddNewTask} />);
        wrappedComponent
            .find('.create-task__input')
            .simulate('change', {
                target: {
                    value: 'Learning react'
                }
            })
        wrappedComponent.find('.create-task').simulate('submit', {
            preventDefault: () => {
            }
        });
        expect(wrappedComponent.find('.create-task__input').prop('value')).toEqual('')
    })
})