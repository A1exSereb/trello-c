import { eventNames } from 'process';
import React, { Component } from 'react';
import styled from 'styled-components';
interface AddFormProps{
  show:boolean,
  getNewRecord:any,
  showAdd:any,
  action:string,
  editingId?:number|null
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
    console.log('Submited')
    this.props.showAdd()
  }
  onClose(){
    this.setState({show:false, inputValue:''})
    this.props.showAdd()
  }
  componentDidUpdate(){
    console.log('Input form update')
}
  render(){
    const{getNewRecord,action,editingId} = this.props
    const{inputValue,show} = this.state
    if(action === 'add'){
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
    if(action === 'edit'){
      return(
        <form onSubmit={this.onSubmit}>
              <input
              value={inputValue} 
              onChange={this.handlerInput} 
              type="text" 
              />
              <button onClick={()=>getNewRecord(editingId,inputValue)}>Подтвердить</button>
              <button onClick={this.onClose}>Отмена</button>
          </form>
      )
    }
  }
}