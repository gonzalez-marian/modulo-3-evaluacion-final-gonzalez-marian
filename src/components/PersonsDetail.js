import React from 'react';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PersonsDetail = props => {
    if (props.person === undefined) {
        return <Loader />
    } else {
        return (
            <div>
                <Link className="go__back" to="/">
                    {"< Go back"}
                </Link>
                <div className="detail">
                    <img className="detail__img" src={props.person.image} alt={props.person.name} />
                    <ul className="detail__items">
                        <h2>Name: {props.person.name}</h2>
                        <li>Species: {props.person.species === 'Alien' ? <i class="fab fa-reddit-alien"></i> : <i class="fas fa-user"></i>}</li>
                        <li>Origin Planet: {props.person.origin.name}</li>
                        <li>Episodes: {props.person.episode.length}</li>
                        <li>Status: {props.person.status === 'Alive' ? <i class="fas fa-heartbeat"></i> : <i class="fas fa-skull-crossbones"></i>}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

PersonsDetail.propTypes = {
    person: PropTypes.object
};

export default PersonsDetail;