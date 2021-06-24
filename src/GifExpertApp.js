import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // categories.push('One Peace');
    //     // console.log(categories)

    //     // setCategories(['One Peace', ...categories]);
    //     setCategories( cats => [...cats, 'One Peace']);
    //     console.log(categories)
    // }



    return (
        <div>
            <h2>GifExperApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            {/* <button onClick={ handleAdd }>Agregar</button> */}

            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category} />
                    ))
                }
            </ol>
        </div>
    )
}