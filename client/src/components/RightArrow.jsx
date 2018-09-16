import React from 'react';
import styled from 'styled-components';

const RightArrowContainer = styled.div`
  position: absolute;
  top: 40%;
  right: 0%
  display: inline-block;
  height: 48px;
  width: 48px;
  z-index: 1;
  color: #ECF0F1;

  &:hover {
    color: #FFFFFF;
  }
`;

const RightArrow = props => (
  <RightArrowContainer onClick={props.handleRightArrowClick}>
    <i className="fas fa-angle-right fa-3x" />
  </RightArrowContainer>
);


export default RightArrow;
