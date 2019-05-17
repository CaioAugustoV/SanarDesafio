import React from "react";
import styled from "styled-components";

const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  iframe{
    border: none;
    transform: translate(0%, -40%);
  }
`;

const MainText = styled.div`
  width: 80%;
  transform: translate(0%,-25%); 
  p{
    color: #555e61;
  } 
`;

const MainBoxs = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.div`
  width: calc(30% - 10px);
  height: calc(40vh - 10px);
  margin: 10px 0;
  padding: 10px;
  background: linear-gradient(to top, rgba(0,0,0,0.2), #000),url(${props => props.image}) no-repeat center center / cover;
  border-radius: 10px;
  color: #fff;
  p{
    font-weight: bold;
  }
`;

export default function Content() {
  return (
    <Main>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/AJ0P2joRyEk"
        allowfullscreen=""
      />
      <MainText>
        <p>
          Olá, Tudo bom? Se você está por aqui, deve estar se perguntando oque é
          o SanarFlix e como podemos te ajudar. Então vamos começar a responder
          pelo final. O SanarFlix foi concebido, pois nós sabemos as
          dificuldades envolvidas na sua rotina de estudante de medicina.
        </p>
        <p>
          Em resumo, muito é fruto de um extenso volume de assuntos que lhe é
          apresentado em um curto espaço de tempo. Qaundo esse fato é associado
          á pressão por resultados imediatos das avaliações e da incerteza de
          uma adequada preparação para lidar com vidas no futuro, gera
          insegurança e prejuízos pessoais. Por isso, o SanarFlix será seu maior
          aliado. Nós somos a maior plataforma de educação médica no Brasil e
          tudo foi pensado para te acompanhar e te auxiliar durante toda a sua
          faculdade de medicina.
        </p>
        <p>Como? Simplesmente lhe disponibilizando:</p>
      </MainText>
      <MainBoxs>
        <Box image="./static/img/box1.png">
          <p>Aulas didáticas e objetivas</p>
          <span>Você pode assistir quantas vezes quiser.</span>
        </Box>
        <Box image="./static/img/box2.png">
          <p>Mapas mentais</p>
          <span>Mapas mentais dos principais temas para que você possa revisar com mais facilidade os assuntos.</span>
        </Box>
        <Box image="./static/img/box3.png">
          <p>Questões comentadas</p>
          <span>Questões comentadas para que você possa colocar em prática e aprender com os seus erros.</span>
        </Box>
        <Box image="./static/img/box4.png">
          <p>Manuais, diretrizes e artigos</p>
          <span>Acesso rápido aos principais materiais públicos de referência como manuais, diretrizes e artigos.</span>
        </Box>
        <Box image="./static/img/box5.png">
          <p>Fluxogramas</p>
          <span>Fluxogramas com o passo a passo de manejo com pacientes, doenças e casos clínicos.</span>
        </Box>
        <Box image="./static/img/box6.png">
          <p>E muito mais</p>
          <span>Equipe de professores padrão USP.</span>
        </Box>
      </MainBoxs>
      <MainText>
        <p>
          Toda semana novas aulas e novos materiais são acrescentados a
          plataforma. Confira todo conteúdo disponível clicando em Todos os
          cursos ou em O que já está disponível? Experimente o SanarFlix e
          descubra oque é ter uma rotina de estudos otimizada!
        </p>
      </MainText>
    </Main>
  );
}
