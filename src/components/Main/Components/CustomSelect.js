import React from 'react';
import arrowDown from '../../../assets/shape.png';

export const Select = ({
    arr,
    select,
    isSelectActive,
    setSelMode,
    setSelValue
}) => {
    const activateSelect = () => {
        setSelMode();
    }
    const setSelectValue = (e) => {        
        setSelValue(e.target.textContent);
        
    }
    return (
        <div className='_alg-sel'>
            <div
                onClick={activateSelect}
                className={isSelectActive
                ? "select is-active"
                : 'select'}>
                <div className="select__header">
                    <div className='_square __first'></div>
                    <div className='_square __second'></div>
                    <div className='_square __third'></div>
                    <div className='_square __fourth'></div>
                    <span className="select__current">{select}</span>
                    <div className={isSelectActive ? "select__icon _activeIcon" : "select__icon"}>
                        <img src={arrowDown} alt='arrow_down'></img>
                    </div>
                </div>
                <div className="select__body">
                    {arr.map((item, index) => {
                        return (
                            <div key={index} onClick={setSelectValue} className="select__item">{item}</div>
                        )
                    })
}
                </div>
            </div>
        </div>
    )
}