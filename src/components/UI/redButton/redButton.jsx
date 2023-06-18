import React from 'react';
import './style.css'

const RedButton = (props) => {
    return (
        <a href="/src/pages" className={'btn'} {...props}>{props.children}</a>
    );
};

export default RedButton;