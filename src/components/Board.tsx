import React,{Component, useState} from 'react';
import BoardItem from './BoardItem';
import AddForm from './forms/InputForm';
import Title from './Title'
import styled from 'styled-components';
import {records} from '../data/data';


interface BoardProps{
    id:number,
    title:string,
}
interface BoardState{
    records:Array<any>,
    add:boolean,
}
let i = 14;

export default function Board({id,title} : BoardProps) : any{
  const [boardId,setBoardId] = useState(id),
        [boardTitle,setBoardTitle] = useState(title),
        [boardRecords,setBoardRecords] = useState(records),
        [add,setAdd] = useState(false);


  const getNewRecord = (newValue:string) =>{
    if(newValue !== ''){
      ++i
      const newArr = [...boardRecords,{id: i, label:newValue}]
      setBoardRecords(newArr);
      setAdd(false)
    }
  }

  const deleteRecord=(id:number)=>{
    setBoardRecords(boardRecords.filter(item => item.id !== id))
  }

  const editRecord = (id:number,newValue:string) =>{
    if(newValue !== ''){
  
      setBoardRecords(boardRecords.map((item) =>({
        ...item,
        label: item.id === id? newValue:item.label
    })))
  }    
  }

  const editTitle = (id:number, newValue:string) =>{
    setBoardTitle(newValue);
  }

  const boardItems = boardRecords.map(item => {return (
  <BoardItem
    key={Math.random()}
    id={item.id}
    label={item.label}
    deleteRecord={deleteRecord}
    editRecord={editRecord}
    />)});

  return(
    <StyledBoard 
    className='board'
    key={id}>
        <Title
        key={Math.random()}
        title={boardTitle}
        id={boardId}
        editTitle={editTitle}/>
        <StyledUl 
        className='board__list'>
            {boardItems}
        </StyledUl>
        {
        add?
        <AddForm
            getNewRecord={getNewRecord}
            show={true}
            showAdd={()=>setAdd(false)}
            action={'add'}
        />
        :
        <StyledAddItem onClick={()=>setAdd(true)}>Add</StyledAddItem>
        }
    </StyledBoard>
  )

}



//styles

const StyledBoard = styled.div`
    width: 200px;
    padding: 10px;
    display: inline-block;
    vertical-align: top;
    margin-top: 15px;
    margin-left: 10px;
    border-radius: 10px;
    border:3px solid black;
    align-items: left;
    margin-right: 15px;
    background: linear-gradient(to top left, powderblue, pink);
`
const StyledUl = styled.ul`
    padding: 0;
`
const StyledAddItem = styled.button`
    border: none;
    display: block;
    text-align: center;
    background-color: inherit;
    cursor: pointer;
    color:#000;
    width: 100%;
    height: 40px;
    :hover{
        border: 1px solid #000;
    border-radius: 5px;
    background-color: #450045;
    color:#fff;
    }
`
