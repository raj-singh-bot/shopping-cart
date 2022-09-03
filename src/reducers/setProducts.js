const initialState = {
    products: []
};

const SetProducts = (state = initialState, {payload, type}) =>{
    switch(type){
        case 'SET_PRODUCTS': 
        return {
            ...state, products: payload 
        }
        default:
            return state;
    }
}

export default SetProducts;