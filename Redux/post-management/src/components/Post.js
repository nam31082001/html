import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { post } from '../redux/actions'

const Post = () => {
    const dispatch = useDispatch()
    const [uses, setUses] = useState(
        {
            title: "",
            body: ""
        }
    )
    const navigatePost = useNavigate()
    const onChangeTitleBody = (key, value) => {
        const newValue = {
            ...uses,
            [key]: value
        }
        setUses(newValue)
    }
    const handleExit = () => {
        dispatch(post(uses))
        navigatePost("/")
    }
    return (
        <>
            <label>Title</label><br />
            <input
                id='title'
                type='text'
                onChange={e => onChangeTitleBody("title", e.target.value)}
            /><br />
            <label>Body</label><br />
            <input
                id="body"
                type="text"
                onChange={e => onChangeTitleBody("body", e.target.value)}
            /><br />
            <button onClick={() => handleExit()}>ADD</button><br />

        </>
    )
}
export default Post