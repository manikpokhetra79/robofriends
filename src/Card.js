import React from 'react';

const Card = ({ robot }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <div className="row">
        <h1>{robot.name}</h1>
      </div>
      <div>
        <img
          src={`https://robohash.org/${robot.username}?size=200x200`}
          alt="robots"
        />
      </div>
      <div>
        <h2>{robot.username}</h2>
        <p>{robot.email}</p>
      </div>
    </div>
  );
};

export default Card;
