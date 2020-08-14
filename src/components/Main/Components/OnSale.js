import React from 'react';
import './OnSale.scss';
import dots from '../../../assets/dots.png';
import grid from '../../../assets/grid-view.png';
import Item from '../../../containers/Main/Item';
// import { data } from '../../../data/data';



export const OnSale = ({    
    title,
    data
}) => {  
    return (
        <div className='onsale'>
            <div className='__header'>
                <div className='_title'>
                    {title}
                </div>
                <div className='_view'>
                    <div>View: Grid
                    </div>
                    <div className='grid_btns'>
                        <img src={grid} alt='grid'/>
                    </div>
                    <div className='grid_btns'>
                        <img src={dots} alt='dots'/>
                    </div>
                </div>

            </div>
            <div className='__body'>
                {data.map(item => {
                    return (<Item
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        power={item.power}
                        isAdded={item.isAdded}
                        price={item.price}
                        isPSU={item.isPSU}
                        pic={item.pic}
                        />)
                })}

            </div>
        </div>

    )
}