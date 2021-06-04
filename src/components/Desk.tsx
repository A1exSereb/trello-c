import React from 'react';
import styled from 'styled-components';
import Board from './Board'


const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 15px;
`

//data comes from app?
export const Desk = (props:any)=>{


    return(
        <Container className='desk boards__container'>
            <Board
            />
            <Board
            />
            <Board
            />
            <Board
            />
        </Container>
    )
}