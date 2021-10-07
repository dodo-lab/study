import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useColors } from './ColorProvider';
import StarRating from './StarRating';

export default function Color({ id, title, color, rating }) {
  const navigate = useNavigate();
  const { rateColor, removeColor } = useColors();

  return (
    <section onClick={() => navigate(`/${id}`)}>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStars={rating}
        onRate={(rating) => rateColor(id, rating)}
      />
    </section>
  );
}
