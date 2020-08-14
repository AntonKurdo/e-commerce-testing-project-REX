import { connect } from 'react-redux';
import { MainMenu } from '../../components/MainMenu/MainMenu';

export default connect(
    state => ({     
        isMenu: state.isMenu,
        home: state.menu.home,
        sell: state.menu.sell,
        host: state.menu.host,
        about: state.menu.about,
        support: state.menu.support,
}),
    dispatch => ({ 
        setMenuMode: () => {
            dispatch({type: 'SET_MENU_MODE'})
        },
})
)(MainMenu)