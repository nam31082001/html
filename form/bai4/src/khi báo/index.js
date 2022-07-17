import { useFormik } from "formik";
import * as Yup from "yup";


const Form = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            number: "",
            year: "",
            quoc_tich: "",
            cong_ty: "",
            Bo_phan: "",
            tinh: "",
            huyen: "",
            phuong: "",
            so_nha: "",
            numberPhone: "",
            email: "",
            textarea: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("chưa nhập gì nhé"),
            number: Yup.string().required("Chưa Nhập Gì nhé").max(1900, 'Bạn sống được lâu thế ư'),
            year: Yup.string().required("Chưa Nhập Gì nhé").min(4, "nhập lại nha"),
            quoc_tich: Yup.string().required("chưa nhập gì nhé"),
            cong_ty: Yup.string().required("chưa nhập gì nhé"),
            Bo_phan: Yup.string().required("chưa nhập gì nhé"),
            tinh: Yup.string().required("chưa nhập gì nhé"),
            huyen: Yup.string().required("chưa nhập gì nhé"),
            phuong: Yup.string().required("chưa nhập gì nhé"),
            so_nha: Yup.number().required("chưa nhập gì nhé"),
            numberPhone: Yup.string().required("Chưa Nhập Gì nhé").matches(/((09|03|07|08|05)+([0-9]{8})\b)/g, "Nhập kiểu số nha"),
            email: Yup.string().required("Chưa Nhập Gì nhé").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Nhập Đúng mẫu vào abc@gmail.com"),
            textarea: Yup.string().required("Chưa Nhập Gì nhé")
        }),
        onSubmit: (values) => {
            alert('bạn đã khai báo thành công')
        }

    })
    return (
        <>
            <h1>Tờ Khai y tế</h1>
            <form onSubmit={formik.handleSubmit}>
                <label>Họ Tên </label><br />
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
                <label>Số hộ chiếu /CMND </label><br />
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
                <label>Năm Sinh </label><br />
                <input
                    type="text"
                    id="year"
                    name="year"
                    value={formik.values.year}
                    onChange={formik.handleChange}
                /><br />
                {formik.errors.year &&
                    <p style={{ color: 'red' }}>{formik.errors.year} </p>
                }
                <label>Giới Tính</label>
                <input type="radio" name="id" />Nam
                <input type="radio" name="id" />Nữ <br />
                <label>Quốc Tịch</label><br />
                <input
                    type="text"
                    id="quoc_tich"
                    name="quoc_tich"
                    value={formik.values.quoc_tich}
                    onChange={formik.handleChange}
                /><br />
                {formik.errors.quoc_tich &&
                    <p style={{ color: 'red' }}>{formik.errors.quoc_tich} </p>
                }
                <label>Công ty làm việc</label><br />
                <input
                    type="text"
                    id="cong_ty"
                    name="cong_ty"
                    value={formik.values.cong_ty}
                    onChange={formik.handleChange}
                /><br />
                {formik.errors.cong_ty &&
                    <p style={{ color: 'red' }}>{formik.errors.cong_ty} </p>
                }
                <label>Bộ Phận làm việc</label><br />
                <input
                    type="text"
                    id="Bo_phan"
                    name="Bo_phan"
                    value={formik.values.Bo_phan}
                    onChange={formik.handleChange}
                /><br />
                {formik.errors.Bo_phan &&
                    <p style={{ color: 'red' }}>{formik.errors.Bo_phan} </p>
                }
                <span>có thể bảo hiêm y tết</span>   <input type='checkbox' />
                <h2>Địa chỉ liên lạc tại việt nam</h2>
                <label>Tỉnh Thành</label><br />
                <input
                    type="text"
                    id="tinh"
                    name="tinh"
                    value={formik.values.tinh}
                    onChange={formik.handleChange}
                /><br />
                {formik.errors.tinh &&
                    <p style={{ color: 'red' }}>{formik.errors.tinh} </p>
                }
                <label>Quận/Huyện</label><br />
                <input
                    type="text"
                    id="huyen"
                    name="huyen"
                    value={formik.values.huyen}
                    onChange={formik.handleChange}
                /><br />
                {formik.errors.huyen &&
                    <p style={{ color: 'red' }}>{formik.errors.huyen} </p>
                }
                <label>Phường Xã</label><br />
                <input
                    type="text"
                    id="phuong"
                    name="phuong"
                    value={formik.values.phuong}
                    onChange={formik.handleChange}
                /><br />
                {formik.errors.phuong &&
                    <p style={{ color: 'red' }}>{formik.errors.phuong} </p>
                }
                <label>Số Nhà tổ đân phố</label><br />
                <input
                    type="text"
                    id="so_nha"
                    name="so_nha"
                    value={formik.values.so_nha}
                    onChange={formik.handleChange}
                /><br />
                {formik.errors.so_nha &&
                    <p style={{ color: 'red' }}>{formik.errors.so_nha} </p>
                }
                <label>Điện Thoại</label><br />
                <input
                    type="text"
                    id="numberPhone"
                    name="numberPhone"
                    value={formik.values.numberPhone}
                    onChange={formik.handleChange}
                /><br />
                {formik.errors.numberPhone &&
                    <p style={{ color: 'red' }}>{formik.errors.numberPhone} </p>
                }
                <label>email</label><br />
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                /><br />
                {formik.errors.email &&
                    <p style={{ color: 'red' }}>{formik.errors.email} </p>
                }




                <h3>Trong 14 Ngày qua anh chị có đến quốc gia vùng lãnh thổ nào không</h3>
                <textarea
                    type="text"
                    id="textarea"
                    name="textarea"
                    value={formik.values.textarea}
                    onChange={formik.handleChange}

                /><br />
                {formik.errors.textarea &&
                    <p style={{ color: 'red' }}>{formik.errors.textarea} </p>
                }
                <h3>Trong 14 Ngày qua anh chị có biểu hiện nào sau đây không</h3>
                <input type="checkbox"/>Ho<br />
                <input type="checkbox" />Sốt<br />
                <input type="checkbox" />Khó thở<br />
                <input type="checkbox" />Dau Họng<br />
                <input type="checkbox" />Mệt mỏi<br />
                <button type="submit" >Add</button>
            </form>
        </>
    )
}
export default Form