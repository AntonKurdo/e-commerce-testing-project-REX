import React from 'react';
import './Header.scss';
import { Logo } from './components/Logo';
import Language from '../../containers/Header/Language';
import Burger from '../../containers/Header/Burger';
import { RigthPart } from './components/RightPart';

export const Header = ({
    login,
    isProfileOpen,
    cartItems,
    setCartMode,
    setNotifMode,
    setProfileMode
}) => {
    return (
        <div className='header'>
           <Logo />
            <Language />
            <Burger />
            <RigthPart
                cartItemsNumber={cartItems.length}
                setCartMode={setCartMode} 
                setNotifMode={setNotifMode}
                setProfileMode={setProfileMode}
                isProfileOpen={isProfileOpen}
                login={login}
                />           
        </div>
    )
}