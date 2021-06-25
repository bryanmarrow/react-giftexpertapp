import { getGifs } from '../../helpers/getGifs';


describe('Pruebas en getGifs fetch', () =>{

    test('debe de traer 10 elementos', async () => {

        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);

        
    })
    

})