import React from 'react';
import account from '../../../assets/account.png';
import arrow from '../../../assets/shape.png';
import dots from '../../../assets/dots.png';
import balance from '../../../assets/balance.png';
import notif from '../../../assets/bell.png';
import cart from '../../../assets/cart.png';
import './RightPart.scss';

export const RigthPart = ({
    login,
    cartItemsNumber,
    setCartMode,
    setNotifMode,
    setProfileMode,
    isProfileOpen
}) => {
    return (
        <div className='__right-part'>
        <div className='_account'>
            <div className='_img'>
                <img src={account}  alt='account_logo'/>
            </div>
                <div className='_text'>{login}</div>
                <div onClick={setProfileMode} className={!isProfileOpen ? '_arrow' : '_arrow active'}> <img src={arrow} alt='arrow_logo'></img></div>
            <div className='_dots'> <img src={dots} alt='arrow_logo'></img></div>
        </div>
        <div className='_balance'>
            <div className='_btn'>
                <img src={balance} alt='balance_logo'/>
            </div>
            <div className='_dots'>
                <img src={dots} alt='balance_dots'/>
            </div>                    
        </div>
        <div className='_notif'>
            <div onClick={setNotifMode} className='_btn'>
                <img src={notif} alt='notif_logo'/>
            </div>
            <div className='_dots'>
                <img src={dots} alt='balance_dots'/>
            </div>                    
        </div>
        <div className='_cart'>
                <span className="_amount">{cartItemsNumber}</span>
            <div onClick={setCartMode} className='_btn'>
                <img src={cart} alt='cart_logo'/>
            </div>
                             
        </div>
    </div>
    )
}