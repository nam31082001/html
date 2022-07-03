import React from "react";

let count = 1;
class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      check: {},
    };
  }

  onChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  onChangePhone = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };

  onClickButton = () => {
    if (
      this.state.name === "" ||
      this.state.phone === "" ||
      this.state.email === ""
    )
      return;
    this.props.add({
      id: count,
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
    });
    this.setState({
      name: "",
      phone: "",
      email: "",
    });
    count++;
    console.log(this.props.data);
  };

  delete = (job) => {
    this.props.id(job);
  };

  edit = (job) => {
   let { check } = this.state;
   let {data}=this.props;
   let isEmptyObj = Object.keys(check).length === 0;
   if(isEmptyObj ===false && check.id===job.id){
      let dataCopy=[...data];
      let index = dataCopy.findIndex((item)=>item.id===job.id)
      dataCopy[index].name=check.name;
      dataCopy[index].phone=check.phone;
      dataCopy[index].email=check.email;
      this.setState({
        data: dataCopy,
        check: "",
    });
    return
   }
    this.setState({
      check: job,
    });
  };
  nameNew=(e)=>{
      let checkCopy={...this.state.check}
      checkCopy.name=e.target.value;
      this.setState({
        check:checkCopy
      })
  }
  phoneNew=(e)=>{
    let checkCopy={...this.state.check}
    checkCopy.phone=e.target.value;
    this.setState({
      check:checkCopy
    })
}
emailNew=(e)=>{
    let checkCopy={...this.state.check}
    checkCopy.email=e.target.value;
    this.setState({
      check:checkCopy
    })
}

  render() {
    let { data } = this.props;
    let { check } = this.state;
    let isEmptyObj = Object.keys(check).length === 0;

    return (
      <>
      <label>Nhập tên</label>
        <input
          value={this.state.name}
          type="text"
          onChange={(e) => this.onChangeName(e)}
        />
      <label>Nhập Số điện thoại</label>

        <input
          type="text"
          onChange={(e) => this.onChangePhone(e)}
          value={this.state.phone}
        />
      <label>Nhập Email</label>

        <input
          type="text"
          onChange={(e) => this.onChangeEmail(e)}
          value={this.state.email}
        /><br/>

        <button onClick={() => this.onClickButton()}> Add</button>
        <table>
          <tr>
            <td>Name</td>
            <td>Phone</td>
            <td>Email</td>
            <td>Edit</td>
          </tr>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                {isEmptyObj === true ? (
                  <>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                  </>
                ) : (
                  <>
                    {check.id === item.id ? (
                      <>
                        <td>
                          {" "}
                          <input value={check.name} onChange={(e)=>this.nameNew(e)} />
                        </td>
                        <td>
                          {" "}
                          <input value={check.phone} onChange={(e)=>this.phoneNew(e)} />
                        </td>
                        <td>
                          {" "}
                          <input value={check.email} onChange={(e)=>this.emailNew(e)} />
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                      </>
                    )}
                  </>
                )}

                <td>
                  <button onClick={() => this.edit(item)}>
                    {isEmptyObj === false && check.id === item.id
                      ? "Save"
                      : "Edit"}
                  </button>
                  <button onClick={() => this.delete(item)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </table>
      </>
    );
  }
}
export default Add;
