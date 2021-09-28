import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ selected = false }) => <FaStar color={selected ? 'red' : 'grey'} />;

export default function StarRating({ totalStars = 5, selectedStars = 0 }) {
  return (
    <>
      {/* totalStarsの数分のスターを表示 */}
      {[...Array(totalStars)].map((_, i) => (
        <Star key={i} selected={selectedStars > i} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}
