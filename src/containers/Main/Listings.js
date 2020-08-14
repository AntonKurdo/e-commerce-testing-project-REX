import { connect } from 'react-redux';
import { Listings } from '../../components/Main/Components/Listings';

export default connect(
    state => ({          
        title: state.sections.listings
}),
    dispatch => ({              
})
)(Listings)