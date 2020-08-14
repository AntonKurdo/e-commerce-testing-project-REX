import React from 'react';
import './Listings.scss';
import Item from '../../../containers/Main/Item';
import { data } from '../../../data/data'

export const Listings = ({title}) => {
    return (
        <div className='listings'>
            <div className='_title'>{title}</div>
            <div className='__body'>
                {data.map(item => {
                    return (
                        <Item 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            power={item.power}
                            isAdded={item.isAdded}
                            price={item.price}
                            isPSU={item.isPSU}
                            pic={item.pic}
                        />
                    )
                })}       
               
            </div>
        </div>
    )
}
