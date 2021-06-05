import styled from 'styled-components'

export const Div = styled.div`
position: absolute;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    padding-top: 60px;
    overflow: hidden;
    background-color: #000;
    
`
export const Form = styled.form`
    margin: 0 auto;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 50px;
    border-radius: 10px;
`
export const Input = styled.input`
width: 60%;
height: 40px;
font-size: large;

`
export const Button = styled.button`
margin-top: 4px;
     border: none;
    display: block;
    text-align: center;
    background-color: inherit;
    cursor: pointer;
    color:#000;
    width: 30%;
    height: 40px;
    :hover{
        border: 1px solid #000;
    border-radius: 5px;
    background-color: #6f0;
    color:#000;
    }
`