import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getAPi, deleteAPI, transport } from '../redux/actions'
import '../components/indexcss.css'


const Data = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const dataNew = useSelector(state => state.data)
    useEffect(() => {
        dispatch(getAPi())
    }, [])
    const hanldleAdd = () => {
        navigate("/post")
    }
    const hanleDelete = (job) => {
        dispatch(deleteAPI(job))

    }
    const handleEdit = (item) => {
        dispatch(transport(item))
        navigate("/edit")
    }

    return (
        <>
            <button onClick={() => hanldleAdd()}>Add</button>
            {dataNew.map(item => {
                return (
                    <tr>
                        <td>
                            {item.title}
                            <br />
                            {item.body}
                        </td>
                        <td>
                            <button onClick={() => handleEdit(item)}>Edit</button>
                            <button onClick={() => hanleDelete(item)}>Delete</button>
                        </td>

                    </tr>
                )
            })}

        </>
    )
}
export default Data