import NavTotal from "../../../NavTotal/Nav"
import { Formik } from "formik"
import * as Yup from 'yup'
import '../AddProduct/addProduct.css'

const AddProduct = ({postApiProduct}) => {
    return (
        <>
            <NavTotal />
            <div className="add-Product">
                <h3>Thêm Sản Phẩm </h3>
                <Formik
                initialValues={{
                    Name:"",
                    price:"",
                    idName:""
                }}
                validationSchema={Yup.object({
                    Name:Yup.string().required("(*)"),
                    price:Yup.string().required("(*)"),
                    idName:Yup.string().required("(*)"),
                })}
                onSubmit={(values) => {
                    alert('Thêm Thành công rồi');
                    let dataPostProduct={
                        Name:values.Name,
                        idName:values.idName,
                        price:values.price,
                        number:1
                    }
                    postApiProduct(dataPostProduct)
                }}
                >

                    {(formik) => (
                        <form>
                            <label>Tên Sẩn Phẩm</label>
                            {formik.errors.Name &&
                                <span style={{ color: 'red' }}>{formik.errors.Name} </span>}<br /><br />
                            <input
                                type="text"
                                name="Name"
                                placeholder="Tên Sản Phẩm..."
                                value={formik.values.Name}
                                onChange={formik.handleChange}
                            /><br/><br/>
                             <label>Mã sản Phẩm</label>
                             {formik.errors.price &&
                                <span style={{ color: 'red' }}>{formik.errors.price} </span>}<br /><br />
                            <input
                                type="text"
                                name="idName"
                                placeholder="Tên Sản Phẩm..."
                                value={formik.values.idName}
                                onChange={formik.handleChange}
                            /><br/><br/>
                            <label>Giá sản Phẩm</label>
                            {formik.errors.idName &&
                                <span style={{ color: 'red' }}>{formik.errors.idName} </span>}<br /><br />
                            <input
                                type="text"
                                name="price"
                                placeholder="Tên Sản Phẩm..."
                                value={formik.values.price}
                                onChange={formik.handleChange}
                            /><br/><br/>
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
                           
                        </form>
                    )}
                </Formik>
            </div>

        </>
    )
}
export default AddProduct