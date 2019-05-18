import React, { useState } from 'react'
import styled from "styled-components";
import { connect } from 'react-redux'

const Main = styled.div`
  width: 100vw;
  padding: 0 20vw;
`;

const MainLearn = styled.div`
  width: 60%;
  margin-top: 100px;
  h2{
    color: #555;
    font-weight: normal;
  }
`;

const BoxLearn = styled.div`
  background: #e3e3e34d;
  border: 2px solid #e3e3e3;
  border-radius: 5px;
  margin: 10px 0;
  display: flex;
  align-items: flex-start;
  padding: 10px;
  img{
    width: 2vw;
  }
  p{
    margin: 0;
    padding-left: 10px;
    color: #353535;
  }
`;

const Collapse = styled.div``;

const Panel = styled.div`
  background: #e3e3e34d;
  border: 2px solid #e3e3e3;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: .5s ease;
  img{
    transform: rotate${props => props.active ? '(180deg)' : '(0deg)'};
    width: 2vw;  
    transition: .5s ease;
  }
`;
const Item = styled.div`
  height: ${props => props.active ? '200px' : '0'};
  background: #99999938;
  padding: ${props => props.active ? '10px' : '0'};
  border: ${props => props.active ? '2px solid #e3e3e3' : 'none'};
  border-radius: 5px;
  margin: 2px 0;
  position: relative;
  transition: .8s ease;
  h3{
    color: #666;
    opacity: ${props => props.active ? '1' : '0'};
    transition: .6s ease;
  }
  p{
    opacity: ${props => props.active ? '1' : '0'};
    transition: .6s ease;
  }
  img{
    position: absolute;
    top: 10px;
    right: 10px;
    width: 2vw;
    opacity: ${props => props.active ? '1' : '0'};
    transition: .6s ease;
  }
`;

function Content(props) {
  const [Active, setActive] = useState(0)
  
  function Cursos(val){
    return (
      <Collapse>
        <Panel
          onClick={ () => val.id === Active ? setActive(false) : setActive(val.id)}
          key={val.id}
          active={Active === val.id ? true : false}
        >
          <p>{val.nome}</p>
          <img src="./static/img/down-arrow.png" />
        </Panel>
        <Item active={Active === val.id ? true : false}>
          <h3>{val.area}</h3>
          <p>Aula - {val.nome} - Parte I</p>
          <p>Aula - {val.nome} - Parte II</p>
          <p>Aula - {val.nome} - Parte III</p>
          <img key={val.id} onClick={ () => setActive(false)} src="./static/img/error.png" />
        </Item>
      </Collapse>
    )
  }
  return (
    <Main>
      <MainLearn>
        <h2>O que você vai aprender</h2>
        <BoxLearn>
          <img src="./static/img/check.png" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus 
            eleifend scelerisque. Ut eget diam eleifend, posuere ligula quis, facilisis nisl.
          </p>
        </BoxLearn>
        <BoxLearn>
          <img src="./static/img/check.png" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </BoxLearn>
        <BoxLearn>
          <img src="./static/img/check.png" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus 
            eleifend scelerisque. Ut eget diam eleifend.
          </p>
        </BoxLearn>
      </MainLearn>
      <MainLearn>
        <h2>Conteúdo do curso</h2>
        {props.cursosData && props.cursosData.map( res => Cursos(res))}
      </MainLearn>
    </Main>
  )
}

export default connect(state => state)(Content)