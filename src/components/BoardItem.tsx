import React,{Component} from 'react';
import styled from 'styled-components';
import TrashIcon from '../icons/delete-icon.svg'
import EditIcon from '../icons/edit-icon.svg'

const StyledImage = styled.img`
    width:13px;
    height: 13px;
    margin-left: 5px;
    
    :hover{
        cursor: pointer;
        fill: #ff0000;
    }
`
const Li=styled.li`
    list-style: none;
    word-wrap: break-word;
    text-align: left;
    border-top: 1px solid #000;
    padding: 3px 0 3px 0;
`
interface BoardItemProps{
    records: any,
    deleteRecord: any,
    editRecord: any
}
interface BoardItemState{
    records: Array<any>,
    editing:boolean
}
export default class BoardItem extends Component<BoardItemProps,BoardItemState>{
    constructor(props : BoardItemProps){
        super(props)
        this.state ={
            records: this.props.records,
            editing: false
        }
    }
    render(){
        const{records} = this.state
        const{deleteRecord} = this.props
        console.log(records)
        const list = records.map(item =>{
            const{id,label} = item;
           return (
                <Li key={id}
                className='board__item'>
                {label}
                <StyledImage src={EditIcon} alt="edit" />
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
