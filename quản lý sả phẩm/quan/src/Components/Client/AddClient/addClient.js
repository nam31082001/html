import NavTotal from "../../../NavTotal/Nav"
import { Formik } from "formik"
import * as Yup from 'yup'
import '../AddClient/addClient.css'
import axios from "axios"

const AddClient = () => {
    return (
        <>
            <NavTotal />
            <div className="Add-Client">
                <h3> Thêm Khách Hàng</h3>
                <Formik
                    initialValues={{
                        idName: "",
                        Name: "",
                        number: "",
                        passport: "",
                        birth: "",
                        email: "",
                        address: ""
                    }}
                    validationSchema={Yup.object({
                        idName: Yup.string().required("(*)"),
                        Name: Yup.string().required("(*)").min(3, "(*)").max(10, "(*)"),
                        number: Yup.string().required("(*)").matches(/((09|03|07|08|05)+([0-9]{8})\b)/g, "(*)"),
                        passport: Yup.string().required("(*)").matches(/^\d+$/, "(*)"),
                        birth: Yup.string().required("(*)"),
                        email: Yup.string().required("(*)").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "(*)"),
                        address: Yup.string().required("(*)"),


                    })}
                    onSubmit={(values) => {
                        alert('Thêm Thành công rồi');
                        let dataPostClient = {
                            idName: values.idName,
                            Name: values.Name,
                            number: values.number,
                            passport: values.passport,
                            birth: values.birth,
                            email: values.email,
                            address: values.address,
                        }
                        async function PostClient() {
                           await axios.post('http://localhost:3000/Client', dataPostClient)
                           
                        }
                        PostClient()

                    }}


                >

                    {(formik) => (
                        <from>
                            <label>Tên</label>
                            {formik.errors.Name &&
                                <span style={{ color: 'red' }}>{formik.errors.Name} </span>}<br /><br />
                            <input
                                type="text"
                                name="Name"
                                placeholder="Tên ..."
                                value={formik.values.Name}
                                onChange={formik.handleChange}
                            /><br /><br />
                            <label>Mã cá Nhân</label>
                            {formik.errors.idName &&
                                <span style={{ color: 'red' }}>{formik.errors.idName} </span>}<br /><br />
                            <input
                                type="text"
                                name="idName"
                                placeholder="idName ..."
                                value={formik.values.idName}
                                onChange={formik.handleChange}
                            /><br /><br />
                            <label>Sô Điện THoại</label>
                            {formik.errors.number &&
                                <span style={{ color: 'red' }}>{formik.errors.number} </span>}<br /><br />
                            <input
                                type="text"
                                name="number"
                                placeholder="Sô Điện THoại ..."
                                value={formik.values.number}
                                onChange={formik.handleChange}
                            /><br /><br />
                            <label>Sinh Nhật</label>
                            {formik.errors.birth &&
                                <span style={{ color: 'red' }}>{formik.errors.birth} </span>}<br /><br />
                            <input
                                type="date"
                                name="birth"
                                placeholder="Sinh Nhật ..."
                                value={formik.values.birth}
                                onChange={formik.handleChange}
                            /><br /><br />
                            <label>Số CMND</label>
                            {formik.errors.passport &&
                                <span style={{ color: 'red' }}>{formik.errors.passport} </span>}<br /><br />
                            <input
                                type="text"
                                name="passport"
                                placeholder="Số CMND ..."
                                value={formik.values.passport}
                                onChange={formik.handleChange}
                            /><br /><br />
                            <label>email</label>
                            {formik.errors.email &&
                                <span style={{ color: 'red' }}>{formik.errors.email} </span>}<br /><br />
                            <input
                                type="text"
                                name="email"
                                placeholder="email ..."
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            /><br /><br />
                            <label>Địa Chỉ</label>
                            {formik.errors.address &&
                                <span style={{ color: 'red' }}>{formik.errors.address} </span>}<br /><br />
                            <input
                                type="text"
                                name="address"
                                placeholder="Địa Chỉ ..."
                                value={formik.values.address}
                                onChange={formik.handleChange}
                            /><br /><br />
                            <button
                                type="submit"
                                onClick={formik.handleSubmit}
                                className="btn btn-primary"
                            >
                                Thêm  Sản Phẩm
                            </button>
                            <br />
                            <br />
                            <br />
                            <p>Bản quyền Cao Văn Nam</p>
                        </from>
                    )}
                </Formik>
            </div>
        </>
    )
}
export default AddClient