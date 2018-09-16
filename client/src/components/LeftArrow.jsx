import React from 'react';
import styled from 'styled-components';

const LeftArrowContainer = styled.div`
  position: absolute;
  top: 40%;
  display: inline-block;
  height: 48px;
  width: 24px;
  padding-left: 24px;
  z-index: 1;
  color: #ECF0F1;

  &:hover {
    color: #FFFFFF;
  }
`;

const LeftArrow = props => (
  <LeftArrowContainer onClick={props.handleLeftArrowClick}>
    <i className="fas fa-angle-left fa-3x" />
  </LeftArrowContainer>
);


export default LeftArrow;
