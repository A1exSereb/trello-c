import React,{Component} from 'react';
import {Div,Form,Input,Button} from './styles/Authorization'



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