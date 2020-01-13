import React from 'react';
import PersonsCards from './PersonsCards';
import { Link } from 'react-router-dom';

const PersonsList = props => {
    console.log(props)
    return (
        <div>
            <ul>
                {props.allPersons
                    .filter(person => person.name.toLowerCase().includes(props.value.toLowerCase()))
                    .map(person => <li key={person.id}>
                        <Link
                            to={`/person/${person.id}`}>
                            <PersonsCards
                                personImage={person.image}
                                personName={person.name}
                                personSpecies={person.species}
                                personId={person.id}
                            />
                        </Link>
                    </li>
                    )}
            </ul>
        </div >
    )
}

export default PersonsList;