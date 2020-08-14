import React from 'react';
import './News.scss';
import banner from '../../../assets/banner.png';
import controls from '../../../assets/banner-controls.png';

export const News = ({title}) => {
    return (
        <div className='news'>
            <div className='_title'>{title}</div>
            <div className='__body'>
                <img src={banner} alt='banner' />
            </div>
            <div className='banner_controls'>
                <img src={controls} alt='controls' />
            </div>
        </div>
    )
}