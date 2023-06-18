import React from 'react';
import './menu.css'

const Menu = (props) => {
    console.log(props);
    return (
        <div className={'menu'} {...props}>
            {
                !props.footer
                    ? <>
                        <a href="/" className={'header-line__item'}>Главная</a>
                        <a href="/pasting" className={'header-line__item'}>Оклейка автомобилей</a>
                        <a href="/#services" className={'header-line__item'}>Детейлинг автомобилей</a>
                        <a href="/#portfolio" className={'header-line__item'}>Галерея работ</a>

                    </>
                    : <></>
            }
        </div>
    );
};

export default Menu;