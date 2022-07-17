
import { useFormik } from "formik";
import * as Yup from "yup";

const Form = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            number: "",
            password: "",
            confirmedPassword: ""

        },
        validationSchema: Yup.object({
            name: Yup.string().required("Chưa Nhập Gì nhé").min(8, "Bé Nhất Là kí tự nhé"),
            email: Yup.string().required("Chưa Nhập Gì nhé").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Nhập Đúng mẫu vào abc@gmail.com"),
            number: Yup.string().required("Chưa Nhập Gì nhé").matches(/((09|03|07|08|05)+([0-9]{8})\b)/g, "Nhập kiểu số nha"),
            password: Yup.string().required("Chưa Nhập Gì nhé").matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/, "Nhập từ 7 đến 19 kí tự và có 2 kí tự khác số khác nhau nha !"),
            confirmedPassword: Yup.string().required("Chưa Nhập Gì nhé").oneOf([Yup.ref("password"), null], "mật khẩu chưa giống nhau"),

        }),
        onSubmit: () => {
           alert("ahihi");
        }
    })








    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <lable>Name</lable><br />
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    placeholder="Name"
                /><br />
                {formik.errors.name &&
                    <p style={{color:'red'}}> {formik.errors.name} </p>
                }
                <lable>Email</lable><br />
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder="Email"
                /><br />
                {formik.errors.email &&
                    <p  style={{color:'red'}}> {formik.errors.email} </p>
                }
                <lable>Number</lable><br />
                <input
                    type="text"
                    id="number"
                    name="number"
                    value={formik.values.number}
                    onChange={formik.handleChange}
                    placeholder="Number"
                /><br />
                {formik.errors.number &&
                    <p  style={{color:'red'}}> {formik.errors.number} </p>
                }
                <lable>Mật Khẩu</lable><br />
                <input
                    type="text"
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder="Mật Khẩu"
                /><br />
                {formik.errors.password &&
                    <p  style={{color:'red'}}> {formik.errors.password} </p>
                }
                <lable>Nhập Lại Mật Khẩu</lable><br />
                <input
                    type="text"
                    id="confirmedPassword"
                    name="confirmedPassword"
                    value={formik.values.confirmedPassword}
                    onChange={formik.handleChange}
                    placeholder="Nhập Lại Mật Khẩu"
                /><br />
                {formik.errors.confirmedPassword &&
                    <p  style={{color:'red'}}> {formik.errors.confirmedPassword} </p>
                }
                <button type="submit">Submit</button>
            </form>


        </>
    )
}
export default Form