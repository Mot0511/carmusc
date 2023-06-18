import React from 'react';
import Menu from "../menu/menu";
import './mobileMenu.css'

const MobileMenu = ({closeMenu}) => {

    return (
        <div className={'mobile-menu'}>
            <Menu />
            <button onClick={closeMenu}><img className={'closeMenu'} src={require('../../img/close.png')} alt=""/></button>
        </div>
    );
};

export default MobileMenu;