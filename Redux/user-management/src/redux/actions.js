export const CLICK='CLICK'
export const CLICK_DELETE='CLICK_DELETE'
export const  GET_API='GET'
export const DATA_NEW='DATA_NEW'

export const deleteApi = (id) => {
    return {
        type: DATA_NEW,
        payload: id
    }

}