import styled from 'styled-components';

export const StyledBoard = styled.div`
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
    background-color: #8b00ff;
`
export const StyledUl = styled.ul`
    padding: 0;
`
export const StyledAddItem = styled.button`
    border: none;
    display: block;
    text-align: center;
    background-color: inherit;
    cursor: pointer;
    color:#fff;
    width: 100%;
    height: 40px;
    :hover{
        border: 1px solid #000;
    border-radius: 5px;
    background-color: #6f0;
    color:#000;
    }
`