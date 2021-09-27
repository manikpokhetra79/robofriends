import React from 'react';
import Card from './Card';
import { robots } from './robots';
const CardList = () => {
  return (
    <>
      {robots.map((robot, index) => (
        <Card robot={robot} key={index} />
      ))}
    </>
  );
};
export default CardList;
