import React from 'react';
class Calculator extends React.Component{
    state={
        number1:'0',
        number2:'0'
    }
    InputNumber11=()=>{
        this.setState({
            
            number1:''
        })
    }
    InputNumber12=()=>{
        this.setState({
            
            number2:''
        })
    }
    InputNumber1=(event)=>{
        this.setState({
            
            number1:event.target.value
        })
        
    }
  
    InputNumber2=(event)=>{
        this.setState({
            number2:event.target.value
        })
    }
    buttonClickCong=()=>{
        alert(parseInt(this.state.number1)+parseInt(this.state.number2))
        
    }
    buttonClickTru=()=>{
        alert(parseInt(this.state.number1)-parseInt(this.state.number2))
        
    }
    buttonClickNhan=()=>{
        alert(parseInt(this.state.number1)*parseInt(this.state.number2))
        
    }
    buttonClickChia=()=>{
        alert(parseInt(this.state.number1)/parseInt(this.state.number2))
        
    }
     
   render(){
    return(
        <>
        <h1>Máy Tính Đơn Giản</h1>
            <input
            type="text"
            value={this.state.number1}
            onChange={(event)=>this.InputNumber1(event)}
            onClick={()=>this.InputNumber11()}
            /><br/>
            <input
            type="text"
            value={this.state.number2}
            onChange={(event)=>this.InputNumber2(event)}
            onClick={()=>this.InputNumber12()}
            /><br/>
            <button
            onClick={()=>this.buttonClickCong()}
            > +</button>
              <button
            onClick={()=>this.buttonClickTru()}
            > -</button>
              <button
            onClick={()=>this.buttonClickNhan()}
            > *</button>
              <button
            onClick={()=>this.buttonClickChia()}
            > /</button>
        </>
    )
   }
}
export default Calculator