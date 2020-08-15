import React from 'react';
import './Language.scss';
import langLogo from '../../../assets/planet-earth.png';

export const Language = ({
    lang,    
    changeLang,
    index,
    setLangIndex

}) => {
    
    const onChangeLang = () => {
        setLangIndex();
        changeLang();       
    }

    return (
    <div onClick={onChangeLang} className='_lang'>
        <img src={langLogo} alt='lang' />
        <div className='abbreviation'>{lang}</div>
        </div>
    )
}