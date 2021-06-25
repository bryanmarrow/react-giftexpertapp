import React from 'react';
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory";

import '@testing-library/jest-dom';




describe('Pruebas en <AddCategory />', () => {
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } />);

    })

    test('debe mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        
    })

    test('debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', {
            target: { 
                value 
            }
        });

        expect(wrapper.find('p').text().trim()).toBe(value);
        
    })

    test('NO debe de postear la información on submit', () => {
        wrapper.find('form').simulate('submit', {
            prevenDefault(){}
        })

        expect( setCategories ).not.toHaveBeenCalled();
    })
    

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {

        const value = 'Hola Mundo';
        wrapper.find('input').simulate('change', { target: { 
            value
        }});

        wrapper.find('form').simulate('submit', { prevenDefault(){}});

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenLastCalledWith(expect.any(Function));

        expect(wrapper.find('input').prop('value')).toBe('');
        
    })
    
    
    
})