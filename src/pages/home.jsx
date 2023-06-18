import React, {useEffect} from 'react';
import RedButton from "../components/UI/redButton/redButton";
import './home.css';
import $ from 'jquery'
import Arrow from "../components/UI/arrow/arrow";
import Carousel from "../components/carousel/carousel";
import Smallcarousel from "../components/smallcarousel/smallcarousel";
import Services from "../components/services/services";
import {useState} from "react";

const Home = () => {
    const [cat1, setCat1] = useState('#DB3138')
    const [cat2, setCat2] = useState('')
    const [cat, setCat] = useState(true)
    return (
        <div className={'home'}>
            <div className="header-content container">
                <h1 className={'header-content__heading'}>CAR MUSC</h1>
                <img src={require('../img/rhombus.png')} alt=""/>
                <p className={'header-content__desc'}>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Vitae orci urna amet penatibus.</p>
                <RedButton>НАШИ УСЛУГИ</RedButton>
            </div>
            <div className="data">
                <div className={'data-item'}>
                    <p className={'data-item__title'}>АДРЕС:</p>
                    <p className={'data-item__content'}>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit </p>
                </div>
                <div className={'data-item'}>
                    <p className={'data-item__title'}>ТЕЛЕФОН:</p>
                    <p className={'data-item__content'}>8 (812) 123-45-67</p>
                    <p className={'data-item__content'}>8-911-123-45-67</p>
                </div>
                <div className={'data-item'}>
                    <p className={'data-item__title'}>РЕЖИМ РАБОТЫ:</p>
                    <p className={'data-item__content'}>ПН-ПТ : 10:00 - 20:00</p>
                    <p className={'data-item__content'}>СБ-ВСК : 12:00 - 20:00</p>
                </div>
            </div>
            <div className={'container'}>
                <div className="progress">
                    <div className={'progress-info'}>
                        <p className={'progerss-info__title'}>НАШИ ДОСТИЖЕНИЯ ОТ КУБКА РОСИИ <br/> ДО ЧЕМПИОНАТОВ МИРА</p>
                        <img src={require('../img/rhombus.png')} alt=""/>
                        <p className={'progerss-info__desc'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant tincidunt aliquam <br/> tincidunt pretium sodales. Tristique odio pellentesque et tincidunt posuere arcu purus <br/> lobortis risus. Urna, ut amet odio orci magnis praesent ultrices. Praesent malesuada <br/> lacus tellus tristique sit at. Sed viverra nulla nam arcu, non iaculis pretium, volutpat.</p>
                    </div>
                    <div className={'progress-items'}>
                        <div className="progress-items__col1">
                            <div className="progress-items__col__item">
                                <p className={'progress-items__col__item__number'}>#1</p>
                                <p className={'progress-items__col__item__desc'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </p>
                            </div>
                            <div className="progress-items__col__item">
                                <p className={'progress-items__col__item__number'}>#2</p>
                                <p className={'progress-items__col__item__desc'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </p>
                            </div>
                            <div className="progress-items__col__item">
                                <p className={'progress-items__col__item__number'}>#3</p>
                                <p className={'progress-items__col__item__desc'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </p>
                            </div>
                            <div className="progress-items__col__item">
                                <p className={'progress-items__col__item__number'}>#4</p>
                                <p className={'progress-items__col__item__desc'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </p>
                            </div>
                        </div>
                        <div className="progress-items__col2">
                            <div className="progress-items__col__item">
                                <p className={'progress-items__col__item__number'}>#5</p>
                                <p className={'progress-items__col__item__desc'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </p>
                            </div>
                            <div className="progress-items__col__item">
                                <p className={'progress-items__col__item__number'}>#6</p>
                                <p className={'progress-items__col__item__desc'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </p>
                            </div>
                            <div className="progress-items__col__item">
                                <p className={'progress-items__col__item__number'}>#7</p>
                                <p className={'progress-items__col__item__desc'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </p>
                            </div>
                            <div className="progress-items__col__item">
                                <p className={'progress-items__col__item__number'}><img src={require('../img/cup.png')} alt=""/></p>
                                <p className={'progress-items__col__item__desc'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Carousel />
                <div className="advantage">
                    <div className="advantage-items">
                        <div className="advantage-items__title">
                            <img src={require('../img/car-icon.png')} alt=""/>
                            <p>МАТЕРИАЛЫ ОТ ЛУЧШИХ КОМПАНИЙ</p>
                        </div>
                        <p className="advantage-items__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, rutrum est, molestie proin tristique duis sed. Morbi suspendisse amet nisl vestibulum risus. Quis pretium
                        </p>
                        <div className={'center-rhombus'}>
                            <img src={require('../img/rhombus.png')} alt=""/>
                        </div>
                        <div className="advantage-items__title">
                            <img src={require('../img/car-icon3.png')} alt=""/>
                            <p>ОПЫТНЫЕ МАСТЕРА</p>
                        </div>
                        <p className="advantage-items__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat.                        </p>
                        <div className={'center-rhombus'}>
                            <img src={require('../img/rhombus.png')} alt=""/>
                        </div>
                        <div className="advantage-items__title">
                            <img src={require('../img/car-icon2.png')} alt=""/>
                            <p>ГАРАНТИЯ НА ВСЕ ВИДЫ РАБОТЫ</p>
                        </div>
                        <p className="advantage-items__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat.                        </p>
                    </div>
                    <div className="advantage-images">
                        <Smallcarousel />
                    </div>
                </div>
            </div>
            <div className="services" id={'services'}>
                <p className={'heading'}>НАШИ УСЛУГИ</p>
                <div className={'center-rhombus'}>
                    <img src={require('../img/rhombus.png')} alt=""/>
                </div>
                <Services cat1={cat1} cat2={cat2} cat={cat} setCat1={setCat1} setCat2={setCat2} setCat={setCat} />
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

export default Home;