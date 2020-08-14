import React from 'react';
import './Burger.scss';

export const Burger = ({
    isBurger,
    setMenuMode,
    menu }) => {
   
    
    return (
        <div
            onClick={setMenuMode}
            className={isBurger
            ? '__burger _active'
            : '__burger'}>
            <div className='__first'>{menu}</div>
            <div className='__second'></div>
            <div className='__third'></div>
        </div>
    )
}