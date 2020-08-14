import { connect } from 'react-redux';
import { Header } from '../../components/Header/Header';

export default connect(
    state => ({    
        cartItems: state.cartItems,
        isProfileOpen: state.isProfileOpen,
        login: state.login
}),
    dispatch => ({     
        setCartMode: () => {
            dispatch({type: 'SET_CART_MODE'})
        },
        setNotifMode: () => {
            dispatch({ type: 'SET_NOTIFICATIONS_MODE'})
        },
        setProfileMode: () => {
            dispatch({ type: 'SET_PROFILE_MODE'})
        }
})
)(Header)