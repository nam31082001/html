import axios from "axios"
import { useEffect, useState } from "react"
import { useParams,useHistory } from "react-router-dom"

const Detail=()=>{
    const [Detail,setDetail]=useState({})
    let {id}=useParams()
    let history=useHistory()
    const handleBack=()=>{
        history.push("/all-Supplier")
    }

    useEffect(()=>{
        const GetDataDetail=async ()=>{
             let res = await axios.get(`http://localhost:3000/Supplier/${id}`)
             let resData=(res && res.data)?res.data:[]
             setDetail(resData)
        }
        GetDataDetail()
    })
    return(
        <>
       {Detail.name}-
       {Detail.product}-
       {Detail.phone}-

       {Detail.email}-
       {Detail.city}
       <button onClick={handleBack}>Back</button>
       </>
    )
}
export default Detail