import React, {useState} from 'react';
import './services.css'
import './category.css'
import Category1 from "./category1";
import Category2 from "./category2";

const Services = ({cat, setCat1, cat1, cat2, setCat2, setCat}) => {


    const selectCategory = (cat) => {
        if (cat) {
            setCat1('#DB3138')
            setCat2('')
            setCat(true)
        } else {
            setCat1('')
            setCat2('#DB3138')
            setCat(false)
        }
    }

    return (
        <div>
            <div className="services-categories">
                <button className={'cat-btn'} onClick={() => {
                    selectCategory(true)
                }} style={{backgroundColor: cat1}}>ОКЛЕЙКА</button>
                <button className={'cat-btn'} onClick={() => {
                    selectCategory(false)
                }} style={{backgroundColor: cat2, marginLeft: '20px'}}>ДЕТЕЙЛИНГ</button>
            </div>
            {
                cat
                    ? <Category1 />
                    : <Category2 />
            }
        </div>
    );
};

export default Services;