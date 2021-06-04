
import React,{Component} from 'react';
import styled from 'styled-components';



const Div = styled.div`
position: absolute;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    padding-top: 40%;
    overflow: hidden;
    background-color: #000;
    padding: 60px;
`
const Form = styled.form`
    margin: 0 auto;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 50px;
    border-radius: 10px;
`
const Input = styled.input`
width: 60%;
height: 40px;
font-size: large;

`
const Button = styled.button`
    border: none;
    margin-top: 5px;
    cursor: pointer;
    :hover{
        background-color: #fff;
        color: #000;
    }
`
class Authorization extends Component{    

        constructor(props?: any){
            super(props);
            this.handlerInput = this.handlerInput.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
        }

        state ={
            name: '',
            visible:true
        }
        
        onSubmit(e:any){
            e.preventDefault()
            const {name} = this.state
            if(name !== ''){
                localStorage.setItem('name', name);
                this.setState({
                    visible:false
                })
            }
            else{
                console.log('Не может быть')
            }
        }
        componentDidMount(){
            if(localStorage.getItem("name")!= null){
                this.setState({
                    visible: false
                })
            }
        }
        handlerInput =(e: React.ChangeEvent<HTMLInputElement>): void=>{
            this.setState({
                name: e.currentTarget.value
            })
            console.log(this.state.name)
        }

        render(){
            const show =()=>{
                const {name} =this.state
                return (
                    <>
                    <Div className="authorization__container">
                        <Form onSubmit={this.onSubmit} className="authorization__form">
                            <Input className='authorization__input' value={name} type='text' placeholder='Как вас зовут?'
                            onChange={this.handlerInput}/>
                            <Button type='submit'>Подтвердить</Button>
                        </Form>
                    </Div>
                    </>
                )
            }
            return this.state.visible? show(): null
            
        }
}

export default Authorization;