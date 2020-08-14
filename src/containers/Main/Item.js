import { connect } from 'react-redux';
import { Item } from '../../components/Main/Components/Item';

export default connect(
    state => ({          

}),
    dispatch => ({    
        addItemToCart: (id, pic, title, price) => {
            dispatch({
                type: 'ADD_ITEM_TO_CART',
                payload: {
                    id: id,
                    pic: pic, 
                    title: title,
                    price: price
                }
            })
        },      
})
)(Item)