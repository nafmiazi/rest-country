import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, flag, capital, population, region} = props.country;
    return (
        <div className="country bg-secondary">
            <h2>This is {name}</h2>
            <img src={flag} alt="" />
            <p><small>Region: {region}</small></p>
            <p>Capital: {capital}, Population: {population}</p>
        </div>
    );
};

export default Country;