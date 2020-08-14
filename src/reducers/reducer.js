import update from 'immutability-helper';
import { data } from '../data/data';


const INITIAL_STATE = {
    login: 'Anton Kurdo',
    lang: {index: 1, language: 'ENG'},
    isMenu: false,
    isBurger: false,
    algSelect: 'By Algorithm',
    isAlgSelectActive: false,
    equipmentSelect: 'By Equipment',
    isEquipmentSelectActive: false,
    isNotificationsOpen: false,
    isProfileOpen: false,
    isCartOpen: true,
    cartItems: [],    
    menu: {
        menu: 'menu',
        home: 'Home',
        sell: 'Sell',
        host: 'Host',
        about: 'About Us',
        support: 'Support'
    },
    sections: {
        filters: 'Filters',
        onSale: 'On Sale',
        listings: 'New Listings',
        news: 'News'
    },
    cart: {
        phrase1: 'You have',
        phrase2: 'items in your cart',
        btn1: 'Continue',
        btn2: 'Remove all'
    },
    notification: 'You have no any notifications...',
    profile: {
        btnText: 'Log Out'
    },
    data: data,
    isBillingActive : false

}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_MENU_MODE': 
            return update(state,
                {
                    isMenu: { $set: !state.isMenu },
                    isBurger: { $set: !state.isMenu }
                }
            )
        case 'SET_ALG_SEL_MODE': 
            return update(state,
                {
                    isAlgSelectActive: { $set: !state.isAlgSelectActive }
                }
            )
        case 'SET_ALG_SEL_VALUE': 
            return update(state,
                {
                    algSelect: { $set: action.payload }
                }
            )
        case 'SET_EQU_SEL_MODE': 
            return update(state,
                {
                    isEquipmentSelectActive: { $set: !state.isEquipmentSelectActive }
                }
            )
        case 'SET_EQU_SEL_VALUE': 
            return update(state,
                {
                    equipmentSelect: { $set: action.payload }
                }
            )
        case 'SET_CART_MODE': 
            return update(state,
                {
                    isCartOpen: { $set: !state.isCartOpen },
                    isNotificationsOpen: { $set: false },
                    isProfileOpen: {$set: false}
                }
            )
        case 'SET_PROFILE_MODE': 
            return update(state,
                {
                    isProfileOpen: { $set: !state.isProfileOpen },
                    isNotificationsOpen: {$set: false},
                    isCartOpen: { $set: false },
                }
            )
        case 'REMOVE_ALL_ITEMS':
            const clearData = data.map(item => {
                item.isAdded = false;
                return item;
            })
            return update(state,
                {
                    data: {$set: clearData},
                    cartItems: { $set: [] },
                    isBillingActive: {$set: false}
                }
            )
        case 'REMOVE_ITEM': 
            const newCart = state.cartItems.filter(item => item.id !== action.payload);
            const removedItemFromData = state.data.map(item => {
                if (item.id === action.payload) {
                    item.isAdded = false;
                }
                return item;
            })
            let closeBilling = true;
            if (state.cartItems.length === 1) {
                closeBilling = false;
            }
            return update(state, {
                cartItems: { $set: newCart },
                data: { $set: removedItemFromData },
                isBillingActive: {$set : closeBilling}                
            })
        case 'SET_AMOUNT_UP':
            const arrUp = state.cartItems.map(item => {
                if (item.id === action.payload) {
                    item.amount += 1;
                    
               }
                return item;
            })
            return update(state, {
                cartItems: {$set: arrUp}
            })
        case 'SET_AMOUNT_DOWN':
            const arrDown = state.cartItems.map(item => {
                if (item.id === action.payload) {
                    item.amount -= 1;
               }
                return item;
            })
            return update(state, {
                cartItems: {$set: arrDown}
            })
        
        case 'SET_NOTIFICATIONS_MODE': 
            return update(state,
            {
                isNotificationsOpen: { $set: !state.isNotificationsOpen },
                isCartOpen: { $set: false },
                isProfileOpen: {$set: false}
            }
            )
        case 'ADD_ITEM_TO_CART': 
            const item = {
                id: action.payload.id,
                pic: action.payload.pic,
                title: action.payload.title,
                amount: 1,
                price: action.payload.price
            }
            const newData = state.data.map(item => {
                if (item.id === action.payload.id) {
                    item.isAdded = true;
                }
                return item;
            })            
            return update(state, {
                data: {$set: newData},
                cartItems: {$push: [item]}          
            })
        case 'CHANGE_LANG_INDEX': 
            if (state.lang.index === 3) {
                return update(state, {
                    lang: {index: {$set: 1}}
                })
            }
            const ind = state.lang.index + 1;
            return update(state,
                {
                    lang: {index: {$set: ind }}
                }
            )
        case 'CHANGE_LANGUAGE':
            if (state.lang.index === 1) {
                return update(state, {
                    lang: { language: { $set: 'ENG' } },
                    menu: {
                        menu: {$set: 'menu'},
                        home: { $set: 'Home' },
                        sell: { $set: 'Sell' },
                        host: { $set: 'Host' },
                        about: { $set: 'About Us' },
                        support: { $set: 'Support' }
                    },
                    sections: {
                        filters: { $set: 'Filters' },
                        onSale: { $set: 'On Sale' },
                        listings: { $set: 'New Listings' },
                        news: { $set: 'News' }
                    },
                    cart: {
                        phrase1: { $set: 'You have' },
                        phrase2: { $set: 'items in your cart' },
                        btn1: { $set: 'Continue' },
                        btn2: { $set: 'Remove all' }
                    },
                    notification: { $set: 'You have no any notifications...'},
                    login: { $set: 'Anton Kurdo' },
                    profile: {btnText: {$set: 'Log Out'}}
                })
            }
            if (state.lang.index === 2) {
                return update(state, {
                    lang: { language: { $set: 'БЕЛ' } },
                    menu: {
                        menu: {$set: 'меню'},
                        home: { $set: 'Дамашняя старонка' },
                        sell: { $set: 'У продажы' },
                        host: { $set: 'Дзеля наведвальнікоў' },
                        about: { $set: 'Пра нас' },
                        support: { $set: 'Падтрымка' }
                    },
                    sections: {
                        filters: { $set: 'Сартаваць' },
                        onSale: { $set: 'У продажы' },
                        listings: { $set: 'Навінкі' },
                        news: { $set: 'Навіны' }
                    },
                    cart: {
                        phrase1: { $set: 'У Вашым кошыку' },
                        phrase2: { $set: 'тавараў' },
                        btn1: { $set: 'Працягнуць' },
                        btn2: { $set: 'Выдаліць усе' }
                    },     
                    notification: { $set: 'Пакуль няма ніякіх натыфікацый...'},
                    login: { $set: 'Антон Курдо' },
                    profile: {btnText: {$set: 'Выйсці'}}
                })
            }
            if (state.lang.index === 3) {
                return update(state, {
                    lang: { language: { $set: 'RU' } },
                    menu: {
                        menu: {$set: 'меню'},
                        home: { $set: 'Домашняя страница' },
                        sell: { $set: 'В продаже' },
                        host: { $set: 'Для посетителей' },
                        about: { $set: 'О нас' },
                        support: { $set: 'Поддержка' }
                    },
                    sections: {
                        filters: { $set: 'Сортировать' },
                        onSale: { $set: 'В продаже' },
                        listings: { $set: 'Новинки' },
                        news: { $set: 'Новости' }
                    },
                    cart: {
                        phrase1: { $set: 'В Вашей корзине' },
                        phrase2: { $set: 'товаров' },
                        btn1: { $set: 'Продолжить' },
                        btn2: { $set: 'Удалить все' }
                    }, 
                    notification: { $set: 'Уведомлений нет...'},
                    login: { $set: 'Антон Курдо' },
                    profile: {btnText: {$set: 'Выйти'}}
                })
            }
            return state
        case 'SET_BILLING_MODE': 
            return update(state, {
                isBillingActive: {$set: true}
            })
            
        default: return state
    }
   
}