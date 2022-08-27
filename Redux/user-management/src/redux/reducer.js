import { GET_API, DATA_NEW } from "./actions"

const initialState = {
    data: []
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_API:
            return {
                ...state,
                data: action.payload
            }
        case DATA_NEW:
            const dataCopy=[...state.data]
            let dataNew=dataCopy.filter(item=>item.id!== action.payload)
            return {
                ...state,
                data: dataNew
            }

        default:
            return state
    }

}
export default rootReducer