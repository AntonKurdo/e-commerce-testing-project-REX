import React from 'react';
import  Filters  from '../../containers/Main/Filters';
import './Main.scss';
import OnSale from '../../containers/Main/OnSales';
import Listings from '../../containers/Main/Listings';
import News from '../../containers/Main/News';


export const Main = () => {
    return (
        <main>
            <Filters />
            <OnSale />
            <Listings />
            <News />
        </main>
    )
}