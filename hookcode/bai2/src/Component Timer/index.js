import { useState,useLayoutEffect } from 'react'


const Time = () => {
    const [time,setTime]=useState('10')
    useLayoutEffect(() => {
      let times=  setTimeout(() => {
          setTime(time - 1);
        }, 1000);

        if(time===0){
         clearInterval(times)
        }
      },[time]);

    return (
        <div>Count down form:{time}</div>
    )
}
export default Time