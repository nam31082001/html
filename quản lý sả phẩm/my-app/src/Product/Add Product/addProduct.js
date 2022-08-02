import { Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import '../Add Product/style.css'
const AddProduct = ({InputAddProduct}) => {
    const [arrIMG, setArrIMG] = useState('')
    useEffect(() => {
        return () => {
            URL.revokeObjectURL(arrIMG.preview)
        }
    }, [arrIMG])
    
    const ImgUrl = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file)
        setArrIMG(file)
    }
    return (
        <div className='AddProduct'>
            <h2>Thêm Sản Phẩm</h2>
            <Formik
                initialValues={{
                    name: "",
                    idName: "",
                    Price: "",
                    Number: "",

                }}
                validationSchema={Yup.object({
                    name: Yup.string().required("(*)"),
                    idName: Yup.string().required("(*)"),
                    Price: Yup.string().required("(*)").matches(/^\d+$/, "(*)"),
                    Number: Yup.string().required("(*)").matches(/^\d+$/, "(*)"),


                })}
                onSubmit={(values) => {
                    alert('Thêm Thành công rồi');
                    InputAddProduct(values)
                    
                }}
            >
                {(formik) => (
                    <form>
                        <label>Tên sản Phẩm</label>
                        {formik.errors.name &&
                            <span style={{ color: 'red' }}>{formik.errors.name} </span>}<br /><br />
                        <input
                            type="text"
                            name="name"
                            placeholder="Tên Sản Phẩm"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        /><br /><br />
                        <label>Mã sản Phẩm</label>
                        {formik.errors.idName &&
                            <span style={{ color: 'red' }}>{formik.errors.idName} </span>}<br /><br />
                        <input
                            type="text"
                            name="idName"
                            placeholder="Mã Sản Phẩm"
                            value={formik.values.idName}
                            onChange={formik.handleChange}
                        /><br /><br />
                        <label>Giá sản Phẩm</label>
                        {formik.errors.Price &&
                            <span style={{ color: 'red' }}>{formik.errors.Price} </span>}<br /><br />
                        <input
                            type="text"
                            name="Price"
                            placeholder="Giá Bán"
                            value={formik.values.Price}
                            onChange={formik.handleChange}
                        /><br /><br />
                        <label>Số Lượng Sản Phẩm</label>
                        {formik.errors.Number &&
                            <span style={{ color: 'red' }}>{formik.errors.Number} </span>}<br /><br />
                        <input
                            type="text"
                            name="Number"
                            placeholder="Số Lượng sản Phẩm"
                            value={formik.values.Number}
                            onChange={formik.handleChange}
                        /><br /><br />
                        <label>Ảnh Minh Họa</label><br /><br />
                        <input type="file"
                            onChange={(e) => ImgUrl(e)}
                        /><br /> <br />
                        <div className="divImg">
                            {arrIMG &&
                                <img
                                    src={arrIMG.preview}
                                    alt=""
                                    width={100}
                                    height={100}
                                />}
                        </div><br /><br />
                        <button
                            type="submit"
                            onClick={formik.handleSubmit}
                            className="btn btn-primary"
                        >
                            Thêm Sản Phẩm
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}
export default AddProduct