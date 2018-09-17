import React from 'react';
import styled from 'styled-components';
import Slide from './Slide.jsx';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';

const CarouselContainer = styled.div`
  position: relative;
  width: 660px;
  height: 300px;
`;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftPhotoIndex: 0,
      midPhotoIndex: 1,
      rightPhotoIndex: 2,
      arrowsVisible: false,
      leftPhotoActive: false,
      midPhotoActive: true,
      rightPhotoActive: false,
    };
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleActivePhotoLeft = this.handleActivePhotoLeft.bind(this);
    this.handleActivePhotoMid = this.handleActivePhotoMid.bind(this);
    this.handleActivePhotoRight = this.handleActivePhotoRight.bind(this);
    this.handleInactivePhoto = this.handleInactivePhoto.bind(this);
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

  handleActivePhotoLeft() {
    this.setState({
      leftPhotoActive: true,
      midPhotoActive: false,
      rightPhotoActive: false,
    });
  }

  handleActivePhotoMid() {
    this.setState({
      leftPhotoActive: false,
      midPhotoActive: true,
      rightPhotoActive: false,
    });
  }

  handleActivePhotoRight() {
    this.setState({
      leftPhotoActive: false,
      midPhotoActive: false,
      rightPhotoActive: true,
    });
  }

  handleInactivePhoto() {
    this.setState({
      leftPhotoActive: false,
      midPhotoActive: true,
      rightPhotoActive: false,
    });
  }

  render() {
    const { leftPhotoIndex, midPhotoIndex, rightPhotoIndex, arrowsVisible, leftPhotoActive, midPhotoActive, rightPhotoActive } = this.state;
    const { photoData } = this.props;

    const carouselWithArrows = (
      <CarouselContainer onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <LeftArrow handleLeftArrowClick={this.handleLeftArrowClick} />
        <Slide photoData={photoData[leftPhotoIndex]} active={leftPhotoActive} handleActivePhoto={this.handleActivePhotoLeft} handleInactivePhoto={this.handleInactivePhoto} />
        <Slide photoData={photoData[midPhotoIndex]} active={midPhotoActive} handleActivePhoto={this.handleActivePhotoMid} handleInactivePhoto={this.handleInactivePhoto} />
        <Slide photoData={photoData[rightPhotoIndex]} active={rightPhotoActive} handleActivePhoto={this.handleActivePhotoRight} handleInactivePhoto={this.handleInactivePhoto} />
        <RightArrow handleRightArrowClick={this.handleRightArrowClick} />
      </CarouselContainer>
    );

    const carouselNoArrows = (
      <CarouselContainer onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <Slide photoData={photoData[leftPhotoIndex]} />
        <Slide photoData={photoData[midPhotoIndex]} active={midPhotoActive} handleActivePhoto={this.handleActivePhotoMid} handleInactivePhoto={this.handleInactivePhoto} />
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
