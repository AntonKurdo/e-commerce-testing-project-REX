import React from 'react';
import './Notifications.scss';

export const Notifications = ({
    isNotificationsOpen,
    text
}) => {
    return (
        <div className={isNotificationsOpen ? 'notifications' : 'notifications is-active'}>
            <div class='_text'>              
                {text}
            </div>
         
            <div className='__triangle'>
                <div className='_first_line'></div>
                <div className='_second_line'></div>
            </div>
        </div>

    )
}