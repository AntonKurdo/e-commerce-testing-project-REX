import React from 'react';
import './Billing.scss';
import {Input} from '../Main/Components/Input';

export const Billing = ({isActive}) => {    
    return (
        <div className={isActive ? 'billing active' : 'billing'}>
            <div className='_header'>
                Enter your Billing details
                <div className='_input'>
                    <input type='checkbox' checked/>
                    <div className='_text'>
                        Remember
                    </div>
                </div>
            </div>
            <div className='_body'>
                <div className='_lay'>
                    <div className="_left-side">
                        <Input placeholder='Name*' type='text' width='100%' mt='0'/>
                        <Input placeholder='Company Name(optional)' type='text' width='100%' mt='15px'/>
                    </div>
                    <div className="_right-side">
                        <Input placeholder='Last Name*' type='text' width='100%' mt='0'/>
                        <Input placeholder='Country*' type='text' width='100%' mt='15px'/>
                    </div>
                </div>
                <Input placeholder='House number and street name*' type='text' width='100%' mt='10px'/>
                <Input placeholder='Apartment, suit, unit, etc (optional)' type='text' width='100%' mt='10px'/>
                <div className='_lay'>
                    <div className="_left-side">
                        <Input placeholder='Town/City*' type='text' width='100%' mt='10px'/>
                        <Input placeholder='ZIP*' width='100%' mt='15px'/>
                        <Input placeholder='Email address' type='email' width='100%' mt='15px'/>
                    </div>
                    <div className="_right-side">
                        <Input placeholder='State*' type='text' width='100%' mt='10px'/>
                        <Input placeholder='Phone*' type='number' width='100%' mt='15px' />
                        <Input placeholder='Create account password' type='password' width='100%' mt='15px' />
                        
                    </div>
                </div>
            </div>

        </div>
    )
}