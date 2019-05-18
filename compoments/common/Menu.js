import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Link from 'next/link'
import { connect } from 'react-redux'
import { SearchCursos } from '../../ducks/SanarFlixActions'

const _ = require('lodash');

const MainMenu = styled.div`
  background: rgba(12,29,41,0.9);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  width: 100vw;
  position: fixed;
  z-index: 9;
`;

const Itens = styled.div`
  padding: 0 1vw;
  display: flex;
  align-items: center;
  height: 100%;
  div{
    padding: 10px;
    height: calc(100% - 20px);
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: .5s ease;
    span{
      color: #fff;
    }
  }
  div:nth-child(${props => props.active}){
    border-bottom: 2px solid #fff;
    height: calc(100% - 22px);
  }
  img{
    height: 85%;
    cursor: pointer;
  }
  p{
    color: #fff;
    margin: 0 10px;
    cursor: pointer;
  }
  p:hover{
    opacity: .9;
  }
  button{
    color: #fff;
    background: #e62e2e;
    border: none;
    padding: 6px 14px;
    margin: 0 10px;
    border-radius: 14px;
    box-shadow: 0px 0px 20px 0px rgba(230,46,46,0.6);
    cursor: pointer;
    transition: .5s ease;
  }
  button:hover{
    transform: scale(1.1);
  }
`;

const Input = styled.div`
  position: relative;
  input{
    background: #ffffff2b;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 5px;
    width: 25vw;
    margin: 0 10px;
    color: #fff;
    ::placeholder {
      color:   #fff;
    }
  }
  input:focus{
    outline: none; 
  }
  img{
    position: absolute;
    position: absolute;
    height: 25%;
    right: 30px;
  }
  span{
    position: absolute;
    right: 55px;
    background: #fff;
    height: 25%;
    width: 1px;   
  }
`;

function Menu(props) {
  const [MenuActive, setMenuActive] = useState(0)

  useEffect(() => {
    HandleMenu()
  }, [])
  
  function HandleMenu(){
    switch (props.menu) {
      case 'home':
      setMenuActive(2)
      break;
      case 'sobre':
      setMenuActive(3)
      break;
      case 'landing':
      setMenuActive(4)
      break;
      default:
      break;
    }
  }
  
  function SetSearch(val){
    _.filter(props.cursosData, function(index){console.log(index.nome == val)})
    // props.dispatch(SearchCursos())
  }
  return (
    <MainMenu>
      <Itens active={MenuActive}>
        <img src="./static/img/logo.png"/>
          <Link href="/">
            <div onClick={() => setMenuActive(2)}>
                <span>Início</span>
            </div>
          </Link>
          <Link href="/sobre">
            <div onClick={() => setMenuActive(3)}>
                <span>Sobre o Sanarflix</span>
            </div>
          </Link>
        <div onClick={() => setMenuActive(4)}>
          <span>Perguntas Frenquentes</span>
        </div>
      </Itens>
      <Itens>
        <Input>
          <input onBlur={ (e) => SetSearch(e.target.value)} type="text" placeholder="Busque seu curso"/>
          <span />
          <img src="./static/img/search.png"/>
        </Input>
        <Link href="/login"><p>Entrar</p></Link>
        <Link href="/lading"><button>Assine</button></Link>
      </Itens>
    </MainMenu>
  );
}

export default connect(state => state)(Menu)