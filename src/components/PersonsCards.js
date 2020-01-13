import React from 'react';

const PersonsCards = props => {
    return (
        <div>
            <img src={props.personImage} alt={props.persoonName}></img>
            <h2>{props.personName}</h2>
            <p>{props.personSpecies}</p>
        </div>
    )
}

export default PersonsCards;