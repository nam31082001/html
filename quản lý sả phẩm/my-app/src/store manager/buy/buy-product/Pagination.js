import React from "react"
const Pagtinate = ({ pagtinate, pageNumbers }) => {
    return (
        <nav>
            <p
                style={{
                    textAlign: 'right'
                }}>
                {pageNumbers.map(number => {
                    return (
                        <button onClick={() => pagtinate(number)}>{number}</button>
                    )
                })}

            </p>
        </nav>

    )
}
export default Pagtinate