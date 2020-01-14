import React from 'react';
import Loader from './Loader';
import { Link } from 'react-router-dom';

const PersonsDetail = props => {
    if (props.person === undefined) {
        return <Loader />
    } else {
        return (
            <div>
                <Link className="go_back" to="/">
                    {"< Go back"}
                </Link>
                <img src={props.person.image} alt={props.person.name} />
                <h2>Name: {props.person.name}</h2>
                <ul>
                    <li>Species: {props.person.species === 'Alien' ? <i class="fab fa-reddit-alien"></i> : <i class="fas fa-user"></i>}</li>
                    <li>Origin Planet: {props.person.origin.name}</li>
                    <li>Episodes: {props.person.episode.length}</li>
                    <li>Status: {props.person.status === 'Alive' ? <i class="fas fa-heartbeat"></i> : <i class="fas fa-skull-crossbones"></i>}</li>
                </ul>

            </div>
        )
    }
}

export default PersonsDetail;