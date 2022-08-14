import React from "react"
const Paging = ({ paging, arrNumber }) => {
    return (
        <>
                {arrNumber.map(number => {
                    return (
                        <button onClick={() => paging(number)}>{number}</button>
                    )
                })}
        </>

    )
}
export default Paging