import React from 'react';
import './App.scss';
import Header from './containers/Header/Header';
import { Footer } from './components/Footer/Footer';
import MainMenu from './containers/MainMenu/MainMenu';
import {Main} from './components/Main/Main';
import Cart from './containers/Cart/Cart';
import Notifications from './containers/Notifications/Notifications';
import Profile from './containers/Profile/Profile';

function App() {
    return (
        <div className="App">
            <MainMenu />
            <Profile />
            <Notifications/>
            <Cart/>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
