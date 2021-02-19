import React from 'react';

const DogsList = ({dogs, onSelectedBreed}) => {

if(!dogs){
    return <h1>Loading...</h1>
}

const dogElements = [];


for(let breed in dogs.message){
    let element = <li onClick ={() => {onSelectedBreed(breed)}} key={breed}>{breed}</li>;
    dogElements.push(element);
}



    return(
        <div id="dogs-list">
        <ul>{dogElements}</ul>
        </div>
    )
}

export default DogsList;