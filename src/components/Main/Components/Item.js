import React from 'react';
import './Item.scss';
import star from '../../../assets/star-added.png';


export const Item = ({
    id,
    title,
    power,
    isAdded,
    price,
    isPSU,
    pic,
    addItemToCart

}) => {

    const onAddToCart = (id, pic, title, price) => {
        addItemToCart(id, pic, title, price)
    }

    return (
        <div className='_item'>
            <div className='_square __first'></div>
            <div className='_square __second'></div>
            <div className='_square __third'></div>
            <div className='_square __fourth'></div>

            <div className='_item-header'>
                <div className='_title'>
                    <div className='_name'>{title}e</div>
                    <div className='_power'>{power}</div>
                </div>
                <div className='_star'>
                    {isAdded
                        ? <img src={star} alt='star'/>
                        : null}
                </div>
            </div>
            <div className='_item-body'>
                <img src={pic} alt='item-pic'></img>
            </div>
            <div className='_item-footer'>
                <div className='_price'>
                    {price.toFixed(2)}$
                </div>
                <div className='_psu'>
                    {isPSU
                        ? 'PSU'
                        : null}
                </div>
            </div>
            <div className='_hovered_item'>
                <div className='_square __first'></div>
                <div className='_square __second'></div>
                <div className='_square __third'></div>
                <div className='_square __fourth'></div>
                <div className='_title'>
                    <div className='_name'>{title}</div>
                    <div className='_power'>{power}</div>
                </div>
                <div className='_item-price-hovered'>
                    <div className='_price'>
                        {price.toFixed(2)}$
                    </div>
                    <div className='_psu'>
                        {isPSU
                            ? 'PSU'
                            : null}
                    </div>
                </div>
                <div className='_buttons'>
                    <button className='_btn details_btn'>
                        Details
                        <div className='_square __first'></div>
                        <div className='_square __second'></div>
                        <div className='_square __third'></div>
                        <div className='_square __fourth'></div>
                    </button>
                    <button
                        onClick={onAddToCart.bind(null, id, pic, title, price)}
                        className='_btn add_btn'
                        disabled={isAdded
                        ? true
                        : false}>
                        Add to cart
                        <div className='_square __first'></div>
                        <div className='_square __second'></div>
                        <div className='_square __third'></div>
                        <div className='_square __fourth'></div>
                    </button>
                </div>
            </div>
        </div>
    )
}