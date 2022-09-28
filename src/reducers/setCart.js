
const initialState = {
    cart: [],
    numberCart:0
}

const setCart = (state = initialState, {payload, type}) => {
    switch(type){
        case 'GET_CART_NUMBER':
        return{
            ...state
        }
        case 'ADD_TO_CART':
        const itemInCart = state.cart.find((item) => item.id === payload.id);
        if(itemInCart){
            itemInCart.quantity++;
        }
        else{
            state.cart.push({...payload, quantity: 1});
        }
        return{
            ...state, cartProducts: payload ,
            numberCart: state.numberCart + 1
        }
        case 'REMOVE_FROM_CART':
            const removeItem = state.cart.filter((item) => item.id !== payload)
            state.cart = removeItem
            return{
                ...state,
                numberCart: state.numberCart -1
            }
        
        case 'INCREMENT_QUANTITY':
            const item = state.cart.find((item) => item.id === payload)
            // console.log(item)
            // item.quantity++
            // const total = Object.values(item).reduce((result, cartItem) => result + parseFloat(cartItem.price)*cartItem.quantity, 0);
            // console.log(total)
            return{
                ...state,
                quantity: item.quantity++,
                // total: total
            }

        case 'DECREMENT_QUANTITY':
            const decItem = state.cart.find((item) => item.id === payload)
            if(decItem.quantity === 1)
            {
                decItem.quantity = 1
            }else{
                decItem.quantity--
            }
            return{
                ...state,
                quantity: decItem
            }
        default:
            return state;
    }
}

export default setCart;