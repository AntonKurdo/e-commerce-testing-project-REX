import { connect } from 'react-redux';
import { Language } from '../../components/Header/components/Language';

export default connect(
    state => ({     
       index: state.lang.index,
       lang: state.lang.language
}),
    dispatch => ({ 
        setLangIndex: () => {
            dispatch({type: 'CHANGE_LANG_INDEX'})
        },
        changeLang: () => {
            dispatch({ type: 'CHANGE_LANGUAGE' })
        }
       
})
)(Language)