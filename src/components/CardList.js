import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <>
      {robots.map((robot, index) => (
        <Card robot={robot} key={index} />
      ))}
    </>
  );
};
export default CardList;
