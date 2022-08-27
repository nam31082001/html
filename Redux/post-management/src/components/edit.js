import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { putApi } from "../redux/actions";


const Edit = () => {
    const dispatch = useDispatch()
    const item = useSelector(state => state.itemBuy);
    const navigate = useNavigate();
    const [user, setUser] = useState(
        {
            title: item.title,
            body: item.body
        }
    );
    const onChangePut = (key, value) => {
        const newVal = { ...user, [key]: value };

        setUser(newVal);

    }
    const handlePut = (item) => {
        let data = {
            id: item.id,
            body: user
        }
        dispatch(putApi(data))
        navigate("/")
    }

    return (
        <>
            <label>Title</label><br />
            <input
                id='title'
                type='text'
                value={user.title}
                onChange={e => onChangePut("title", e.target.value)}
            /><br />
            <label>Body</label><br />
            <input
                id="body"
                type="text"
                value={user.body}
                onChange={e => onChangePut("body", e.target.value)}
            /><br />
            <button onClick={() => handlePut(item)}>ADD</button><br />
        </>
    )
}
export default Edit