import React from 'react';

const PersonsSearch = props => {
    const handleChange = evt => {
        props.handleChange(evt.target.value)
    }
    return (
        <div>
            <form>
                <label>Buscar Personaje </label>
                <input type="text" onChange={handleChange} name="person" value={props.value} />
            </form>
        </div>
    )
}

export default PersonsSearch;