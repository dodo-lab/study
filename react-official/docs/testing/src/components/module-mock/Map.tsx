import React from 'react';

type Props = {
  center: {
    lat: number;
    long: number;
  };
};

const Map: React.FC<Props> = ({ center }) => {
  return (
    <div>
      <p>{center.lat}</p>
      <p>{center.long}</p>
    </div>
  );
};

export default Map;
