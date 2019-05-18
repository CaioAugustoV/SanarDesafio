import React from 'react';
import styled from "styled-components";

const MainHeader = styled.div`
  width: 100vw;
  min-height: 80vh;
  background: url(./static/img/banner1.png) no-repeat fixed top center;
`;

const ContainerHeader = styled.div`
  width: 100%;
  min-height: 80vh;
  padding: 15vh 0 5vh 0;
  background: #000000ab;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
`;

const Texts = styled.div`
  width: 45%;
  color: #fff;
  h2{
    color: #fff;
  }
`;

const MainItens = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-start;
`;

const MainItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  img{
    width: 4vw;
    height: 4vw;
  }
  p{
    text-align: center;
    margin: 0;
  }
`;

const Box = styled.div`
  width: calc(30% - 20px);
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  align-self: center; 
  iframe{
    border: none;
  }
`;

const ButtonAssine = styled.button`
  background: #e62e2e;
  border: none;
  padding: 6px 60px;
  margin: 10px;
  border-radius: 14px;
  box-shadow: 0px 0px 20px 0px rgba(230,46,46,0.6);
  cursor: pointer;
  color: #fff;
  transition: .5s ease;
  :hover{
    transform: scale(1.1);
  }
`;

const Pay = styled.p`
  font-size: 24px;
  color: #383838;
  margin: 0;
  padding: 5px 0;
  span{
    font-size: 18px;
    color: #999;
  }
`;

const MainCancele = styled.div`
  display: flex;
  align-items: center;
  img{
    width: 2vw;
  }
  p{
    padding: 0 5px;
  }
`;

export default function Header() {
  return (
    <MainHeader>
      <ContainerHeader>
        <Texts>
          <span>SOBRE O CURSO</span>
          <h2>Emergências Médicas Sanar</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur.
          </p>
          <MainItens>
            <MainItem>
              <img src="./static/img/video.png" />
              <p>
                Videos<br/>
                107
              </p>
            </MainItem>
            <MainItem>
              <img src="./static/img/pdf.png" />
              <p>
                Leitura<br/>
                15
              </p>
            </MainItem>
            <MainItem>
              <img src="./static/img/cloud.png" />
              <p>
                Documentos<br/>
                2
              </p>
            </MainItem>

            <MainItem>
              <img src="./static/img/document.png" />
              <p>
                Questões<br/>
                6
              </p>
            </MainItem>
          </MainItens>
        </Texts>
        <Box>
          <iframe width="100%" height="200px" src="https://www.youtube.com/embed/AJ0P2joRyEk" allowfullscreen=""></iframe>
          <Pay>R$ 20,90 <span>/mês</span></Pay>
          <MainCancele>
            <img src="./static/img/check.png" />
            <p>Cancele quando quiser</p>
          </MainCancele>
          <ButtonAssine>Assine agora</ButtonAssine>
        </Box>
      </ContainerHeader>
    </MainHeader>
  )
}
