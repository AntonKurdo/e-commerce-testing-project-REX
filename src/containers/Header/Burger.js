import { connect } from 'react-redux';
import { Burger } from '../../components/Header/components/Burger';

export default connect(
    state => ({     
        isBurger: state.isBurger,
        menu: state.menu.menu
}),
    dispatch => ({ 
        setMenuMode: () => {
            dispatch({type: 'SET_MENU_MODE'})
        },
})
)(Burger)