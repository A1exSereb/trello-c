import React, { Component } from 'react';
import Board from './Board'
import {Container} from './styles/Desk'

interface DeskProps{
}
interface DeskState{
    data:Array<any>
}
export default class Desk extends Component<DeskProps,DeskState>{
    constructor(props:DeskProps){
        super(props);
        this.state={
            data: [
                {id:1,title:'TODO'},
                {id:2,title:'In Progress'},
                {id:3,title:'Testing'},
                {id:4,title:'Done'},
              ]
        }
        this.getNewTitle = this.getNewTitle.bind(this)
    }
    getNewTitle(id:number,newValue?:any){
        const{data} = this.state
        
        if(newValue !== ''){
            this.setState({
                data:data.map((item) =>({
                    ...item,
                    title: item.id === id? newValue:item.title
                }))
            })
        }
        
    }
    componentDidUpdate(){
        console.log('Desk update')
    }
    render(){
        const{data} = this.state
        const boards = data.map((item:any )=>{
            return(
                <Board
                key={Math.random()}
                id={item.id}
                title={item.title}
                getNewTitle={this.getNewTitle}
                />
            )
        })
        return(
            <div className='desk boards__container'>
                {boards}
            </div>
        )
    }
}