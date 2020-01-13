import React from 'react';
import PersonsCards from './PersonsCards';

const PersonsList = props => {
    return (
        <div>
            <ul>
                {props.allPersons
                    .filter(person => props.value === '' || person.name.toLowerCase().includes(props.value))
                    .map(person => <li key={person.id}>
                        <PersonsCards
                            personImage={person.image}
                            personName={person.name}
                            personId={person.id}
                        />
                    </li>
                    )}
            </ul>
        </div >
    )
}

export default PersonsList;