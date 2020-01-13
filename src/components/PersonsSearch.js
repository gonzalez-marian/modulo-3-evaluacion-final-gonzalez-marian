import React from 'react';

const PersonsSearch = props => {
    const handleChange = evt => {
        props.handleChange(evt.target.value)
    }
    return (
        <div>
            <h1>Rick and Morty</h1>
            <form>
                <label>Buscar Personaje </label>
                <input type="text" onChange={handleChange} name="person" value={props.value} />
            </form>
        </div>
    )
}

export default PersonsSearch;