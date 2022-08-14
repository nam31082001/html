import axios from "axios"
import { useEffect, useState } from "react"
import { useParams,useHistory } from "react-router-dom"

const DetailClient=()=>{
    const [Detail,setDetail]=useState({})
    let {id}=useParams()
    let history=useHistory()
    const handleBack=()=>{
        history.push("/All-Client")
    }

    useEffect(()=>{
        const GetDataDetail=async ()=>{
             let res = await axios.get(`http://localhost:3000/Client/${id}`)
             let resData=(res && res.data)?res.data:[]
             setDetail(resData)
        }
        GetDataDetail()
    })
    return(
        <>
       {Detail.idName}-
       {Detail.Name}-
       {Detail.number}-

       {Detail.passport}-
       {Detail.birth}-
       {Detail.email}-
       {Detail.address}
       <button onClick={handleBack}>Back</button>
       </>
    )
}
export default DetailClient