import { connect } from 'react-redux';
import { OnSale } from '../../components/Main/Components/OnSale';


export default connect(
    state => ({          
        title: state.sections.onSale,
        data: state.data
}),
    dispatch => ({        
    })
)(OnSale)