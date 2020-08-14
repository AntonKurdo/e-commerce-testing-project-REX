import { connect } from 'react-redux';
import { Cart } from '../../components/Cart/Cart';

export default connect(
    state => ({           
        cartItems: state.cartItems,
        isCartOpen: state.isCartOpen,
        cart: state.cart,
        isBillingActive: state.isBillingActive
}),
    dispatch => ({
        setCartMode: () => {
            dispatch({ type: 'SET_CART_MODE' })
        },
        removeAll: () => {
            dispatch({ type: 'REMOVE_ALL_ITEMS' })
        },
        removeItem: (id) => {
            dispatch({type: 'REMOVE_ITEM', payload: id})
        },
        setAmountUp: (id) => {
            dispatch({ type: 'SET_AMOUNT_UP', payload: id })
        },
        setAmountDown: (id) => {
            dispatch({ type: 'SET_AMOUNT_DOWN', payload: id })
        },
        setBillingMode: () => {
            dispatch({ type: 'SET_BILLING_MODE' })
        }
})
)(Cart)