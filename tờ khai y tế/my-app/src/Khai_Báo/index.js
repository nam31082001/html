/* eslint-disable react/jsx-no-duplicate-props */
import { Field, Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import '../Khai_Báo/style.css'





const Khai_Bao = () => {
    const [lange, setlange] = useState(true);
    const buttonVN = () => {
        setlange(true)
    }
    const buttonEN = () => {
        setlange(false)
    }
    let radom =  Math.floor(Math.random() * 100000 + 1);
    const table = [
        { id: "1", title: "Người bị và nghi ngờ mắc", title1: 'People who have and are suspected of having' },
        { id: "2", title: "Người từ nước mắc bệnh covit", title1: 'People from countries infected with Covid' },
        { id: "3", title: "Người có biểu hiện", title1: 'Man with expression' },
    ]

    return (
        <Formik
            initialValues={{
                name: "",
                number: "",
                year: "",
                quoc_tich: "",
                tinh: "",
                huyen: "",
                xa: "",
                so_nha: "",
                phone: "",
                email: "",
                radio: "",
                radio1: "",
                radio2: "",
                capcha: "",


            }}
            validationSchema={Yup.object({

                name: Yup.string().required("(*)"),
                number: Yup.string().required("(*)"),
                year: Yup.number().required("(*)").min(1990, "(*)"),
                quoc_tich: Yup.string().required("(*)"),
                tinh: Yup.string().required("(*)"),
                huyen: Yup.string().required("(*)"),
                xa: Yup.string().required("(*)"),
                so_nha: Yup.number().required("*").min(1, "(*)").max(200, "(*)"),
                phone: Yup.string().required("(*)").matches(/((09|03|07|08|05)+([0-9]{8})\b)/g, "(*)"),
                email: Yup.string().required("(*)").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "(*)"),
                radio: Yup.string().required("(*)"),
                radio1: Yup.string().required("(*)"),
                radio2: Yup.string().required("(*)"),
                capcha: Yup.string().required("(*)"),

            })}
            onSubmit={(values, { resetForm }) => {

                alert('bạn đã khai báo thành công');
                resetForm({ values: "" })

            }}
        >

            {(formik) => (
                <div className="Khai_bao_1">
                    <p>{lange ? 'Chọn Ngôn ngữ để khai báo' : 'Select Declarative Language'}</p>
                    <button onClick={() => { buttonVN() }}>VN</button>
                    <button onClick={() => { buttonEN() }}>EN</button>
                    <button className="cap_nhap">{lange ? 'Cập Nhập Tờ Khai' : 'Update Declaration'}</button>
                    <p>{lange ? 'Khai Hộ' : 'Declare for'}</p>
                    <form>
                        <div className="form1">
                            <label>{lange ? 'Họ Và tên (ghi in hoa)' : 'First and last name (print in capitals)'}{formik.errors.name &&
                                <span style={{ color: 'red' }}>{formik.errors.name} </span>
                            }</label>

                            <label> {lange ? 'Số Hộ chiếu CMND/CCCD ' : 'Passport Number ID/CCCD'} {formik.errors.number &&
                                <span style={{ color: 'red' }}>{formik.errors.number} </span>
                            }</label>

                            <br />
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                            />

                            <input
                                type="text"
                                name="number"
                                id="number"
                                value={formik.values.number}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="form2">
                            <label>{lange ? 'Năm sinh' : 'Year of Birth'}  {formik.errors.year &&
                                <span style={{ color: 'red' }}>{formik.errors.year} </span>
                            }</label>
                            <label>{lange ? 'Giới Tính' : 'Sex'} {formik.errors.radio &&
                                <span style={{ color: 'red' }}>{formik.errors.radio} </span>
                            }</label>
                            <label>{lange ? 'Quốc Tịch' : 'Nationality'} {formik.errors.quoc_tich &&
                                <span style={{ color: 'red' }}>{formik.errors.quoc_tich} </span>
                            }</label>

                            <input
                                type="text"
                                name="year"
                                id="year"
                                value={formik.values.year}
                                onChange={formik.handleChange}
                            />



                            <Field
                                type="radio"

                                name="radio"
                                value="nam"
                            /><label>{lange ? 'Nam' : 'Boy'}</label>

                            <Field
                                type="radio"
                                name="radio"
                                value="nữ"
                            /><label>{lange ? 'Nữ' : 'girl'}</label>
                            <Field
                                type="radio"
                                name="radio"
                                value="khác"
                            /><label>{lange ? 'Khác' : 'Other'}</label>


                            <input
                                type="text"
                                id="quoc_tich"
                                name="quoc_tich"
                                value={formik.values.quoc_tich}
                                onChange={formik.handleChange}
                            />
                        </div>

                        <p>{lange ? 'Địa chỉ liên lạc' : 'Contact address'}</p>
                        <div className="form3">
                            <label>{lange ? 'Tỉnh Thành' : 'City'} {formik.errors.tinh &&
                                <span style={{ color: 'red' }}>{formik.errors.tinh} </span>
                            }</label>
                            <label>{lange ? 'Quận \ Huyện' : 'District'} {formik.errors.huyen &&
                                <span style={{ color: 'red' }}>{formik.errors.huyen} </span>
                            }</label>
                            <label>{lange ? 'Phường Xã' : 'Wards'}{formik.errors.xa &&
                                <span style={{ color: 'red' }}>{formik.errors.xa} </span>
                            }</label><br />
                            <input
                                type="text"
                                id="tinh"
                                name="tinh"
                                value={formik.values.tinh}
                                onChange={formik.handleChange}
                            />
                            <input
                                type="text"
                                id="huyen"
                                name="huyen"
                                value={formik.values.huyen}
                                onChange={formik.handleChange}
                            />
                            <input
                                type="text"
                                id="xa"
                                name="xa"
                                value={formik.values.xa}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="form4">
                            <label>{lange ? 'Số Nhà' : 'Number Houre'}{formik.errors.so_nha &&
                                <span style={{ color: 'red' }}>{formik.errors.so_nha} </span>
                            }</label>
                            <label>{lange ? 'Điện THoại ' : 'Phone Number'}{formik.errors.phone &&
                                <span style={{ color: 'red' }}>{formik.errors.phone} </span>
                            }</label>
                            <label>Email{formik.errors.email &&
                                <span style={{ color: 'red' }}>{formik.errors.email} </span>
                            }</label><br />

                            <input
                                type="text"
                                id="so_nha"
                                name="so_nha"
                                value={formik.values.so_nha}
                                onChange={formik.handleChange}
                            />


                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                            />


                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            /><br />
                        </div>

                        <div className="form5">
                            <tr>
                                <td className="td5">

                                    <label>{lange ? 'Trong vòng 14 ngày có đi qua vùng lãnh thổ' : 'Within 14 days have passed through the territory'} {formik.errors.radio1 &&
                                        <span style={{ color: 'red' }}>{formik.errors.radio1} </span>
                                    }</label>

                                </td>
                                <td>
                                    <Field
                                        type="radio"
                                        name="radio1"
                                        value="Không"
                                    /><label>{lange ? 'Không' : 'NO'}</label>
                                    <Field
                                        type="radio"
                                        name="radio1"
                                        value="Có"
                                    /><label>{lange ? 'Có' : 'Yes'}</label><br />
                                </td>

                            </tr>
                            <tr>
                                <td className="td5">
                                    <label>{lange ? 'Trong vòng 14 ngày có it nhất 1 biểu hiện ho sốt dau họng không' : 'Within 14 days, have at least 1 symptoms of cough, fever, sore throat?'}{formik.errors.radio2 &&
                                        <span style={{ color: 'red' }}>{formik.errors.radio2} </span>
                                    }</label>
                                </td>
                                <td>
                                    <Field
                                        type="radio"
                                        name="radio2"
                                        value="Không"
                                    /><label>{lange ? 'Không' : 'NO'}</label>
                                    <Field
                                        type="radio"
                                        name="radio2"
                                        value="Có"
                                    /><label>{lange ? 'Có' : 'Yes'}</label>
                                </td>
                            </tr>
                        </div>
                        <label>Trong 14 ngày anh chị tiếp xúc với</label>
                        <table className="form6">
                            <tr>
                                <th></th>
                                <th>{lange ? 'Có' : 'Yes'}</th>
                                <th>{lange ? 'Không' : 'NO'}</th>
                            </tr>
                            {table.map((item, index) => {
                                return (
                                    <tbody>
                                        <tr>
                                            <td className="td6">{lange ? <>{item.title}</> : <>{item.title1}</>}</td>

                                            <td><Field
                                                type="radio"
                                                name={`check${item.id}`}
                                                value="Có"
                                            />
                                            </td>
                                            <td><Field
                                                type="radio"
                                                name={`check${item.id}`}
                                                value="Không"
                                            /></td>
                                        </tr>
                                    </tbody>
                                )

                            })}
                        </table>
                        <span>{radom}
                        </span>
                        {formik.errors.capcha && <span>

                            {formik.errors.capcha}</span>}
                        <input
                            type="text"
                            name="capcha"
                            id="capcha"
                            value={formik.values.capcha}
                            onChange={formik.handleChange}
                        /><br />
                        <button
                            type="submit"
                            onClick={formik.handleSubmit}
                            className="btn btn-primary"
                        >
                            Submit
                        </button>

                    </form>

                </div>
            )}


        </Formik>




    )
}
export default Khai_Bao











