import React,{Component, SyntheticEvent} from 'react';
import styled from 'styled-components';
import BoardItem from './BoardItem';
import AddForm from './forms/AddForm';


const StyledBoard = styled.div`
    width: 200px;
    padding: 10px;
    border-radius: 10px;
    border:1px solid black;
    align-items: center;
    margin-right: 15px;
`
const StyledTitle = styled.h2`
    margin: 0;
    align-self: flex-start;
`
const StyledUl = styled.ul`
    padding: 0;
`
const StyledAddItem = styled.button`
    border: none;
    text-align: center;
    background-color: inherit;
    cursor: pointer;
`

//container width ~300px
interface BoardProps{
    id:number,
    title:string,
}
interface BoardState{
    records: Array<any>,
    add:boolean,
    newRecord:string
}
let i = 2;
export default class Board extends Component<BoardProps,BoardState>{
    constructor(props : BoardProps){
        super(props);
        this.deleteRecord = this.deleteRecord.bind(this)
        this.getNewRecord = this.getNewRecord.bind(this)
        this.showAdd = this.showAdd.bind(this)
    }
    state ={
        id: this.props.id,
        title:this.props.title,
        add: false,
        records:[{id: 1,label:'todo1'},{id: 2,label:'todo2'}],
        newRecord:''
    }
    closeForm(){
        this.setState({
            add:false,
            newRecord:''})
    }
    getNewRecord(newRecord:any){
        const {records} = this.state
        if(newRecord !== ''){
            ++i
            const item = records.concat([{id: i, label:newRecord}])
            console.log(item)
            this.setState({
            records:item,
            add:false
             })
        }
    }
    showAdd(){
        this.setState({add:false})
    }
    deleteRecord(id:number){
        this.setState(({records}) =>{
            return {records : records.filter(item => item.id !== id)};
          });
    }
    editRecord(){

    }

    render(){
        const {title,id,add,records,newRecord} = this.state
        return(
            <StyledBoard key={id}>
                <StyledTitle>{title}</StyledTitle>
                <StyledUl >
                    <BoardItem
                    key={Math.random()}
                    records={records}
                    deleteRecord={this.deleteRecord}
                    editRecord={this.editRecord}
                    />
                </StyledUl>
                {
                add?<AddForm
                    getNewRecord={this.getNewRecord}
                    show={true}
                    showAdd={this.showAdd}
                />
                :<StyledAddItem onClick={()=>this.setState({add:true})}>Add</StyledAddItem>}
            </StyledBoard>
        )
    }
}
//вынести title и AddForm в отдельные компоненты
