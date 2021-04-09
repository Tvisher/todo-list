import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('<App/>', () => {
    it('Should display Todo list', () => {
        const wrappedComponent = shallow(<App />);
        expect(wrappedComponent.find('TodoList').exists()).toBeTruthy();
    })
})