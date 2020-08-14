import React from 'react';
import { Feedback } from './components/Feedback';
import './Footer.scss'
import { Socials } from './components/Socials';
import { Achievements } from './components/Achievements';

export const Footer = () => {
    return (
        <footer>
            <Feedback />  
            <Socials />
            <Achievements />
        </footer>
        
    )
}