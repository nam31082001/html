
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState} from "react";

const Book = () => {
    const [arr, setArr] = useState([])
    const [check, setCheck] = useState()
    const [is, setIs] = useState(true)

    const formik = useFormik({
        initialValues: {
            name: "",
            number: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Chưa Nhập gì"),
            number: Yup.string().required("Chưa Nhập gì")
        }),
        onSubmit: (values) => {
            let data = formik.values;
            var id=Math.floor(Math.random() * 100) + 1;
            let dataNew={...data,id};
            let arrNew = [...arr, dataNew]
            setArr(arrNew)
        },

    })
    const Delete = (job) => {
        let dataNew = [...arr]
        dataNew = dataNew.filter(item => job.id !== item.id)
        setArr(dataNew);
    }

    const Edit = (job) => {
        setCheck(job);
        console.log(check)
        let isEmptyObj = Object.keys(check).length === 0;
        setIs(isEmptyObj);
        if(!is && check.id=== job.id){
            let arrCopy=[...arr];
            let index=arrCopy.findIndex((item)=>item.id===job.id)
            arrCopy[index].name=check.name;
            arrCopy[index].number=check.number;
            setArr(arrCopy);
            setCheck('')
            return
        }

    }
  
    const onChangeEditNumber=(e)=>{
        let checkCopy={...check};
        checkCopy.number=e.target.value;
        setCheck(checkCopy)
    }
      const onChangeEditName=(e)=>{
        let checkCopy={...check};
        checkCopy.name=e.target.value;
        setCheck(checkCopy)
    }
    
    
    return (

        <>

            <form onSubmit={formik.handleSubmit}>
                <lable>Tiêu đề</lable><br />
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}

                /><br />
                {formik.errors.name &&
                    <p style={{ color: 'red' }}>{formik.errors.name} </p>
                }
                <lable>Số Lượng</lable><br />
                <input
                    type="text"
                    id="number"
                    name="number"
                    value={formik.values.number}
                    onChange={formik.handleChange}

                /><br />
                {formik.errors.number &&
                    <p style={{ color: 'red' }}>{formik.errors.number} </p>
                }
                <button type="submit">Submit</button>
            </form>


            <table>
                <tr>
                    <th>TiTle</th>
                    <th>Number</th>
                    <th>Edit</th>
                </tr>
                {arr.map((item, index) => {
                    return (
                        <tr key={index}>

                            {is===true ?
                                <>

                                    <td>{item.name}</td>
                                    <td>{item.number}</td>
                                    <td>
                                        <button onClick={() => Edit(item)}>Edit</button>
                                        <button onClick={() => Delete(item)}>Delete</button>

                                    </td>

                                </> : <>
                                    {item.id === check.id ?
                                        <>
                                            <td><input value={check.name} onChange={(e) => onChangeEditName(e)} /></td>
                                            <td><input value={check.number}  onChange={(e) => onChangeEditNumber(e)} /></td>
                                            <td>
                                                <button onClick={() => Edit(item)}>
                                                    {is === false && check.id === item.id ?
                                                        'Save' : 'Edit'}
                                                </button>
                                                <button onClick={() => Delete(item)}>Delete</button>

                                            </td>
                                        </> :
                                        <>
                                            <td>{item.name}</td>
                                            <td>{item.number}</td>
                                            <td>
                                                <button onClick={() => Edit(item)}>Edit</button>
                                                <button onClick={() => Delete(item)}>Delete</button>

                                            </td>
                                        </>

                                    }
                                </>}


                        </tr>
                    )
                })}



            </table>


        </>
    )
}
export default Book