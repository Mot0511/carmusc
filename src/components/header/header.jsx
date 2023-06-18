import React, {useState} from 'react';
import './style.css'
import RedButton from "../UI/redButton/redButton";
import Menu from "../menu/menu";
import MobileMenu from "../mobileMenu/mobileMenu";

const Header = () => {
    const [isMenu, setIsMenu] = useState(false)
    const showMenu = () => {
        isMenu ? setIsMenu(false) : setIsMenu(true)
    }
    return (
        <div className={'header'}>
            <div className={'header-line'}>
                {
                    window.innerWidth <= 1300
                        ? <button onClick={showMenu}><img className={'gamburger'} src={require('../../img/logo.png')} alt=""/></button>
                        : <Menu />
                }
                {
                    isMenu
                         ? <MobileMenu closeMenu={showMenu} />
                         : <></>
                }

            </div>
        </div>
    );
};

export default Header;