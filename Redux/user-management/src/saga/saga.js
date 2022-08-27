
import axios from 'axios'
import { GET_API, CLICK, CLICK_DELETE,DATA_NEW } from '../redux/actions'
import { put, takeLatest } from 'redux-saga/effects'

const Api = "https://jsonplaceholder.typicode.com/users"
function* callApi() {
    try {
        const res = yield axios.get(Api)
        yield put(
            {
                type: GET_API,
                payload: res.data
            }
        )
    } catch(error) {
        console.log("error - getUser : ", error);
    }
}

function* deleteApi( action){
    const id=action.payload
    try{
            yield axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    }catch(error){
        console.log("error - getUser : ", error);
    }
}


export default function* rootSaga() {
    yield takeLatest(CLICK, callApi)
    yield takeLatest(CLICK_DELETE,deleteApi)
}