import React, {useState, useEffect} from 'react';
import DogsList from '../components/DogsList';
import DogDisplay from '../components/DogDisplay';

const DogsContainer = () => {

    const [dogs, setDogs] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState(0);

    const getDogs = () => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(res => res.json())
            .then(data => setDogs(data))
    }

    const handleSelectedBreed = (breed) => {
        console.log("dog selected is", breed);
        setSelectedBreed(breed);
    }

    useEffect(() => {
        getDogs();
    },[]);



    return(
        <div>
        <h1>dog container</h1>
        <DogsList dogs={dogs} onSelectedBreed={handleSelectedBreed}></DogsList>
        <DogDisplay selectedBreed={selectedBreed}></DogDisplay>
        </div>
    )

}

export default DogsContainer;
