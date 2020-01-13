import React from 'react';
import Loader from './Loader';

const PersonsDetail = props => {
    console.log(props)
    if (props.person === undefined) {
        return <Loader />
    } else {
        return (
            <div>
                <button>Go Back</button>
                <img src={props.person.image} alt={props.person.name} />
                <h1>Name: {props.person.name}</h1>
                <p>Species: {props.person.species}</p>
                <p>Origin Planet: {props.person.origin.name}</p>
                <p>Episodes: {props.person.episode.length}</p>
                <p>Status: {props.person.status}</p>
            </div>
        )
    }
}

export default PersonsDetail;