import React, { useState } from "react";
import styled from "styled-components";
import Login from "../../json/login";
import Router from 'next/router'

const _ = require("lodash");

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-weight: normal;
`;

const InputMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 60vw;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  width: calc(100% - 2vw - 2px);
  padding: 1vw;
  border: 2px solid transparent;
  background-color: #f0f0f0;
  font-size: 14px;
  ${props => props.typeInputLogin ? 'border-color: #e62e2e !important;' : '' }
  ${props => props.typeInputPassword ? 'border-color: #e62e2e !important;' : '' }
  transition: 0.5s ease;
  :hover {
    border: 2px solid #9b9b9b;
  }
  :focus {
    outline: none;
    border: 2px solid #9b9b9b;
  }
`;

const Button = styled.button`
  width: 152px;
  font-size: 16px;
  background-color: #2472ea;
  border-radius: 30px;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  border: none;
  height: 30px;
  padding: 6px 52px;
  cursor: pointer;
  transition: 0.5s ease;
  :hover {
    transform: scale(1.1);
  }
`;

const MainBottuns = styled.div`
  width: 60vw;
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Forgot = styled.p`
  margin: 0;
  transition: 0.5s ease;
  :hover {
    opacity: 0.5;
  }
`;

const Remember = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  p {
    margin: 0;
    font-weight: normal;
  }
`;

const Sanar = styled.p`
  color: #999;
  padding: 20px 0;
  transition: 0.5s ease;
  :hover {
    opacity: 0.5;
  }
`;

export default function Content() {
  const [LoginState, setLoginState] = useState({
    login: "",
    senha: ""
  });
  const [TypeInputLogin, setTypeInputLogin] = useState(false);
  const [TypeInputPassword, setTypeInputPassword] = useState(false);
  function LoginRequest() {
    let request = _.filter(Login.acess, function(index) {
      return index.login == LoginState.login;
    });
    if(request[0] == undefined){
      setTypeInputLogin(true)
      setTypeInputPassword(true)
    }else{
      LoginVerification(request[0])
    }
  }

  function LoginVerification(val) {
    if(val.login == LoginState.login && val.senha == LoginState.senha){
      Router.push('/')
    }else{
      setTypeInputPassword(true)
    }
  }
  console.log(TypeInputLogin)
  console.log(TypeInputPassword)
  return (
    <Main>
      <ContentLogin>
        <Title>Bem-vindo de volta!</Title>
        <InputMain>
          <Label>E-mail</Label>
          <Input
            onChange={e =>
              setLoginState({ ...LoginState, login: e.target.value })
            }
            placeholder="Email"
            type="text"
            typeInputLogin={TypeInputLogin}
          />
        </InputMain>
        <InputMain>
          <Label>Senha</Label>
          <Input
            onChange={e =>
              setLoginState({ ...LoginState, senha: e.target.value })
            }
            placeholder="Senha"
            type="password"
            typeInputPassword={TypeInputPassword}
          />
        </InputMain>
        <MainBottuns>
          <Remember>
            <input type="checkbox" />
            <p>Lembre-me</p>
          </Remember>
          <Forgot>Esqueceu senha</Forgot>
        </MainBottuns>
        <Button onClick={() => LoginRequest()}>Entrar</Button>
        <Sanar>Assine o SanarFlix</Sanar>
      </ContentLogin>
    </Main>
  );
}
