import React,{Component, SyntheticEvent} from 'react';
import BoardItem from './BoardItem';
import AddForm from './forms/InputForm';
import Title from './Title'
import {StyledBoard, StyledUl,StyledAddItem} from './styles/Board'


//container width ~300px
interface BoardProps{
    id:number,
    title:string,
    getNewTitle:Function,
}
interface BoardState{
    records:Array<any>,
    add:boolean,
    newRecord:string,
}
let i = 2;
export default class Board extends Component<BoardProps,BoardState>{
    constructor(props : BoardProps){
        super(props);
        this.deleteRecord = this.deleteRecord.bind(this)
        this.getNewRecord = this.getNewRecord.bind(this)
        this.editRecord = this.editRecord.bind(this)
        this.showAdd = this.showAdd.bind(this)
        this.editTitle = this.editTitle.bind(this)
    }
    state ={
        id: this.props.id,
        title:this.props.title,
        add: false,
        records:[{id: 1,label:'todo1'},{id: 2,label:'todo2'}],
        newRecord:'',
    }
    closeForm(){
        this.setState({
            add:false,
            newRecord:''})
    }
    getNewRecord(newValue:string){
        const {records} = this.state
        if(newValue !== ''){
            ++i
            
            records.push({id: i, label:newValue})

            this.setState({
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
    editRecord(id:number,newValue?:any){
        const {records} = this.state
        if(newValue !== ''){

            const item = records.map((item) =>({
                ...item,
                label: item.id === id? newValue:item.label
            }))

            this.setState({
            records:item})
        }    
    }
    editTitle(id:number,newValue:string){
        this.props.getNewTitle(id,newValue)
        
    }
    componentDidUpdate(){
        console.log('Board update')
    }
    render(){
        const {title,id,add,records} = this.state
        const{} = this.props
        return(
            <StyledBoard 
            className='board'
            key={id}>
                <Title
                key={Math.random()}
                title={title}
                id={id}
                editTitle={this.editTitle}/>
                <StyledUl 
                className='board__list'>
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
                    action={'add'}
                />
                :<StyledAddItem onClick={()=>this.setState({add:true})}>Add</StyledAddItem>}
            </StyledBoard>
        )
    }
}
//вынести title и AddForm в отдельные компоненты
