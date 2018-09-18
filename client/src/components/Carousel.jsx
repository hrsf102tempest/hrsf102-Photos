import React from 'react';
import styled from 'styled-components';
import Slide from './Slide.jsx';

const CarouselContainer = styled.div`
  position: relative;
  width: 660px;
  height: 300px;
`;

const LeftArrowContainer = styled.div`
  position: absolute;
  top: 40%;
  display: inline-block;
  height: 48px;
  width: 24px;
  padding-left: 24px;
  z-index: 2;
  color: #ECF0F1;

  &:hover {
    color: #FFFFFF;
  }
`;

const RightArrowContainer = styled.div`
  position: absolute;
  top: 40%;
  right: 0%
  display: inline-block;
  height: 48px;
  width: 48px;
  z-index: 2;
  color: #ECF0F1;

  &:hover {
    color: #FFFFFF;
  }
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
        <LeftArrowContainer onClick={this.handleLeftArrowClick}>
          <i className="fas fa-angle-left fa-3x" />
        </LeftArrowContainer>
        <Slide photoData={photoData[leftPhotoIndex]} active={leftPhotoActive} handleActivePhoto={this.handleActivePhotoLeft} handleInactivePhoto={this.handleInactivePhoto} />
        <Slide photoData={photoData[midPhotoIndex]} active={midPhotoActive} handleActivePhoto={this.handleActivePhotoMid} handleInactivePhoto={this.handleInactivePhoto} />
        <Slide photoData={photoData[rightPhotoIndex]} active={rightPhotoActive} handleActivePhoto={this.handleActivePhotoRight} handleInactivePhoto={this.handleInactivePhoto} />
        <RightArrowContainer onClick={this.handleRightArrowClick}>
          <i className="fas fa-angle-right fa-3x" />
        </RightArrowContainer>
      </CarouselContainer>
    );

    const carouselNoArrows = (
      <CarouselContainer onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <Slide photoData={photoData[leftPhotoIndex]} active={leftPhotoActive} />
        <Slide photoData={photoData[midPhotoIndex]} active={midPhotoActive} />
        <Slide photoData={photoData[rightPhotoIndex]} active={rightPhotoActive} />
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
