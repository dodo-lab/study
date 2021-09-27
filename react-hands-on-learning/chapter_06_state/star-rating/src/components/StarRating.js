import React from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ selected = false }) => <FaStar color={selected ? 'red' : 'grey'} />;

export default function StarRating({ totalStars = 5 }) {
  return (
    <div>
      {[...Array(totalStars)].map((_, i) => (
        <Star key={i} />
      ))}
    </div>
  );
}
