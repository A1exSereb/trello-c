import React,{Component} from 'react';
import TrashIcon from '../icons/delete-icon.svg'
import EditIcon from '../icons/edit-icon.svg'
import AddForm from './forms/InputForm'
import {Li, StyledImage} from './styles/BoardItem'


interface BoardItemProps{
    records: Array<Object>,
    deleteRecord: Function,
    editRecord: Function,
}
interface BoardItemState{
    records: Array<any>,
    editing:boolean,
    editingId:number|null
}
export default class BoardItem extends Component<BoardItemProps,BoardItemState>{
    constructor(props : BoardItemProps){
        super(props)
        this.state ={
            records: this.props.records,
            editing: false,
            editingId: null
        }
        this.onEdit = this.onEdit.bind(this);
        this.showEdit = this.showEdit.bind(this)
    }
    onEdit(id:number){
        this.setState({
            editing:true,
            editingId:id
        })
    }
    showEdit(){
        this.setState({
            editing:false
        })
    }
    componentDidUpdate(){
        console.log('Board Item update')
    }
    render(){
        const{records,editing,editingId} = this.state
        const{deleteRecord,editRecord} = this.props
        if(editing){
            
            const list = records.map(item =>{
                const{id,label} = item;
                if(item.id === editingId){
                    return (<Li key={id}>
                            <AddForm
                            show={true}
                            action={'edit'}
                            editingId={editingId}
                            getNewRecord={editRecord}
                            showAdd={this.showEdit}/>
                            </Li>)
                }else{
                    return (
                    <Li key={id}
                    className='board__item'>

                    {label}

                    <StyledImage onClick={()=>this.onEdit(id)} src={EditIcon} alt="edit" />
                    <StyledImage onClick={() => deleteRecord(id)} src={TrashIcon} alt="delete" />

                    </Li>
                )
                }
            });
    
            return(
               <>
               {list}
               </>
            )
        }else{
            const list = records.map(item =>{
                const{id,label} = item;
               return (
                    <Li key={id}
                    className='board__item'>
                    {label}
                    <StyledImage onClick={()=>this.onEdit(id)} src={EditIcon} alt="edit" />
                    <StyledImage onClick={() => deleteRecord(id)} src={TrashIcon} alt="delete" />
                    </Li>
                )
            });
    
            return(
               <>
               {list}
               </>
            )
        }
        
    }
}
