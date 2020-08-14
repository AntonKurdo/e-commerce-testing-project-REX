import { connect } from 'react-redux';
import { Filters } from '../../components/Main/Components/Filters';

export default connect(
    state => ({     
        algSelect: state.algSelect,
        isAlgSelectActive: state.isAlgSelectActive,
        equipmentSelect: state.equipmentSelect,
        isEquipmentSelectActive: state.isEquipmentSelectActive,
        title: state.sections.filters

}),
    dispatch => ({    
        setAlgSelMode: () => {
            dispatch({type: 'SET_ALG_SEL_MODE'})
        },
        setAlgSelValue: (value) => {
            dispatch({type: 'SET_ALG_SEL_VALUE', payload: value})
        },
        setEquipmentSelMode: () => {
            dispatch({type: 'SET_EQU_SEL_MODE'})
        },
        setEquipmentSelValue: (value) => {
            dispatch({type: 'SET_EQU_SEL_VALUE', payload: value})
        },
})
)(Filters)