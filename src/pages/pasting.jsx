import React from 'react';
import RedButton from "../components/UI/redButton/redButton";
import './pasting.css'
import Smallcarousel from "../components/smallcarousel/smallcarousel";

const Pasting = () => {
    return (
        <div className={'pasting'}>
            <div className="header-content2 container">
                <h1 className={'header-content__heading2'}>ОКЛЕЙКА АВТОМОБИЛЯ <br/> ЗАЩИТНЫМИ ПЛЕНКАМИ</h1>
                <img src={require('../img/rhombus.png')} alt=""/>
                <p className={'header-content__desc2'}>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Vitae orci urna amet penatibus.</p>
                <RedButton>ЦЕНЫ</RedButton>
            </div>
            <div className="container">
                <div className="pasting-company">
                    <div className="pasting-company-data">
                        <p className={'pasting-company__title'}>Полиуретановая пленка единственная надежная защита автомобиля
                            от всех внешних воздействий</p>
                        <img src={require('../img/rhombus.png')} alt=""/>
                        <p className="pasting-company-data__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant tincidunt aliquam tincidunt pretium sodales. Tristique odio pellentesque et tincidunt posuere arcu
                        </p>
                        <table className={'companies'}>
                            <tr>
                                <td><img src={require('../img/voys.png')} alt=""/></td>
                                <td><img src={require('../img/star.png')} alt=""/></td>
                            </tr>
                            <tr>
                                <td><img src={require('../img/star.png')} alt=""/></td>
                                <td><img src={require('../img/voys.png')} alt=""/></td>
                            </tr>
                        </table>
                    </div>
                    <div className={'pasting-company-images'}>
                        <Smallcarousel />
                    </div>
                </div>
                <div className="pasting-advatages">
                    <p className={'pasting-advatages__title'}>ПРЕИМУЩЕСТВА ЗАЩИТНОЙ <br/> АНТИГРАВИЙНОЙ ПЛЕНКИ</p>
                    <div className="center-rhombus">
                        <img src={require('../img/rhombus.png')} alt=""/>
                    </div>
                    <div className="pasting-advatages-items">
                        <div className="pasting-advatages-item">
                            <img src={require('../img/car-icon.png')} alt=""/>
                            <p className={'pasting-advatages-item__title'}>ЗАЩИТНЫЕ ПЛЕНКИ</p>
                            <p className={'pasting-advatages-item__desc'}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. <br/> Nascetur ultrices pellentesque <br/> vulputate sit. Ut feugiat.</p>
                            <RedButton>ПОДРОБНЕЕ</RedButton>
                        </div>
                        <div className="pasting-advatages-item">
                            <img src={require('../img/car-icon3.png')} alt=""/>
                            <p className={'pasting-advatages-item__title'}>ЦВЕТНЫЕ ПЛЕНКИ</p>
                            <p className={'pasting-advatages-item__desc'}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. <br/> Nascetur ultrices pellentesque <br/> vulputate sit. Ut feugiat.</p>
                            <RedButton>ПОДРОБНЕЕ</RedButton>
                        </div>
                        <div className="pasting-advatages-item">
                            <img src={require('../img/car-icon2.png')} alt=""/>
                            <p className={'pasting-advatages-item__title'}>ДИЗАЙН</p>
                            <p className={'pasting-advatages-item__desc'}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. <br/> Nascetur ultrices pellentesque <br/> vulputate sit. Ut feugiat.</p>
                            <RedButton>ПОДРОБНЕЕ</RedButton>
                        </div>
                        <div className="pasting-advatages-item">
                            <img src={require('../img/car-icon4.png')} alt=""/>
                            <p className={'pasting-advatages-item__title'}>ОКЛЕЙКА САЛОНА</p>
                            <p className={'pasting-advatages-item__desc'}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. <br/> Nascetur ultrices pellentesque <br/> vulputate sit. Ut feugiat.</p>
                            <RedButton>ПОДРОБНЕЕ</RedButton>
                        </div>
                    </div>
                </div>

            <div className="prices">
                <p className={'prices__title'}>СТОИМОСТЬ ПОЛНОЙ ОКРАСКИ <br/> АВТОМОБИЛЯ</p>
                <div className="center-rhombus">
                    <img src={require('../img/rhombus.png')} alt=""/>
                </div>
                <table className="prices-table">
                    <tr>
                        <td className={'column-title'}>АВТО / МАТЕРИАЛ</td>
                        <td className={'column-title'}>ПЛЕНКА SPECTROLL</td>
                        <td className={'column-title'}>ПЛЕНКА HEXIS</td>
                        <td className={'column-title'}>ПЛЕНКА SUNTEK</td>
                        <td className={'column-title'}>ПЛЕНКА LLUMAR</td>
                    </tr>
                    <tr>
                        <td className="row-title">1 КЛАСС <br/> (MINI COOPER, FIAT 500)</td>
                        <td className="price">53 000</td>
                        <td className="price">64 000</td>
                        <td className="price">69 000</td>
                        <td className="price">72 000</td>
                    </tr>
                    <tr>
                        <td className="row-title">2 КЛАСС <br/> (BMW 3, MERCEDES)</td>
                        <td className="price">53 000</td>
                        <td className="price">64 000</td>
                        <td className="price">69 000</td>
                        <td className="price">72 000</td>
                    </tr>
                    <tr>
                        <td className="row-title">4 КЛАСС <br/> (BMW 7, MERCEDES S)</td>
                        <td className="price">53 000</td>
                        <td className="price">64 000</td>
                        <td className="price">69 000</td>
                        <td className="price">72 000</td>
                    </tr>
                    <tr>
                        <td className="row-title">5 КЛАСС <br/> (BMW X3, X4, MERCEDES)</td>
                        <td className="price">53 000</td>
                        <td className="price">64 000</td>
                        <td className="price">69 000</td>
                        <td className="price">72 000</td>
                    </tr>
                </table>
            </div>
            </div>
            <div className="portfolio" id={'portfolio'}>
                <p className={'heading'}>НАШИ РАБОТЫ</p>
                <div className={'center-rhombus'}>
                    <img src={require('../img/rhombus.png')} alt=""/>
                </div>
                <div className="portfolio-photos">
                    <img src={require('../img/port-car1.png')} alt=""/>
                    <img src={require('../img/port-car2.png')} alt=""/>
                    <img src={require('../img/port-car3.png')} alt=""/>
                    <img src={require('../img/port-car4.png')} alt=""/>
                    <img src={require('../img/port-car5.png')} alt=""/>
                    <img src={require('../img/port-car6.png')} alt=""/>

                    <img src={require('../img/port-car4.png')} alt=""/>
                    <img src={require('../img/port-car5.png')} alt=""/>
                    <img src={require('../img/port-car6.png')} alt=""/>
                    <img src={require('../img/port-car1.png')} alt=""/>
                    <img src={require('../img/port-car2.png')} alt=""/>
                    <img src={require('../img/port-car3.png')} alt=""/>

                    <img src={require('../img/port-car1.png')} alt=""/>
                    <img src={require('../img/port-car2.png')} alt=""/>
                    <img src={require('../img/port-car3.png')} alt=""/>
                    <img src={require('../img/port-car4.png')} alt=""/>
                    <img src={require('../img/port-car5.png')} alt=""/>
                    <img src={require('../img/port-car6.png')} alt=""/>
                </div>
            </div>
            <div className="container">
                <div className="answer-form">
                    <p className={'answer-form__title'}>ОТВЕТИМ НА ЛЮБОЙ ВОПРОС</p>
                    <div className="center-rhombus">
                        <img src={require('../img/rhombus.png')} alt=""/>
                    </div>
                    <div className="form">
                        <div className="flex">
                            <input type="text" className={'name input'} placeholder={'ИМЯ'} />
                            <input type="text" className={'tel input'} placeholder={'ТЕЛЕФОН'} />
                        </div>
                        <div className="question-socials flex">
                            <textarea className="textarea" placeholder={'ВОПРОС ПО ДИЗАЙНУ, ТЮНИНГУ И ДР.'}></textarea>
                            <div className="socials">
                                <a href=""><div className="social">
                                    <img src={require('../img/telegram.png')} alt=""/>
                                </div></a>
                                <a href=""><div className="social">
                                    <img src={require('../img/youtube.png')} alt=""/>
                                </div></a>
                                <a href=""><div className="social">
                                    <img src={require('../img/vk.png')} alt=""/>
                                </div></a>
                            </div>
                        </div>
                        <div className="send-contacts flex">
                            <RedButton>ОТПРАВИТЬ</RedButton>
                            <div className="contacts-place">
                                <div className="place">
                                    <img className={'contacts__icon'} src={require('../img/point.png')} alt=""/>
                                    <p className={'contacts__text'}>Eu faucibus et rutrum fringilla orci nunc</p>
                                </div>
                                <div className="contacts">
                                    <img className={'contacts__icon'} src={require('../img/tel.png')} alt=""/>
                                    <p className={'contacts__text'}>8 (812) 123-45-67</p>
                                    <img className={'contacts__icon'} src={require('../img/mail.png')} alt=""/>
                                    <p className={'contacts__text'}>test@test.ru</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Pasting;