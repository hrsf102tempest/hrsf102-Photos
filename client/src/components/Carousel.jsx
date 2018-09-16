import React from 'react';
import styled from 'styled-components';
import Slide from './Slide.jsx';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';

const CarouselContainer = styled.div`
  position: relative;
  top: 17%;
  max-width: 660px;
  height: 220px;
`;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftPhotoIndex: 0,
      midPhotoIndex: 1,
      rightPhotoIndex: 2,
      arrowsVisible: false,
    };
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({
      arrowsVisible: true,
    });
  }

  handleMouseLeave() {
    this.setState({
      arrowsVisible: false,
    });
  }

  handleRightArrowClick() {
    const { rightPhotoIndex } = this.state;
    const { totalPhotos } = this.props;

    if (rightPhotoIndex === totalPhotos - 1) {
      this.setState(prevState => ({
        leftPhotoIndex: prevState.midPhotoIndex,
        midPhotoIndex: prevState.rightPhotoIndex,
        rightPhotoIndex: 0,
      }));
    } else if (rightPhotoIndex < totalPhotos - 1) {
      this.setState(prevState => ({
        leftPhotoIndex: prevState.midPhotoIndex,
        midPhotoIndex: prevState.rightPhotoIndex,
        rightPhotoIndex: prevState.rightPhotoIndex + 1,
      }));
    }
  }

  handleLeftArrowClick() {
    const { leftPhotoIndex } = this.state;
    const { totalPhotos } = this.props;

    if (leftPhotoIndex === 0) {
      this.setState(prevState => ({
        leftPhotoIndex: totalPhotos - 1,
        midPhotoIndex: prevState.leftPhotoIndex,
        rightPhotoIndex: prevState.midPhotoIndex,
      }));
    } else if (leftPhotoIndex > 0) {
      this.setState(prevState => ({
        leftPhotoIndex: prevState.leftPhotoIndex - 1,
        midPhotoIndex: prevState.leftPhotoIndex,
        rightPhotoIndex: prevState.midPhotoIndex,
      }));
    }
  }

  render() {
    const { leftPhotoIndex, midPhotoIndex, rightPhotoIndex, arrowsVisible } = this.state;
    const { photoData } = this.props;

    const carouselWithArrows = (
      <CarouselContainer onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <LeftArrow handleLeftArrowClick={this.handleLeftArrowClick} />
        <Slide photoData={photoData[leftPhotoIndex]} />
        <Slide photoData={photoData[midPhotoIndex]} />
        <Slide photoData={photoData[rightPhotoIndex]} />
        <RightArrow handleRightArrowClick={this.handleRightArrowClick} />
      </CarouselContainer>
    );

    const carouselNoArrows = (
      <CarouselContainer onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <Slide photoData={photoData[leftPhotoIndex]} />
        <Slide photoData={photoData[midPhotoIndex]} />
        <Slide photoData={photoData[rightPhotoIndex]} />
      </CarouselContainer>
    );

    if (arrowsVisible) {
      return carouselWithArrows;
    } else {
      return carouselNoArrows;
    }
  }
}

export default Carousel;
