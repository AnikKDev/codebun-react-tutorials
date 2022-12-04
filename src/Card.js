import React from 'react';

const Card = (props) => {
    return (
        <div className={props.className}>
            {props.children ? props.children : undefined}
        </div>
    );
};

export default Card;