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
        
    }
`
const Li=styled.li`
    list-style: none;
    word-wrap: break-word;
    text-align: left;
    
`
interface BoardItemProps{
    records: any,
    deleteRecord: any
}
interface BoardItemState{
    records: Array<any>,
}
export default class BoardItem extends Component<BoardItemProps,BoardItemState>{
    constructor(props : BoardItemProps){
        super(props)
        this.state ={
            records: this.props.records,
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
                <StyledImage onClick={() => deleteRecord(id)} src={EditIcon} alt="edit" />
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
