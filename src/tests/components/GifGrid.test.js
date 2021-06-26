import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el <GifGrid />', () => {

    const category = 'One Punch';

    test('debe mostrarse correctamente', () => {


        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow( <GifGrid category={ category } />  )

        expect(wrapper).toMatchSnapshot();
        
    })
    

    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquiercosa.jpg',
            title:'Cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });


        const wrapper = shallow( <GifGrid category={ category } />  )

        expect(wrapper).toMatchSnapshot();
        
    })
    


})