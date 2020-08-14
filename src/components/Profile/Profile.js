import React from 'react';
import './Profile.scss';
import profilePic from '../../assets/avatar.png';


export const Profile = ({
    isProfileOpen,
    login,
    btnText
}) => {    
    return (
        <div className={isProfileOpen ? 'profile' : 'profile non-active'}>
            <div className='_profile_pic'>
                <img src={profilePic} alt='profile' />
            </div>
            <div className='_profile-name'>
                {login}
            </div>
            <div className='btn-log-out'>{btnText}</div>
            <div className='__triangle'>
                <div className='_first_line'></div>
                <div className='_second_line'></div>
            </div>
        </div>
        
    )
}