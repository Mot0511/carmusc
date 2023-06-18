import React from 'react';
import './arrow.css'

const Arrow = (props) => {
    return (
        <button {...props}><div className={'arrow'}>
            <div className={'arrow__vector'}>
                {
                    props.vector
                        ? '‹'
                        : '›'
                }
            </div>
        </div></button>
    );
};

export default Arrow;