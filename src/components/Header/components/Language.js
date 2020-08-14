import React from 'react';
import './Language.scss';
import langLogo from '../../../assets/planet-earth.png';

const langs = ['ENG', 'RU'];


export const Language = ({
    lang,    
    changeLang,
    index,
    setLangIndex

}) => {
    
    const onChangeLang = () => {
        setLangIndex();
        changeLang();
        // console.log(index + 1)
    }

    return (
    <div onClick={onChangeLang} className='_lang'>
        <img src={langLogo} alt='lang' />
        <div className='abbreviation'>{lang}</div>
        </div>
    )
}