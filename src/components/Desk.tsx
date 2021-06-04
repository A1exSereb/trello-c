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
            id={1}
            title={'1 Board'}/>
            <Board
            id={2}
            title={'2 Board'}/>
            <Board
            id={3}
            title={'3 Board'}/>
            <Board
            id={4}
            title={'4 Board'}/>
        </Container>
    )
}
//react-id-generator