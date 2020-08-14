import React from 'react';
import './Input.scss';

export const Input = ({ placeholder, type='number', width='212px', mt='20px' }) => {
    return (
        <div className='input' style={{width: width, marginTop: mt} }>
            <input type={type} placeholder={placeholder}/>
            <div className='_square_input __first'></div>
            <div className='_square_input __second'></div>
            <div className='_square_input __third'></div>
            <div className='_square_input __fourth'></div>
        </div>        
    )
}