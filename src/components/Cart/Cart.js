import React from 'react';
import './Cart.scss'
import close from '../../assets/hamburger close.png';
import arrowLeft from '../../assets/arrowLeft.png';
import arrowRight from '../../assets/arrowRight.png';
import remove from '../../assets/hamburger close.png';
import {Billing} from './Billing';

export const Cart = ({
    cartItems,
    isCartOpen,
    setCartMode,
    removeAll,
    setAmountUp,
    setAmountDown,
    cart,
    removeItem,
    isBillingActive,
    setBillingMode
}) => {

    const sum = () => {
        let sum = 0;
        cartItems.forEach(item => {
            sum += item.price * item.amount
        })
        return sum.toFixed(2)
    }

    const amountUp = (id) => {
        setAmountUp(id)
    }
    const amountDown = (id, amount) => {
        if (amount > 1) {
            setAmountDown(id)
        }
    }
    const onRemoveItem = (id) => {
       removeItem(id)
    }
    return (
        <div
            className={isCartOpen
            ? 'cart'
            : 'cart non-active'}>
            <div className='__triangle'>
                <div className='_first_line'></div>
                <div className='_second_line'></div>
            </div>
            <div className='__header'>
                <div className='_text'>
                    {cart.phrase1} {cartItems.length} {cart.phrase2}
                </div>
                <div onClick={setCartMode} className='btn_close'>
                    <img src={close} alt='close_btn'/>
                </div>
            </div>
            <div className='__body'>
                {cartItems.map(item => {
                    return (
                        <div key={item.id} className='cart_item'>
                            <div className='item-pic'>
                                <div className='__square _first'></div>
                                <div className='__square _second'></div>
                                <div className='__square _third'></div>
                                <div className='__square _fourth'></div>
                                <img src={item.pic} alt='img'/>
                            </div>
                            <div className='item-body'>
                                <div className='_title'>{item.title}</div>
                                <div className='_cont'>
                                    <div className='_controlls'>
                                        <div onClick={amountDown.bind(null, item.id, item.amount)} className='_ar-left'>
                                            <img src={arrowLeft} alt='arrow'/>
                                        </div>
                                        <span>{item.amount}</span>
                                        <div onClick={amountUp.bind(null, item.id, item.amount)} className='_ar-right'>
                                            <img src={arrowRight} alt='arrow'/>
                                        </div>
                                    </div>
                                    <div className='_price'>
                                        {item
                                            .price
                                            .toFixed(2) + '$'}
                                    </div>
                                    <div
                                        onClick={onRemoveItem.bind(null, item.id)}
                                        className='btn_remove'>
                                        <img src={remove} alt='btn-remove' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
}
            </div>
            <Billing isActive={isBillingActive}/>
            <div className='__footer'>
                <div className='_buttons'>
                    <button
                        onClick={() => { setBillingMode() }} className='btn'
                        disabled={cartItems.length === 0 ? true : false}
                    >
                        {cart.btn1}
                        <div className='__square _first'></div>
                        <div className='__square _second'></div>
                        <div className='__square _third'></div>
                        <div className='__square _fourth'></div>
                    </button>
                    <button onClick={removeAll} className='btn'>
                        {cart.btn2}
                        <div className='__square _first'></div>
                        <div className='__square _second'></div>
                        <div className='__square _third'></div>
                        <div className='__square _fourth'></div>
                    </button>

                </div>
                <div className='_sum'>
                    <div>Σ</div>
                    <div>${sum()}</div>
                </div>
            </div>
        </div>
    )
}