import React from 'react';
import styled from 'styled-components';
import Caption from './Caption.jsx';

const SlideContainer = styled.div`
  position: relative;
  top: 10%;
  display: inline-block;
  height: 220px;
  width: 220px;
  transition: transform .2s;
  transform: ${props => props.active ? 'scale(1.15)' : 'scale(1)'};
  z-index: ${props => props.active ? '1' : '0'};
`;

const SlideImage = styled.img`
  height: 100%;
  width: 100%;
`;

const CaptionContainer = styled.div`
  visibility: ${props => props.active ? 'visible' : 'hidden'};
  width: 100%;
  height: 20%;
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const Slide = (props) => {
  const { link, user_name, description } = props.photoData;
  const { handleActivePhoto, handleInactivePhoto, active } = props;
  return (
    <SlideContainer active={active} onMouseEnter={handleActivePhoto} onMouseLeave={handleInactivePhoto}>
      <SlideImage src={link} />
      <CaptionContainer active={active}>
        <Caption userName={user_name} description={description} />
      </CaptionContainer>
    </SlideContainer>
  );
};

export default Slide;
