import React from 'react';
import { shallow } from 'enzyme';
import Task from '../Task';

describe('<Task/>', () => {
    it('Shoud display done task', () => {
        const props = {
            task: {
                id: 1,
                done: true,
                text: 'Test text'
            },
            onChange: jest.fn(),
            onDelete: jest.fn()
        }
        const wparredComponent = shallow(<Task {...props} />);
        expect(wparredComponent).toMatchSnapshot();
    })

    it('Shoud display undone task', () => {
        const props = {
            task: {
                id: 1,
                done: false,
                text: 'Test text'
            },
            onChange: jest.fn(),
            onDelete: jest.fn()
        }
        const wparredComponent = shallow(<Task {...props} />);
        expect(wparredComponent).toMatchSnapshot();
    })

    it('Shoud update task on checkbox checked', () => {
        const props = {
            task: {
                id: 1,
                done: false,
                text: 'Test text'
            },
            onChange: jest.fn(),
            onDelete: jest.fn()
        }
        const wparredComponent = shallow(<Task {...props} />);
        wparredComponent.find('.list-item__checkbox').simulate('change')
        expect(props.onChange).toBeCalledWith(1);
    })

    it('Shoud delete task', () => {
        const props = {
            task: {
                id: 1,
                done: false,
                text: 'Test text'
            },
            onChange: jest.fn(),
            onDelete: jest.fn()
        }
        const wparredComponent = shallow(<Task {...props} />);
        wparredComponent.find('.list-item__delete').simulate('click')
        expect(props.onDelete).toBeCalledWith(1);
    })

})