import { connect } from 'react-redux';
import { Notifications } from '../../components/Notifications/Notifications';

export default connect(
    state => ({           
        isNotificationsOpen: state.isNotificationsOpen,
        text: state.notification
       
}),
    dispatch => ({        
    })
)(Notifications)