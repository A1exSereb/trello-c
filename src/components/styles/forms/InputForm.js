import styled from 'styled-components';

export const StyledInput = styled.input`
  background-color: #D7D7D7;
  width: 65%;
  border: 1px solid #000;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 3px;
  border-right: none;
  outline:none;
`

const StyledButton = styled.button`
  border: 1px solid #000;
  padding: 3px;
  cursor: pointer;
`
export const OkButton = styled(StyledButton)`
  border-right:none;
  :hover{
    background-color: #6f0
  }
`
export const CancelButton = styled(StyledButton)`
  border-left:none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  :hover{
    background-color: #ff0000;
  }
`
