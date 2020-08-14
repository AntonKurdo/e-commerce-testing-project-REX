import { connect } from 'react-redux';
import { Profile } from '../../components/Profile/Profile';

export default connect(
    state => ({           
        isProfileOpen: state.isProfileOpen,
        login: state.login,
        btnText: state.profile.btnText
       
}),
    dispatch => ({        
    })
)(Profile)