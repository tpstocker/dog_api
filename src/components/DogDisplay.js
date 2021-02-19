import React from 'react';

const DogsDisplay = ({selectedBreed}) => {
    return(
        <>
            <div id="dogs-display">
                <h1>{selectedBreed}</h1>
            </div>
        </>
    )
}

export default DogsDisplay;