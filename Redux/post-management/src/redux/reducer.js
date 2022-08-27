import { GET_API, POST, DELETE, TRANSPORT, PUT } from "./actions"


const initialState = {
    data: [],
    itemBuy: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_API:
            return {
                ...state,
                data: action.payload
            }
        case POST:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case DELETE:
            return {
                ...state,
                data: state.data.filter(item => item.id !== action.payload.id)

            }
        case TRANSPORT:

            return {
                ...state,
                itemBuy: action.payload

            }
        case PUT:
            const CopyData = [...state.data]
            CopyData[action.payload.id].title = action.payload.title
            CopyData[action.payload.id].body = action.payload.body
            return {
                ...state,
                data: CopyData,
            }



        default:
            return state
    }

}
export default rootReducer