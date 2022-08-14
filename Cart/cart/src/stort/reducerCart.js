import { GET_API_PRODUCT, APP_PRODUCT, GIAM } from "./containerCart";

export const initCart = {
    todo: [],
    cart: [],
    numberProduct: 0
}
const reducerCart = (state, action) => {
    switch (action.type) {
        case GET_API_PRODUCT:
            return {
                ...state,
                todo: action.payload
            }
        case APP_PRODUCT:
            const product = state.cart.filter(item => item.id === action.payload.id)
            let NewCart = []
            if (product.length) {
                NewCart = state.cart.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    }
                    return item
                })
            } else {
                NewCart = state.cart.map(item => {
                    return item
                })
                NewCart.push({
                    id: action.payload.id,
                    name: action.payload.Name,
                    price: action.payload.price,
                    quantity: 1
                }

                )
            }

            return {
                ...state,
                cart: NewCart,
            }
        case GIAM:
            const copyCart = [...state.cart]
            copyCart[action.payload].quantity--
            return {
                ...state,
                cart: copyCart
            }

        default:
            throw new Error('nam')
    }

}
export default reducerCart