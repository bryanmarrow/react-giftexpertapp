import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ( { id, title, url} ) => {

    console.log(id, title, url);

    return (
        <div className="card animate__fadeIn">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}

GifGridItem.PropTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired 
}
