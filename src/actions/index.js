export const setProducts = (products) => {
    return {
        type: 'SET_PRODUCTS',
        payload: products,
    };
    
};

export const addToCart =() => {
    return {
        type: 'ADD_TO_CART',
        
    };
}