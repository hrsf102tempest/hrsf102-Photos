import React from 'react';

const Description = ({ description, userName }) => {
  if (description.length > 40) {
    description.slice(0, 39);
  }
  const caption = description.concat('...');
  return (
    <div>
      <span>{caption}</span>
    </div>
  );
};


export default Description;
