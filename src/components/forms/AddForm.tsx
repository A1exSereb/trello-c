import { eventNames } from 'process';
import React, { Component } from 'react';
import styled from 'styled-components';
interface AddFormProps{
  show?:boolean,
  getNewRecord?:any,
  showAdd?:any
}
const i = 0;
export default class AddForm extends Component<AddFormProps>{
  constructor(props:any){
    super(props)
    this.handlerInput = this.handlerInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClose = this.onClose.bind(this);
  }
  state = {
    inputValue:'',
    show:this.props.show
  }
  handlerInput =(e: React.ChangeEvent<HTMLInputElement>): void=>{
    this.setState({
        inputValue: e.target.value
    })
  } 
  onSubmit(e:any){
    e.preventDefault()
    this.setState({show:false, inputValue:''})
  }
  onClose(){
    this.setState({show:false, inputValue:''})
    this.props.showAdd()
  }
  render(){
    const{getNewRecord} = this.props
    const{inputValue,show} = this.state
    const ifshow = (
    <form onSubmit={this.onSubmit}>
          <input
          value={inputValue} 
          onChange={this.handlerInput} 
          type="text" 
          />
          <button onClick={()=>getNewRecord(inputValue)}>Подтвердить</button>
          <button onClick={this.onClose}>Отмена</button>
      </form>
    )
      return(
        show?ifshow:false
      )
  }
}