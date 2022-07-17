
import { useState } from 'react'

const CarColor = () => {
    const [name, setName] = useState('Volvo');
    const [color, setColor] = useState('Red');

    const SelectionCar = (e) => {
        setName(e.target.value)
    }
    const ColorCar = (e) => {
        setColor(e.target.value)
    }

    return (
        <div>
            <h1> Component Car Selection</h1>
            <span>Select a car  :</span>  <select name="cars" id="cars" onChange={(e) => SelectionCar(e)} defaultValue={name}>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select><br />

            <span>Color You Car :</span>  <select name="cars" id="cars" defaultValue={color} onChange={(e) => ColorCar(e)}>
                <option value="red">Red</option>
                <option value="Black">Black</option>
                <option value="Pink">Pink</option>
                <option value="Red-Pink">Red-Pink</option>
            </select>

            <h2>{name}-{color}</h2>





        </div>
    )
}
export default CarColor