import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  // if (true) {
  //   throw new Error('Noooooo');
  // }
  return (
    <>
      {robots.map((robot, index) => (
        <Card robot={robot} key={index} />
      ))}
    </>
  );
};
export default CardList;
