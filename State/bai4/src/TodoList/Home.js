import React from "react";
import Add from "./addHome";
import '../TodoList/Home.css'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      
    }
  }
  add=(job)=>{
    this.setState({
        data:[...this.state.data,job]
    })
  }
  delete=(job)=>{
    let dataNew=this.state.data;
    dataNew=dataNew.filter((item)=>item.id !== job.id);
    this.setState({
        data:dataNew
    })
  }
 render(){
    return(
      <Add add={this.add} data={this.state.data}  id={this.delete} />
    )
 }
}
export default TodoList;
