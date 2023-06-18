import React from 'react';
import './footer.css'
import Menu from "../menu/menu";

const Footer = () => {
    return (
        <div className={'footer'}>
            <div className={'container'}>
                <div className={'footer-content'}>
                    <Menu footer={true} style={{position: 'absolute', right: '0px'}} />
                    <p className={'credits'}>2023 © Est et viverra pellentesque pharetra lorem proin in. Vitae magna at tempus commodo.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;