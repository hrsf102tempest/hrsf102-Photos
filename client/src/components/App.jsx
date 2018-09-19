import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import Carousel from './Carousel.jsx';

const exampleData = require('../../../exampleData.js');

const AppWrapper = styled.div`
  max-width: 660px;
  height: 333px;
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
    // function that gets all search params
    const parseQueryString = () => {
      const str = window.location.search;
      const objURL = {};
      str.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), ($0, $1, $2, $3) => {
        objURL[$1] = $3;
      });
      return objURL;
    };
    const params = parseQueryString();
    const bizId = params.id;
    // const bizId = window.location.pathname.slice(5, window.location.pathname.length - 1);
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
