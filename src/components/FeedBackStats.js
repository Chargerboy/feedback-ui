import React from 'react';
import { useContext } from 'react';
import FeedBackContext from './context/FeedBackContext';

const FeedBackStats = () => {
  const { data } = useContext(FeedBackContext);
  // calculating average
  let avg =
    data.reduce((acc, item) => {
      return acc + item.rating;
    }, 0) / data.length;

  // rounding decimal upto 1 decimal places and no decimal for whole numbers
  avg = avg.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="feedback-stats">
      <h4>{data.length} Reviews</h4>
      <h4>Average Rating: {isNaN(avg) ? '0' : avg}</h4>
    </div>
  );
};

export default FeedBackStats;
