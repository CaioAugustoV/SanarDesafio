import React from 'react'
import styled from "styled-components";

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
  transition: .5s ease;
  :hover{
    border: 2px solid #9b9b9b;
  } 
  :focus{
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
    transition: .5s ease;
    :hover{
      transform: scale(1.1)
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
  transition: .5s ease;
  :hover{
    opacity: .5;
  }
`;

const Remember = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  p{
    margin: 0;
    font-weight: normal;
  }
`;

const Sanar = styled.p`
  color: #999;
  padding: 20px 0;
  transition: .5s ease;
  :hover{
    opacity: .5;
  }
`;

export default function Content() {
  return (
    <Main>
      <ContentLogin>
        <Title>Bem-vindo de volta!</Title>
        <InputMain>
          <Label>E-mail</Label>
          <Input placeholder="Email" type="text" />
        </InputMain>
        <InputMain>
          <Label>Senha</Label>
          <Input placeholder="Senha" type="password" />
        </InputMain>
        <MainBottuns>
          <Remember>
            <input type="checkbox" />
            <p>Lembre-me</p>
          </Remember>
          <Forgot>Esqueceu senha</Forgot>
        </MainBottuns>
        <Button>Entrar</Button>
        <Sanar>Assine o SanarFlix</Sanar>
      </ContentLogin>
    </Main>
  )
}
