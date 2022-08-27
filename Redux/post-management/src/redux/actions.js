import axios from 'axios'
export const GET_API = 'GET'
export const POST='POST'
export const DELETE='DELETE'
export const TRANSPORT='TRANSPORT'
export const PUT='PUT'





export const getAPi = () => {
    return async dispatch => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch({
            type: GET_API,
            payload: res.data
        })

    }
}

export const post = payload => {
    return async dispatch => {
        const res=await axios.post('https://jsonplaceholder.typicode.com/posts', payload)
        dispatch(
           {
            type:POST,
            payload:res.data
           }
        )

    }
}
export const deleteAPI =payload=>{
    const id=payload.id
    return async dispatch=>{
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        dispatch({
            type:DELETE,
            payload:payload
        })
    }
}

export const putApi=payload=>{
const {id,body}=payload
    return async dispatch=>{
        let res=await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,body)
        dispatch({
            type:PUT,
            payload:res.data
        })
    }
}


export const transport=data=>{
    return{
        type:TRANSPORT,
        payload:data

    }
}