import React from 'react'
import styled from "styled-components";
import MainCaroussel from "./MainCaroussel"
import { connect } from 'react-redux'

const Main = styled.div``;

function Content(props) {
  return (
    <Main>
      <MainCaroussel itens={props.cursosData} title="Cursos"/>
      <MainCaroussel itens={props.cursosData} title="Tudo sobre diabetes"/>
      <MainCaroussel itens={props.cursosData} title="Mais acessados"/>
    </Main>
  )
}

export default connect(state => state)(Content)