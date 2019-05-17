import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import MainCaroussel from "./MainCaroussel"

const Main = styled.div``;

export default function Content() {
  const [API, setAPI] = useState('')
  useEffect(() => {
    fetch('https://5b7570f8deca780014ec9f86.mockapi.io/v1/cursos')
      .then(response => response.json())
      .then(data => setAPI({ data }));
  }, [])
  return (
    <Main>
      <MainCaroussel data={API} title="Cursos"/>
      <MainCaroussel data={API} title="Tudo sobre diabetes"/>
      <MainCaroussel data={API} title="Mais acessados"/>
    </Main>
  )
}
