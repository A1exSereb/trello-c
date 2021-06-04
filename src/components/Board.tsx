import React,{Component, SyntheticEvent} from 'react';
import styled from 'styled-components';
import BoardItem from './BoardItem';


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
        this.onSubmit=this.onSubmit.bind(this)
        this.handlerInput =this.handlerInput.bind(this)
        this.AddForm=this.AddForm.bind(this)
        this.deleteRecord = this.deleteRecord.bind(this)
    }
    state ={
        id: this.props.id,
        title:this.props.title,
        add: false,
        records:[{id: 1,label:'todo1'},{id: 2,label:'todo2'}],
        newRecord:''
    }
    handlerInput =(e: React.ChangeEvent<HTMLInputElement>): void=>{
        this.setState({
            newRecord: e.currentTarget.value
        })
        console.log(this.state.newRecord)
    }
    onSubmit(e:any){
        e.preventDefault()
        const {newRecord,records} = this.state
        i++
        const item = records.concat([{id: i, label:newRecord}])
        console.log(item)
        this.setState({
            records:item,
            newRecord:'',
            add:false
        })
        
    }
    AddForm = ()=>{
        const {newRecord} = this.state
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                value={newRecord} 
                onChange={this.handlerInput} 
                type="text" 
                />
                <button type='submit'>Подтвердить</button>
                <button onClick={() => this.setState({add:false,
                newRecord:''})}>Отмена</button>
            </form>
        )
    }
    deleteRecord(id:number){
        this.setState(({records}) =>{
            return {records : records.filter(item => item.id !== id)};
          });
    }
    editRecord(){

    }

    render(){
        const {title,id,add,records} = this.state
        return(
            <StyledBoard key={id}>
                <StyledTitle>{title}</StyledTitle>
                <StyledUl >
                    <BoardItem
                    key={Math.random()}
                    records={records}
                    deleteRecord={this.deleteRecord}
                    />
                </StyledUl>
                {
                add?<this.AddForm/>
                :<StyledAddItem onClick={()=>this.setState({add:!add})}>Add</StyledAddItem>}
            </StyledBoard>
        )
    }
}
//вынести title и AddForm в отдельные компоненты
