import React from 'react';
import PersonsCards from './PersonsCards';

const PersonsList = props => {
    return (
        <div>
            <ul>
                {props.allPersons
                    .map(person => <li key={person.id}>
                        <PersonsCards
                            personImage={person.image}
                            personName={person.name}
                            personSpecies={person.species}
                        />
                    </li>)}
            </ul>
        </div>
    )
}

export default PersonsList;