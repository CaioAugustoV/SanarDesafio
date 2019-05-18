import React from "react";
import styled from "styled-components";
import { Carousel } from 'antd';

const SliderHolder = styled.div`
  margin-bottom: 40px;
  h1 {
    font-size: 30px;
    color: #484f52;
    font-weight: 300;
    margin-left: 5vw;
  }
  .slick-list {
    padding-left: 5vw;
  }
  .slick-slide{
    margin: 0 20px;
  }
  .slick-track{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

const CarouselHeight = styled.div`
  position: relative;
`;

const CarouselRow = styled.div`
  width: 100%;
  height: 200px;
  background: ${props => 
    !props.background 
    ? 
    `url('${props.background}')no-repeat center center / cover` 
    : 
    '#00000087'};
  border-radius: 5px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 15px;
  span {
    color: #fff;
    font-size: 18px;
    max-width: 80%;
  }
`;
export default function MainCaroussel(props) {
  function resolveCursesList(item, index){
    return (
      <CarouselRow background={item.imagem}>
        <span>{item.nome}</span>
      </CarouselRow>
    );
  }
  return (
    <SliderHolder>
      <h1>{props.title ? props.title : ''}</h1>
      <CarouselHeight>
        <Carousel
          slidesToShow={5}
          slidesToScroll={5}
          infinite={false}
          dots={false}
          draggable
        >
          {
            props.itens 
            && 
            props.itens.map( (item, index) => (
              <div key={index}>
                {resolveCursesList(item, index)}
              </div>
            )) 
          }
        </Carousel>
      </CarouselHeight>
    </SliderHolder>
  );
}
