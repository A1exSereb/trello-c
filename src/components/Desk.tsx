import React from 'react';
import styled from 'styled-components';
import Board from './Board'
import {Container} from './styles/Desk'

//data comes from app?
export const Desk = (props:any)=>{


    return(
        <Container className='desk boards__container'>
            <Board
            id={1}
            title={'TODO'}/>
            <Board
            id={2}
            title={' In Progress'}/>
            <Board
            id={3}
            title={'Testing'}/>
            <Board
            id={4}
            title={'Done'}/>
        </Container>
    )
}