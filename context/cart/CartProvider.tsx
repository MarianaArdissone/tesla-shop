import { FC, useReducer } from 'react';
import { CartContext, cartReducer } from './';
import { ICartProduct } from '../../interfaces';


interface Props {
    children: React.ReactNode
}

export interface CartState {
    cart: ICartProduct[];
}

const CART_INITIAL_STATE: CartState = {
    cart: [],
}


export const CartProvider:FC<Props> = ({ children }) => {

const [state, dispatch] = useReducer( cartReducer, CART_INITIAL_STATE);

const addProductToCart = ( product: ICartProduct ) => {
    // si no esta el producto en el carrito, lo agrego
    const productInCart = state.cart.some( p => p._id === product._id );
    if ( !productInCart ) return dispatch({ type: '[Cart] - Update products in cart', payload: [...state.cart, product]})

    // validacion de producto y size, se agrega
    const productInCartButDifferentSize = state.cart.some( p => p._id === product._id && p.size === product.size );
    if ( !productInCartButDifferentSize ) return dispatch({ type: '[Cart] - Update products in cart', payload: [...state.cart, product]});

    // validacion cuando existe el producto, en esa misma talla, lo acumulamos
    const updatedProducts = state.cart.map( p => {
        if( p._id !== product._id ) return p;
        if( p.size !== product.size ) return p;

        //actualizamos la cantidad
        p.quantity += product.quantity;
        return p;
    })

    dispatch({ type: '[Cart] - Update products in cart', payload: updatedProducts })
}

return ( 
    <CartContext.Provider value={{
        ...state,

        // methods
        addProductToCart,
    }}>
        { children }
    </CartContext.Provider>
)
}