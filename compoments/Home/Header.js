import React from 'react';
import styled from "styled-components";

const MainHeader = styled.div`
  width: 100vw;
  height: 70vh;
  background: url(./static/img/banner1.png) no-repeat fixed top center;
`;

const ContainerHeader = styled.div`
  width: 100%;
  height: 100%;
  background: #000000ab;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Texts = styled.div`
  color: #fff;
  h2{
    text-align: center;
    color: #fff;
    font-size: 3.5vw;
  }
  p{
    text-align: center;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const ButtonAssine = styled.button`
  background: #e62e2e;
  border: none;
  padding: 6px 60px;
  margin: 30px 10px;
  border-radius: 14px;
  box-shadow: 0px 0px 20px 0px rgba(230,46,46,0.6);
  cursor: pointer;
  color: #fff;
  transition: .5s ease;
  :hover{
    transform: scale(1.1);
  }
`;

const ButtonCursos = styled.button`
  background: transparent;
  border: 1px solid #fff;
  padding: 2  px 6px;
  margin: 0 10px;
  border-radius: 14px;
  cursor: pointer;
  color: #fff;
  transition: .5s ease;
  :hover{
    transform: scale(1.1);
  }
`;

export default function Header() {
  return (
    <MainHeader>
      <ContainerHeader>
        <Texts>
          <h2>Todos os caminhos levam ao Sanarflix</h2>
          <p>
            Aprenda com professores referência na área da medicina.<br/>
            Acelere seu aprendizado tendo acesso a plataforma em qualquer lugar, em diversos despositivos.<br/>
            Aprenda o que é importante para a realização dos seus objetivos.
          </p>
        </Texts>
        <Buttons>
          <ButtonAssine>Assine agora</ButtonAssine>
          <ButtonCursos>Conheça nossos cursos</ButtonCursos>
        </Buttons>
      </ContainerHeader>
    </MainHeader>
  )
}
