import React from 'react';
import './Feedback.scss';
import stars from '../../../assets/stars.png'


export const Feedback = () => (
    <div className='feedback'>
        <div className='_mark'>4.9</div>
        <div className='_cont'>
            <div className='_text'>
                Great service and prices!
            </div>
            <div className='_stars'>
                <div>
                    <img src={stars} alt='stars' />
                </div>                
                <span className='_author'>David Smith</span>
            </div>
            
        </div>
    </div>
)