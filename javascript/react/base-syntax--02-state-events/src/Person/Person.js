    import React from 'react';

    const person = ( props ) => {
        return (
            <div>
                {/*3B. execute the click method and props.name update the change */}
                <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
                <p>{props.children}</p>
                {/*3C. onChange execute the parents changed method*/}
                <input type="text" onChange={props.changed} value={props.name} />
            </div>
        )
    };

    export default person;