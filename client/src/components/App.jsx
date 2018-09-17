import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import Carousel from './Carousel.jsx';

const exampleData = require('../../../exampleData.js');

const AppWrapper = styled.div`
  position: absolute;
  max-width: 660px;
  height: 333px;
  left: 30px;
`;


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: exampleData,
    };
  }

  componentDidMount() {
    this.getPhotoData();
  }

  getPhotoData() {
    const bizId = window.location.pathname.slice(5, window.location.pathname.length - 1);
    $.ajax({
      url: `http://localhost:3002/businesses/${bizId}`,
      method: 'GET',
      error: (error) => {
        console.log('ERROR:', error);
      },
      success: (photoData) => {
        this.setState({
          data: photoData,
        });
      },
    });
  }

  render() {
    const { data } = this.state;
    return (
      <AppWrapper>
        <Carousel photoData={data} totalPhotos={data.length} />
      </AppWrapper>
    );
  }
}

export default App;
