import { GET_API_PRODUCT ,APP_PRODUCT,GIAM} from "./containerCart";

export const getApi=payload=>({
    type:GET_API_PRODUCT,
    payload

})
export const addProduct=payload=>({
    type:APP_PRODUCT,
    payload

})
export const giam=payload=>({
    type:GIAM,
    payload

})
