import React from 'react';
import RedButton from "../UI/redButton/redButton";

const Category2 = () => {
    return (
        <div className={'container'}>
            <div className="services-items">
                <div className="services-item">
                    <img src={require('../../img/car-icon2.png')} alt=""/>
                    <p className={'services-item__title'}>ОКЛЕЙКА САЛОНА</p>
                    <p className={'services-item__desc'}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. <br/> Nascetur ultrices pellentesque <br/> vulputate sit. Ut feugiat.</p>
                    <RedButton>ПОДРОБНЕЕ</RedButton>
                </div>
                <div className="services-item">
                    <img src={require('../../img/car-icon4.png')} alt=""/>
                    <p className={'services-item__title'}>ДИЗАЙН</p>
                    <p className={'services-item__desc'}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. <br/> Nascetur ultrices pellentesque <br/> vulputate sit. Ut feugiat.</p>
                    <RedButton>ПОДРОБНЕЕ</RedButton>
                </div>
                <div className="services-item">
                    <img src={require('../../img/car-icon.png')} alt=""/>
                    <p className={'services-item__title'}>ЦВЕТНЫЕ ПЛЕНКИ</p>
                    <p className={'services-item__desc'}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. <br/> Nascetur ultrices pellentesque <br/> vulputate sit. Ut feugiat.</p>
                    <RedButton>ПОДРОБНЕЕ</RedButton>
                </div>
                <div className="services-item">
                    <img src={require('../../img/car-icon3.png')} alt=""/>
                    <p className={'services-item__title'}>ЗАЩИТНЫЕ ПЛЕНКИ</p>
                    <p className={'services-item__desc'}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. <br/> Nascetur ultrices pellentesque <br/> vulputate sit. Ut feugiat.</p>
                    <RedButton>ПОДРОБНЕЕ</RedButton>
                </div>
            </div>

        </div>
    );
};

export default Category2;