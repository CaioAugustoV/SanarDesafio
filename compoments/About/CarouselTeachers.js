import React, { useState, useRef } from "react";
import styled from 'styled-components';
import { Carousel } from 'antd';
import { connect } from 'react-redux';

const MainTeachers = styled.div`
  margin-top: 90px;
  .slick-list {
    overflow: visible;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 80px;
  h1 {
    color: #555e61;
    font-weight: normal;
  }
`;

const MainCarousel = styled.div`
  margin-top: 30px;
  position: relative;
  .slick-slide {
    transform: scale(1);
    transition: all 1s ease;
    background: #e3e3e3;
    box-shadow: inset 0px 0px 0px 5px rgba(255,255,255,1);
    opacity: .5;
    div:nth-child(1){
      outline: none;
    }
  }
  .slick-current {
    transform: scale(1.3);
    z-index: 4;
    background: #fff !important;
    opacity: 1 !important;
    box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.18) !important;
    transition: all 1s ease;
  }
  .slick-current p {
    text-align: center;
    opacity: 1;
    visible: auto;
  }
  .slick-current p span {
    display: block;
    font-size: 12px;
    opacity: 0.6;
  }
  .slick-track{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  h1 {
    text-align: center;
    font-size: 16px;
    font-weight: 500;
  }
  p{
    opacity: 0;
    visible: hidden;
  }
  img{
    width: 6vw;
    border-radius: 50%;
  }
`;

const ButtonOne = styled.div`
  position: absolute;
  top: 50%;
  left: 38%;
  transform: translateY(-50%);
  img{
    width: 4vw;
  }
`;

const ButtonTwo = styled.div`
  position: absolute;
  top: 50%;
  right: 38%;
  transform: translateY(-50%);
  img{
    width: 4vw;
  }
`;
function About(props) {
  const CarouselRef = useRef(null);

  function DirectionCarousel(val) {
    switch (val) {
      case 'next':
      CarouselRef.current.slick.slickNext()
      break;
    
      case 'prev':
      CarouselRef.current.slick.slickPrev()        
      break;
      default:
      
        break;
    }
  }
  console.log(props)
  function renderCards(itens){
    return (<Card key={itens.id}>
      <img src={itens.imagem ? itens.imagem : 'https://i.imgur.com/3tdbY02.png'} />
      <div>
        <h1>{itens.nome ? itens.nome : 'Prof. sem nome'}</h1>
        <p>
          Cardiologista
          <span>Formada pela USP</span>
        </p>
      </div>
    </Card>)
  }
  return (
    <MainTeachers>
      <Title><h1>Conheça nossos professores</h1></Title>
      <MainCarousel>
        <Carousel
          centerMode={true}
          slidesToShow={7}
          dots={false}
          infinite={true}
          draggable
          ref={CarouselRef}
        >
          {props.profsData && props.profsData.map( itens => <div>{renderCards(itens)}</div>)}
        </Carousel>
        <ButtonOne onClick={() => DirectionCarousel('prev')}>
          <img src="./static/img/back.png" />
        </ButtonOne>
        <ButtonTwo onClick={() => DirectionCarousel('next')}>
          <img src="./static/img/next.png" />
        </ButtonTwo>
      </MainCarousel>
    </MainTeachers>
  );
}

export default connect(state => state)(About)