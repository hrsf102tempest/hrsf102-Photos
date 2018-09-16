import React from 'react';
import styled from 'styled-components';
import Caption from './Caption.jsx';

const SlideContainer = styled.div`
  display: inline-block;
  height: 220px;
  width: 220px;
  transition: transform .2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const SlideImage = styled.img`
  height: 220px;
  width: 220px;
  transition: transform .2s;

  &:hover {
    transform: scale(1.05);
  }
`;

class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { link, user_name, description } = this.props.photoData;
    return (
      <SlideContainer>
        <SlideImage src={link} />
      </SlideContainer>
    );
  }
}

export default Slide;
