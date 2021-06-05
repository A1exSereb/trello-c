import styled from 'styled-components'

export const Div = styled.div`
position: absolute;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    padding-top: 40%;
    overflow: hidden;
    background-color: #000;
    padding: 60px;
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
    border: none;
    margin-top: 5px;
    cursor: pointer;
    :hover{
        background-color: #fff;
        color: #000;
    }
`