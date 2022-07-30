import { useState } from "react"
import Order from "../order/order"

const Pagination = (props) => {
    const [check,setCheck]=useState(true)
    const [check1,setCheck1]=useState(true)
    const [check2,setCheck2]=useState(true)

    const PaginationOne=()=>{
        setCheck(!check)
    }
    const PaginationTwo=()=>{
        setCheck1(!check1)
        console.log(check1)
    }
     const PaginationTherr=()=>{
        setCheck2(!check2)
        console.log(check2)
     }

    const today=props.today
    return (
        <>
            <Order today={today}  check={check}  check2={check1} check3={check2}  />
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                    <li className="page-item disabled">
                        <button>Previous</button>
                    </li>
                    <li className="page-item"><button  onClick={()=>PaginationOne()}>1</button></li>
                    <li className="page-item"><button onClick={()=>PaginationTwo()}>2</button></li>
                    <li className="page-item"><button onClick={()=>PaginationTherr()}>3</button></li>
                    <li className="page-item">
                        <button>Next</button>
                    </li>
                </ul>
            </nav>

        </>
    )
}
export default Pagination