import React, { Component } from 'react';
import {StyledInput,OkButton,CancelButton} from '../styles/forms/InputForm'

interface AddFormProps{
  show:boolean,
  getNewRecord:Function,
  showAdd:Function,
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
              <StyledInput
              value={inputValue} 
              onChange={this.handlerInput} 
              type="text" 
              />
              <OkButton onClick={()=>getNewRecord(inputValue)}>Yes</OkButton>
              <CancelButton onClick={this.onClose}>No</CancelButton>
          </form>
        )
          return(
            show?ifshow:false
          )
    }
    if(action === 'edit'){
      return(
        <form onSubmit={this.onSubmit}>
              <StyledInput
              value={inputValue} 
              onChange={this.handlerInput} 
              type="text" 
              />
              <OkButton onClick={()=>getNewRecord(editingId,inputValue)}>Yes</OkButton>
              <CancelButton onClick={this.onClose}>No</CancelButton>
          </form>
      )
    }
  }
}