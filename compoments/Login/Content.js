import React from 'react'
import styled from "styled-components";

const Main = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ContentLogin = styled.div``;

const Title = styled.h2``;

const InputMain = styled.div``;

const Label = styled.label``;

const Input = styled.input``;

const Button = styled.button``;

const MainBottuns = styled.div``;

const Forgot = styled.p``;

const Remember = styled.div``;

const Sanar = styled.p``;

export default function Content() {
  return (
    <Main>
      <ContentLogin>
        <Title>Bem-vindo de volta!</Title>
        <InputMain>
          <Label>E-mail</Label>
          <Input type="text" />
        </InputMain>
        <InputMain>
          <Label>Senha</Label>
          <Input type="text" />
        </InputMain>
        <MainBottuns>
          <Remember>
            <Input type="checkbox" />
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
