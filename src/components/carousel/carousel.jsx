import React from 'react';
import Arrow from "../UI/arrow/arrow";
import './carousel.css'
import $ from 'jquery'

const Carousel = () => {
    const left = () => {
        $('#carousel-content').css({'marginLeft': '-=380px'})
    }
    const right = () => {
        $('#carousel-content').css({'left': '+=380px'})
    }
    return (
        <div className="carousel">
            <Arrow vector={false} onClick={left} />
            <div className="carousel-view">
                <div className="carousel-content" id={'carousel-content'}>
                    <div className="content-item">
                        <img src={require('../../img/car1.png')} alt=""/>
                        <div className="car-desc">
                            <p className={'car-desc__text'}>
                                Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. Cras <br/> vulputate laoreet sapien a sit ante.
                            </p>
                        </div>
                    </div>
                    <div className="content-item">
                        <img src={require('../../img/car2.png')} alt=""/>
                        <div className="car-desc">
                            <p className={'car-desc__text'}>
                                Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. Cras <br/> vulputate laoreet sapien a sit ante.
                            </p>
                        </div>
                    </div>
                    <div className="content-item">
                        <img src={require('../../img/car1.png')} alt=""/>
                        <div className="car-desc">
                            <p className={'car-desc__text'}>
                                Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. Cras <br/> vulputate laoreet sapien a sit ante.
                            </p>
                        </div>
                    </div>
                    <div className="content-item">
                        <img src={require('../../img/car2.png')} alt=""/>
                        <div className="car-desc">
                            <p className={'car-desc__text'}>
                                Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. Cras <br/> vulputate laoreet sapien a sit ante.
                            </p>
                        </div>
                    </div>
                    <div className="content-item">
                        <img src={require('../../img/car3.png')} alt=""/>
                        <div className="car-desc">
                            <p className={'car-desc__text'}>
                                Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. Cras <br/> vulputate laoreet sapien a sit ante.
                            </p>
                        </div>
                    </div>
                    <div className="content-item">
                        <img src={require('../../img/car1.png')} alt=""/>
                        <div className="car-desc">
                            <p className={'car-desc__text'}>
                                Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. Cras <br/> vulputate laoreet sapien a sit ante.
                            </p>
                        </div>
                    </div>
                    <div className="content-item">
                        <img src={require('../../img/car2.png')} alt=""/>
                        <div className="car-desc">
                            <p className={'car-desc__text'}>
                                Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. Cras <br/> vulputate laoreet sapien a sit ante.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Arrow vector={true} onClick={right} />
        </div>
    );
};

export default Carousel;