import React, {useState} from 'react';
import arrowDown from '../../../assets/shape.png';
import './Manufacturer.scss'

const manuf = ['AMD', 'Boundary Electrics', 'Pandaminer', 'Nvidia'];

export const ManufSelect = () => {
    const [isActive,
        setIsActive] = useState(false)
    return (
        <div className='_alg-sel'>
            <div
                onClick={() => setIsActive(!isActive)}
                className={isActive
                ? "select is-active"
                : "select"}>
                <div className="select__header">
                    <div className='_square __first'></div>
                    <div className='_square __second'></div>
                    <div className='_square __third'></div>
                    <div className='_square __fourth'></div>
                    <span className="select__current">By Manufacturer</span>
                    <div
                        className={isActive
                        ? "select__icon _activeIcon"
                        : "select__icon"}>
                        <img src={arrowDown} alt='arrow_down'></img>
                    </div>
                </div>
                <div className="select__body_coin">
                    {manuf.map((item, index) => {
                        return (
                            <div key={index} className="select__item manuf_item">
                                <div className='_square __first'></div>
                                <div className='_square __second'></div>
                                <div className='_square __third'></div>
                                <div className='_square __fourth'></div>
                                <div className='manuf_name'>{item}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}