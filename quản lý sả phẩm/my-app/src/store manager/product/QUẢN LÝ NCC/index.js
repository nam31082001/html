import React, { useState } from "react";
import '../QUẢN LÝ NCC/style.css'

const Quan_Ly_NCC = (props) => {
   const data = props.data
   const elete = props.delete
   const [checkItem, setCheckItem] = useState();
   const [is, setIs] = useState(true)
   const [search, setSearch] = useState('')



   const onclickDelete = (job) => {
      elete(job)
   }



   const ItemEdit = (job) => {
      setCheckItem(job);
      let isEmptyObj = Object.keys(checkItem).length === 0;
      setIs(isEmptyObj);
      if (!is && checkItem.id === job.id) {
         let arrCopy = [...data];
         let index = arrCopy.findIndex((item) => item.id === job.id)
         arrCopy[index].name = checkItem.name;
         arrCopy[index].product = checkItem.product;
         arrCopy[index].phone = checkItem.phone;
         arrCopy[index].email = checkItem.email;
         setCheckItem('')
         return
      }
   }

   const onChangeName = (e) => {
      let checkCopy = { ...checkItem };
      checkCopy.name = e.target.value;
      setCheckItem(checkCopy)
   }
   const onChangeProduct = (e) => {
      let checkCopy = { ...checkItem };
      checkCopy.product = e.target.value;
      setCheckItem(checkCopy)
   }
   const onChangePhone = (e) => {
      let checkCopy = { ...checkItem };
      checkCopy.phone = e.target.value;
      setCheckItem(checkCopy)
   }
   const onChangeEmail = (e) => {
      let checkCopy = { ...checkItem };
      checkCopy.email = e.target.value;
      setCheckItem(checkCopy)
   }


   return (
      <div className="Quan_Ly_NCC">
         <div className="quan_ly">
            <p> <label>Tìm Kiếm Nhà cung Cấp:</label><input
               type="text"
               placeholder="Search..."
               onChange={(event) => { setSearch(event.target.value) }}
            /></p>
            <table>
               <tr>
                  <th>STT</th>
                  <th>Tên Công Ty</th>
                  <th>Tên sản Phẩm</th>
                  <th>Số Điện Thoại</th>
                  <th>Email</th>
                  <th>Edit</th>
               </tr>
               {data.filter((item) => {

                  if (search === '') {
                     return item
                  } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                     return item
                  }
               }).map((item, index) => {
                  return (
                     <tr>
                        {is ? <>
                           <td>{item.id}</td>
                           <td>{item.name}</td>
                           <td>{item.product}</td>
                           <td>{item.phone}</td>
                           <td>{item.email}</td>
                           <td>
                              <button onClick={() => onclickDelete(item)}>Xóa</button>
                              <button onClick={() => ItemEdit(item)}>Sửa</button>
                              <button>Xem Chi Tiết</button>
                           </td>

                        </> :
                           <>
                              {item.id === checkItem.id ?
                                 <>
                                    <td>{item.id}</td>
                                    <td><input value={checkItem.name} onChange={(e) => onChangeName(e)} /></td>
                                    <td><input value={checkItem.product} onChange={(e) => onChangeProduct(e)} /></td>
                                    <td><input value={checkItem.phone} onChange={(e) => onChangePhone(e)} /></td>
                                    <td><input value={checkItem.email} onChange={(e) => onChangeEmail(e)} /></td>
                                    <td>
                                       <button onClick={() => onclickDelete(item)}>Xóa </button>
                                       <button onClick={() => ItemEdit(item)}>
                                          {is === false && checkItem.id === item.id ?
                                             'Lưu' : 'Sửa'}
                                       </button>
                                       <button>Xem Chi Tiết</button>
                                    </td>


                                 </> :
                                 <>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.product}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.email}</td>
                                    <td>
                                       <button onClick={() => onclickDelete(item)}>Xóa</button>
                                       <button onClick={() => ItemEdit(item)}>Sửa</button>
                                       <button>Xem Chi Tiết</button>
                                    </td></>

                              }

                           </>

                        }

                     </tr>
                  )
               })}
            </table>
            <p> <button>Xem Tất Cả</button></p>
         </div>
      </div >
   )
}

export default Quan_Ly_NCC