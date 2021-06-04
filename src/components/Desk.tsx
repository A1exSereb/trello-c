import React, { Component } from 'react';
import styled from 'styled-components';
import Board from './Board'
import {Container} from './styles/Desk'

interface DeskProps{
    data:any,
}
export default class Desk extends Component<DeskProps>{
    constructor(props:DeskProps){
        super(props);
    }

    render(){
        const{data} = this.props
        const boards = data.map((item:any )=>{
            return(
                <Board
                key={item.id}
                id={item.id}
                title={item.title}/>
            )
        })
        return(
            <Container className='desk boards__container'>
                {boards}
            </Container>
        )
    }
}