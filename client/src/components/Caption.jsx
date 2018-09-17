import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
`;

const Avatar = styled.div`
  display: inline-block;
  position: absolute;
  color: rgb(240,240,240);
  width: 25px;
  height: 25px;
  top: 15px;
  left: 8px;
`;
const StoryContainer = styled.div`
  display: inline-block;
  position: absolute;
  width: 185px;
  height: 36px;
  left: 35px;
  font-family: "Arial", Times, serif;
`;

const StyledDescription = styled.span`
  font-weight: bold;
  color: white;
  font-size: 11px;
`;

const StyledBy = styled.span`
  font-size: 11px;
  color: rgb(220,220,220);
`;

const StyledUser = styled.span`
  font-size: 11px;
  color: rgb(220,220,220);
`;

const Caption = ({ description, userName }) => {
  if (description.length > 40) {
    description = description.slice(0, 39);
  }
  const story = description.concat('...');

  return (
    <Wrapper>
      <Avatar>
        <i className="fas fa-user fa-lg" />
      </Avatar>
      <StoryContainer>
        <StyledDescription>{story}</StyledDescription>
        <StyledBy> by </StyledBy>
        <StyledUser>{userName}</StyledUser>
      </StoryContainer>
    </Wrapper>
  );
};


export default Caption;
