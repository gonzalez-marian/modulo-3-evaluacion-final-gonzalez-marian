import React from 'react';
import PropTypes from 'prop-types';

const PersonsSearch = props => {
    const handleChange = evt => {
        props.handleChange(evt.target.value)
    }
    return (
        <div>
            <form className="form__search">
                <label className="form__search--label">Buscar Personaje: </label>
                <input type="text" onChange={handleChange} name="person" value={props.value} placeholder="Ej: Summer Smith" className="form__search--input" />
            </form>
        </div>
    )
}

PersonsSearch.propTypes = {
    person: PropTypes.string
};
export default PersonsSearch;