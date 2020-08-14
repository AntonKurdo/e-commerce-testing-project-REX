import React, {useState} from 'react';
import arrowDown from '../../../assets/shape.png';
import './CoinSelect.scss';
import BTC from '../../../assets/coins/bch.png';
import PPC from '../../../assets/coins/ppc.png';
import ETP from '../../../assets/coins/etp.png';

const coins = [
    {
        pic: BTC,
        title: 'BTC'
    }, {
        pic: PPC,
        title: 'PPC'
    }, {
        pic: ETP,
        title: 'ETP'
    }, {
        pic: BTC,
        title: 'BTC'
    }, {
        pic: PPC,
        title: 'PPC'
    }, {
        pic: ETP,
        title: 'ETP'
    }
]

export const CoinSelect = () => {
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
                    <span className="select__current">By Coin</span>
                    <div
                        className={isActive
                        ? "select__icon _activeIcon"
                        : "select__icon"}>
                        <img src={arrowDown} alt='arrow_down'></img>
                    </div>
                </div>
                <div className="select__body_coin">
                    {coins.map((coin, index) => {
                        return (
                            <div key={index} className="select__item">
                                <div className='_square __first'></div>
                                <div className='_square __second'></div>
                                <div className='_square __third'></div>
                                <div className='_square __fourth'></div>
                                <div>
                                    <img src={coin.pic} alt=""/>
                                </div>
                                <div className='coin_name'>{coin.title}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}