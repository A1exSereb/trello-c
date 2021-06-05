import React, { Component } from 'react'
import AddForm from './forms/InputForm'
import {StyledTitle} from './styles/Title'


interface TitleProps{
  title:string,
  editTitle:Function,
  id:number
}
interface TitleState{
  title:string,
  editing:boolean,
  editingId:number|null
}
export default class BoardTitle extends Component<TitleProps,TitleState>{
  constructor(props:TitleProps){
    super(props)
    this.state={
      title: this.props.title,
      editing:false,
      editingId:null,
    }
    this.onEdit=this.onEdit.bind(this)
    this.showEdit = this.showEdit.bind(this)
  }
  onEdit(id:number){
    this.setState({
        editing:true,
        editingId:id
    })
  }
  componentDidUpdate(){
    console.log('Title update')
    console.log(this.state.title)
  }
  showEdit(){
      this.setState({
          editing:false,
          editingId:null
      })
  }

  render(){
      const{title,editing,editingId} = this.state
      const{editTitle,id} = this.props
      if(editing){
                  return (
                          <AddForm
                          show={true}
                          action={'edit'}
                          editingId={editingId}
                          getNewRecord={editTitle}
                          showAdd={this.showEdit}/>
                          )
      }else{
          return(
             <StyledTitle onDoubleClick={()=>this.onEdit(id)}>{title}</StyledTitle>
          )
      }
      
  }
}