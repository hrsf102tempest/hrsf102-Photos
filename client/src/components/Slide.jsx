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

class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { link, user_name, description } = this.props.photoData;
    const { handleActivePhoto, handleInactivePhoto, active } = this.props;
    return (
      <SlideContainer active={active} onMouseEnter={handleActivePhoto} onMouseLeave={handleInactivePhoto}>
        <SlideImage src={link} />
      </SlideContainer>
    );
  }
}

export default Slide;
