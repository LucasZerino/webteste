import React from 'react'
import styled, { keyframes } from 'styled-components'

class ContactThreeForm extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            phone: "",
            menssagem: "",
            error: false
        }
    }

    formSubmit() {
      if (this.state.name === "" || this.state.email === "" || this.state.message === "") {
          this.setState({error: true})
      } else {
          this.setState({error: false})
      }
      this.forceUpdate()
    }

    
    check(val) {
        if (this.state.error && val === "") {
            return false
        } else {
            return true
        }
    }

    shouldComponentUpdate(nextProps, nextState) { 
      return false;
    }

    render() {

        const Separator = styled.div`
            height: 5px;
            width: 50px;
            background-color: #04e5e5;
            margin-bottom: 30px;
            margin-left: 6px;
        `

        const ContactForm = styled.div`
            padding: 40px;
            width: 100%;
            position: relative;
            z-index: 5;
        `

        const Heading = styled.h2`
            font-size: 70px;
            font-family: Teko;
            color: #fff;
        `

        const InputElement = styled.div`
            margin: 20px 0;
        `

        const ErrorInputAnimation = keyframes`
            0% {
              border-bottom: 1px solid #111;
            }
            100% {
              border-bottom: 1px solid #ff0000;
            }
        `
        

        const Input = styled.input`
            width: 100%;
            background-color: #111;
            border: none;
            border-bottom: 1px solid #444;
            padding: 10px 5px;
            border-radius: 0;
            color: #fff;
            transition: .5s;
            &:focus {
              border-bottom: 1px solid #04e5e5;
              outline: none;
            }
            &.error {
              animation: ${ErrorInputAnimation} 1s forwards;
            }
        `

        const Textarea = styled.textarea`
            width: 100%;
            background-color: #111;
            border: none;
            border-bottom: 1px solid #444;
            padding: 10px 5px;
            border-radius: 0;
            color: rgb(255, 255, 255);
            transition: all 0.5s ease 0s;
            min-height: 100px;
            margin-top: 0px;
            margin-bottom: 0px;
            height: 100px;
            &:focus {
              border-bottom: 1px solid #04e5e5;
              outline: none;
            }
        `

        const Submit = styled.button`
            display: block;
            height: 50px;
            width: 186px;
            position: relative;
            border: none;
            overflow: hidden;
            transition: .5s;
            background-color: #000;
            &:hover {
              background: #444;
            }
            input{
            display: block;
            height: 50px;
            width: 186px;
            position: relative;
            border: none;
            overflow: hidden;
            transition: .5s;
            color: white;
            font-size: 20px;
            background-color: #000;
            &:hover {
              background: #444;
            }
            span {
              position: relative;
              top: 0;
              color: #fff;
              z-index: 10;
              text-transform: uppercase;
              letter-spacing: 2px;
            }
        `


        return(
          <ContactForm>
              <Heading>
                Já é cliente? Faça Login
              </Heading>
              <Separator />
            <form className='form' action='https://taiga.hinova.com.br/sga/area/4.1/login.action.php'method="post" >
            <InputElement>
            <Input type='text' name='dfsCpf' id='dfsCpf' placeholder="Insira o CPF"/>
            </InputElement>
            <InputElement>
            <Input type="password" name="dfsSenha" id="dfsSenha" placeholder="Senha"/>
            </InputElement>
            <input type="hidden" name="dfsChave" id="dfsChave" value="628bc412e6b93be09f1c1e638ca0f2c738a6dd2505cdc684de7343f682e9c645559ffc130babc9bd08f7c980536e2f8e25dca289c7805553e84b7442fb5f8146" />
            <Submit>
            <input type="submit" name="pbEntrar" value="Entrar"/>
            </Submit>
            </form>
          </ContactForm>
        )
    }

}

export default ContactThreeForm