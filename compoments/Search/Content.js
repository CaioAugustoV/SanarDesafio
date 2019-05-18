import React from 'react'
import styled from "styled-components";
import { connect } from 'react-redux'

const Main = styled.div`
  padding-top: 8vh;
  h1{
    color: #353535;
  }
`;

const MainModulos = styled.div`
  padding: 0 8vw  ;
`;

function Content() {
  return (
    <Main>
      <h1>Resuldados na sua busca de Cursos</h1>
      <MainModulos>
        <p>Emergencia - Ciclo basico</p>
      </MainModulos>
    </Main>
  )
}

export default connect(state => state)(Content)