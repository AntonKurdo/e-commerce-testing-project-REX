import React from 'react';
import './Socials.scss';
import facebook from '../../../assets/facebook.png';
import twitter from '../../../assets/twitter.png';
import youtube from '../../../assets/youtube.png';
import reddit from '../../../assets/reddit.png';

const socials = [facebook, twitter, youtube, reddit];

export const Socials = () => (
    <div className='socials'>
        {socials.map((item, index) => {
            return (
                <div key={index} className='_item'>
                    <div className='_white_square first'></div>
                    <div className='_white_square second'></div>
                    <div className='_white_square third'></div>
                    <div className='_white_square fourth'></div>
                    <img src={item} alt='icon'/>
                </div>
            )
        })}
    </div>
)