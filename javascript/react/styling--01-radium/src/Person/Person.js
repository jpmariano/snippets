import React from 'react';
import Radium from 'radium'; //1. Import radium

import './Person.css';

const person = ( props ) => {
    const style = {
        '@media (min-width: 500px)': { //2. This works because of radium
            width: '450px'
        }
    };
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default Radium(person);