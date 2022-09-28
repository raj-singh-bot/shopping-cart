export const setProducts = (products) => {
    return {
        type: 'SET_PRODUCTS',
        payload: products,
    };
    
};

export const addToCart =(products) => {
    return {
        type: 'ADD_TO_CART',
        payload:products
    };
}

export const removeFromCart = (product) => {
    return{
        type: 'REMOVE_FROM_CART',
        payload: product
    }
}

export const getCartNumber = () => {
    return{
        type: 'GET_CART_NUMBER'
    }
}

export const incrementQuantity = (id) => {
    return{
        type: 'INCREMENT_QUANTITY',
        payload:id
    }
}

export const decrementQuantity = (id) => {
    return{
        type: 'DECREMENT_QUANTITY',
        payload:id
    }
}