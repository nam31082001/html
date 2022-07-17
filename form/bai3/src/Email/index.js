import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";




const Email = () => {
    const [previewImage, setPreviewImage] = useState("")
    const formik = useFormik({
        initialValues: {
            name: "",
            number: "",
            description: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Chưa Nhập gì").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Nhập Đúng mẫu vào abc@gmail.com"),
            number: Yup.string().required("Chưa Nhập gì"),
            description: Yup.string().required("Chưa Nhập gì"),

        }),
        onSubmit: (values) => {
            alert('hoan hô')


        },

    })

    const [formState, setFormState] = useState({
        name: "",
        age: "",
        description: ""
    })
    const [check, setCheck] = useState(true)

    const handleOnchange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        if (formState.description === '') {
            setCheck(false)
        }
    }
    const handleOnUpload = (e) => {
        setPreviewImage(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <lable>TO</lable><br />
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
            <lable>Title</lable><br />
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
            <lable>Messges</lable><br />
            <textarea name='description' id="description"  type="text"  value={formik.values.description} onChange={formik.handleChange} />
            {formik.errors.description &&
                <p style={{ color: 'red' }}>{formik.errors.description} </p>
            }
            <br />
            <input type="file" name="upload" onChange={(e) => handleOnUpload(e)} />
            <img src={previewImage} alt="" />
            <button type="submit">Submit</button>
        </form>
    )

}
export default Email