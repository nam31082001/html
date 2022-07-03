import React from 'react';


class TodoApp extends React.Component{
  constructor(props){
    super(props)
    this.state={
        data:['5.30 - Dậy vệ sinh cá nhân '],
        DataInput:''
      
    }
    
  }

    onChangeInput=(e)=>{
        this.setState({
            DataInput:e.target.value
        })
    }
    onClickButton=()=>{
        if(this.state.DataInput === '') return;
        let item=this.state.DataInput
        this.setState({
            data: [...this.state.data, item],
            DataInput:''
        })
    
    }
    render(){
        let {data}=this.state;
        return(
            <>
            <input
                 type="text"
                 onChange={(e)=>this.onChangeInput(e)} 
                 value={this.state.DataInput}           
            />
            <button onClick={()=>this.onClickButton()}>Add</button>
            <div>
                {/* <h1>Danh sách công việc</h1> */}
                {data.map((item,index)=>{
                    return(
                        <>
                           <div key={item.id}>
                             {index+1} - {item}
                           </div>
                        
                        </>
                    )
                })}
            </div>
            
            
            
            </>

        )
    }
}
export default TodoApp
