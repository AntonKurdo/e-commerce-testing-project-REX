import { connect } from 'react-redux';
import { News } from '../../components/Main/Components/News';

export default connect(
    state => ({          
        title: state.sections.news
}),
    dispatch => ({              
})
)(News)