import React, {useState} from 'react';
import './smallcarousel.css'
import Arrow from "../UI/arrow/arrow";
import $ from "jquery";

const Smallcarousel = () => {
    const images = [require('../../img/car1.png'), require('../../img/car2.png'), require('../../img/car3.png'), require('../../img/car4.png'), ]
    const [imageId, setImageId] = useState(0)
    const left = () => {
        $('#smallcarousel-content').css({'marginLeft': '-=380px'})
        if (imageId < 3 ){
            console.log(imageId);
            setImageId(imageId + 1)
        }
    }
    const right = () => {
        $('#smallcarousel-content').css({'left': '+=380px'})
        if (imageId > 0){
            setImageId(imageId - 1)
        }
    }
    return (
        <div className={'img-smallcarousel'}>
            <img src={images[imageId]} className={'car-image'} alt=""/>
            <div className="smallcarousel">
                <Arrow vector={false} onClick={left} />
                <div className="smallcarousel-view">
                    <div className="smallcarousel-content" id={'smallcarousel-content'}>
                        <div className="content-item">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor nibh feugiat est. Consectetur lectus.</p>
                        </div>
                        <div className="content-item">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor nibh feugiat est. Consectetur lectus.</p>
                        </div>
                        <div className="content-item">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor nibh feugiat est. Consectetur lectus.</p>
                        </div>
                    </div>
                </div>
                <Arrow vector={true} onClick={right} />
            </div>


        </div>
    );
};

export default Smallcarousel;