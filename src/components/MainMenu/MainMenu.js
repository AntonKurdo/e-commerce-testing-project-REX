/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './MainMenu.scss';
import hambClose from '../../assets/hamburger close.png';
import squares from '../../assets/square.png'



export const MainMenu = ({
    isMenu,
    setMenuMode,
    home,
    sell,
    host,
    about,
    support
}) => {
    const links = [
        {
            name: home,
            dotes: true
        }, {
            name: sell,
            dotes: true
        }, {
            name: host,
            dotes: true
        }, {
            name: about,
            dotes: true
        }, {
            name: support,
            dotes: false
        }
    ]
    return (
        <div className={isMenu ? 'menu' : 'menu _non-active'}>
            <div onClick={setMenuMode} className='btn_close'>
                <img src={hambClose} alt='hamb_close'/>
            </div>
            <nav>
                {links.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <a href='#'>
                                {item.name}
                            </a>
                            {item.dotes
                                ? <img src={squares} alt='squares'/>
                                : null}
                        </React.Fragment>
                    )
                })
}
            </nav>
        </div>
    )
}