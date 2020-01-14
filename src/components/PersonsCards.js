import React from 'react';

const PersonsCards = props => {
    return (
        <div >
            <img className="card__img" src={props.personImage} alt={props.personName}></img>
            <div>
                <h2 className="card__name">{props.personName}</h2>
                <p className="card__description">{props.personSpecies}</p>
            </div>
        </div>
    )
}

export default PersonsCards;