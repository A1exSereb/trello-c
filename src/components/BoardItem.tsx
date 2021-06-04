import React,{Component} from 'react';
import styled from 'styled-components';


interface BoardItemProps{
    records: any,
}
interface BoardItemState{
    records: Array<any>
}
const Li=styled.li`
    list-style: none;
`
const StyledItem = styled.input`
    border:none
    border-radius: 5px;
    border: 1px solid #000;
    list-style: none;
    margin-bottom: 5px;
`
export default class BoardItem extends Component<BoardItemProps,BoardItemState>{
    constructor(props : BoardItemProps){
        super(props)
        this.state ={
            records: this.props.records,
        }
    }
    componentDidUpdate(){
        console.log(this.state.records)
    }
    
    render(){
        const{records} = this.state
        const list = records.map(item =>{
            const{id,label} = item;
           return (
                <Li key={id}>
                <StyledItem value={label}className='board__item' />
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
