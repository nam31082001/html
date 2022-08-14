import { Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import '../AddSupplider/addSupplier.css'

const AddSupplier = ({PostSupplier}) => {
    return (
        <div className="AddSupplier">
            <div className='formik-Add_Supplier'>
                <Formik
                    initialValues={{
                        name: "",
                        product: "",
                        phone: "",
                        email: "",
                        city: ""
                    }}
                    validationSchema={Yup.object({

                        name: Yup.string().required("(*)"),
                        product: Yup.string().required("(*)"),
                        city: Yup.string().required("(*)"),
                        phone: Yup.string().required("(*)").matches(/((09|03|07|08|05)+([0-9]{8})\b)/g, "(*)"),
                        email: Yup.string().required("(*)").matches(/^[\w-/.]+@([\w-]+\.)+[\w-]{2,4}$/, "(*)"),
                    })}
                    onSubmit={(values) => {
                        alert('Thêm Thành công rồi');
                        PostSupplier(values)
                    }}

                >
                    {(formik) => (
                        <form>
                            <label>Tên cônng ty</label>
                            {formik.errors.name &&
                                <span style={{ color: 'red' }}>{formik.errors.name} </span>}<br /><br />
                            <input
                                type="text"
                                name="name"
                                placeholder="Tên Công Ty"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                            /><br /><br />
                            <label>Tên Sản Phẩm</label>
                            {formik.errors.product &&
                                <span style={{ color: 'red' }}>{formik.errors.product}</span>}<br /><br />
                            <input
                                type="text"
                                name="product"
                                placeholder="Tên Nhà Cung Cấp"
                                value={formik.values.product}
                                onChange={formik.handleChange}
                            /><br /><br />
                            <label>Số điện thoại</label>
                            {formik.errors.phone &&
                                <span style={{ color: 'red' }}>{formik.errors.phone}</span>}<br /><br />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Số Điện Thoại"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                            /><br /><br />
                            <label>Email</label>
                            {formik.errors.email &&
                                <span style={{ color: 'red' }}>{formik.errors.email}</span>}
                            <br /><br />
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            /><br /><br />
                            <label>Địa Chỉ</label>
                            {formik.errors.city &&
                                <span style={{ color: 'red' }}>{formik.errors.city}</span>}<br /><br />
                            <input
                                type="text"
                                name="city"
                                placeholder="Địa Chỉ"
                                value={formik.values.city}
                                onChange={formik.handleChange}
                            /><br /><br />
                            <br />
                            <hr />
                            <button
                                type="submit"
                                onClick={formik.handleSubmit}
                                className="btn btn-primary"
                            >
                                Thêm Công Ty
                            </button>
                            <br />
                            <br />
                            <br />
                            <p>Bản quyền Cao Văn Nam</p>

                        </form>
                    )}
                </Formik>
            </div>

        </div>
    )
}
export default AddSupplier







