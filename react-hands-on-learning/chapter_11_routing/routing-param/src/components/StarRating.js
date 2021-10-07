import React from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar color={selected ? 'red' : 'grey'} onClick={onSelect} />
);

export default function StarRating({ totalStars = 5, selectedStars = 0, onRate = (f) => f }) {
  return (
    <>
      {/* totalStarsの数分のスターを表示 */}
      {[...Array(totalStars)].map((_, i) => (
        <Star key={i} selected={selectedStars > i} onSelect={() => onRate(i + 1)} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}
