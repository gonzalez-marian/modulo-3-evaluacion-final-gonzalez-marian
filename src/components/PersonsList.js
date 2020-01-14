import React from 'react';
import PersonsCards from './PersonsCards';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PersonsList = props => {
    return (
        <div>
            <ul className="list">
                {props.allPersons
                    .filter(person => person.name.toLowerCase().includes(props.value.toLowerCase()))
                    .map(person => <li className="list__li" key={person.id}>
                        <Link className="person"
                            to={`/person/${person.id}`}>
                            <PersonsCards
                                personImage={person.image}
                                personName={person.name}
                                personSpecies={person.species}
                                personId={person.id}
                            />
                        </Link>
                    </li>
                    )
                }
            </ul>
        </div >
    )
}

PersonsList.propTypes = {
    person: PropTypes.array
};

export default PersonsList;