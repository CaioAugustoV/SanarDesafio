import React from 'react'
import styled from "styled-components";

const MainFooter = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainFooterOne = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #999;
`;

const ItensOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  div{
    padding: 20px;
  }
`;
const ItemOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  div{
    background: #2472ea;
    padding: 10px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: .5s ease;
  }
  div:hover{
    transform: scale(1.1);
  }
  img{
    width: 1.5vw;
    height: 1.5vw;
  }
  p{
    margin: 0 10px;
  }
`;
const ItensOneRedes = styled.div`
  a{
    padding: 5px;
  }
  img{
    width: 2vw;
    height: 2vw;
  }
`;

const MainFooterTwo = styled.div`
  padding: 20px;
  p{
    margin: 0;
  }
`;

export default function Footer() {
  return (
    <MainFooter>
      <MainFooterOne>
        <ItensOne>
          <ItemOne>
            <div>
              <img src="./static/img/users.png" />
            </div>
            <p>Sobre o Sanarflix</p>
          </ItemOne>
          <ItemOne>
            <div>
              <img src="./static/img/email.png" />
            </div>
            <p>Fale conosco</p>
          </ItemOne>
          <ItemOne>
            <div>
              <img src="./static/img/send.png" />
            </div>
            <p>Perguntas frequentes</p>
          </ItemOne>
          <ItemOne>
            <div>
              <img src="./static/img/format.png" />
            </div>
            <p>Blog</p>
          </ItemOne>
        </ItensOne>
        <ItensOneRedes>
          <a href="https://www.instagram.com/sanarflix.med/?hl=pt-br" ><img src="./static/img/instagram.png" /></a>
          <a href="https://www.facebook.com/sanarflix.med/" ><img src="./static/img/facebook.png" /></a>
          <a href="https://www.youtube.com/channel/UC9nRs5w7Qk-kUZqlryrasjA" ><img src="./static/img/youtube.png" /></a>
        </ItensOneRedes>
      </MainFooterOne>
      <MainFooterTwo>
        <p>© SanarFlix 2018 - Todos os Direitos Reservados</p>
      </MainFooterTwo>
    </MainFooter>
  )
}
