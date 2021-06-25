import React from 'react'
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );

    test('debe mostrar correctamente', () => {
        const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );
        expect(wrapper).toMatchSnapshot();
        
    })
    
    test('debe de tener un párrafo con el title', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    })
    

    test('debe tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');
        console.log(img.props());

        expect( img.prop('src')).toBe(url);
        expect( img.prop('alt')).toBe(title);
        
    })

    test('debe tener animate__fadeIn', () => {

        const div = wrapper.find('div');
        const className = div.props('className');
        // console.log(div.props('className'))
        expect( className.includes('animate__fadeIn') ).toBe(true)
        
    })
    
    

})