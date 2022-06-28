import React from 'react';
class StudentInfoComponent extends React.Component{
    state={
        arrStudent:[
            {id:'1',name:'Nguyễn Văn A',age:'20',address:'Hà Nội'},
            {id:'2',name:'Nguyễn Văn a',age:'21',address:'Hải Phòng'},
            {id:'3',name:'Nguyễn Văn s',age:'22',address:'Thanh Hóa'},
            {id:'4',name:'Nguyễn Văn d',age:'23',address:'Nghệ An'},
        ]
    }
   render(){
    return(
        <>
        <table>
                 <tr>
                    <td>STT</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Address</td>
                  </tr>
            
            {this.state.arrStudent.map((item,index)=>{
                return(
                    <>
                 
                    <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.address}</td>
                  </tr>
                  </>
                )
            })}

        </table>
        
        </>
    )
}
}
export default StudentInfoComponent