import React, { useState } from 'react';
import styled from "styled-components";
import Link from 'next/link';

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

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: #00000055;
  width: 100vw;
  height: 100vh;
  display: ${props => props.visible ? 'flex' : 'none'};
  transform: ${props => props.visible ? 'scale(1)' : 'scale(0)'};
  transition: .5s ease;
  align-items: center;
  justify-content: center;
  div{
    background: #313131;
    width: 60%;
    padding: 5px 40px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h2{

    }
    p{
      font-weight: bold;
    }
    button{
      background: transparent;
      border: 1px solid #fff;
      border-radius: 4px;
      padding: 6px;
      color: #fff;
      align-self: flex-end;
    }
  }
`;

export default function Footer() {
  const [ModalState, setModalState] = useState(false)
  return (
    <>
      <MainFooter>
        <MainFooterOne>
          <ItensOne>
            <Link href="/sobre">
              <ItemOne>
                <div>
                  <img src="./static/img/users.png" />
                </div>
                <p>Sobre o Sanarflix</p>
              </ItemOne>
            </Link>
            <ItemOne onClick={() => setModalState(true)}>
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
      <Modal onClick={() => setModalState(false)} visible={ModalState}>
        <div>
          <h2>Fale conosco</h2>
          <p>Telefone:</p>
          <span>(71) 3052-4831</span>
          <p>WhatsApp:</p>
          <span>(71) 99172-4740</span>
          <p>E-mail:</p>
          <span>suportesanarflix@editorasanar.com.br</span>
          <button onClick={() => setModalState(false)}>FECHAR</button>
        </div>
      </Modal>
    </>
  )
}
