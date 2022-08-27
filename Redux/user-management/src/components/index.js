import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteApi } from '../redux/actions'



const Get = () => {
    const [dataNew, setDataNew] = useState([])
    const dispatch = useDispatch()
    const dataApi = useSelector(state => state.data)
    const handleOnClick = () => {
        dispatch(
            {
                type: "CLICK",
            }
        )
    }
    const handleDelete=(id)=>{
        dispatch(
            {
                type:'CLICK_DELETE',
                payload:id
            }
        )
        dispatch(deleteApi(id))
    }
    useEffect(() => {
        if (dataApi) {
            setDataNew(dataApi)
        }
    }, [dataApi])
    return (
        <>
            <button onClick={()=>handleOnClick()}>Add</button>
            <table>
                <tr>
                    <th>Tên</th>
                    <th>Email</th>
                    <th>Wed</th>
                </tr>

                {dataNew.map(item => {
                    return (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.website}</td>
                            <td>
                                <button 
                                onClick={()=>handleDelete( item.id)}
                                >Xóa</button>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}
export default Get