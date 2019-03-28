import React from 'react';
import FormComponent from './FormComponent'
class FormContainer extends React.Component{
    constructor(){
        super()
        this.state={
          firstName:"",
          lastName:"",
          isKnow:true,
          Gender:"",
          favTech:"React"
        }
        this.onHandleChange=this.onHandleChange.bind(this)
      }
      onHandleChange(event){
       const {name,value,type,checked}=event.target
       type==="checkbox"?this.setState({[name]:checked})
       :this.setState({[name]:value})
        
      }
      render() {
        
        return (
          
          <div>
          <FormComponent onChange={this.onHandleChange} data={this.state}/>
          
           <h2>your name is</h2> 
           <h4>{this.state.firstName} {this.state.lastName}</h4>
           <h2>your gender is</h2>
           <h4>{this.state.Gender}</h4>
           <h2>You are experienced in</h2>
           <h4> {this.state.favTech}</h4>
          </div>
          
        );
      }
    }

export default FormContainer