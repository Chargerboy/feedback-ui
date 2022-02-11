import React from 'react';
import { useState } from 'react';
import Card from './Card';
import Button from './Button';
import RatingSelect from './RatingSelect';
import { useContext, useEffect } from 'react';
import FeedBackContext from './context/FeedBackContext';

const FeedBackForm = () => {
  const {
    update,
    add,
    feedbackEdit: { item, edit },
  } = useContext(FeedBackContext);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(10);
  const [disabledBtn, setDisabledBtn] = useState(true);
  // to ask the user to enter atleat 10 words
  const [alerMessage, setAlerMessage] = useState('');

  useEffect(() => {
    if (edit) {
      setDisabledBtn(false);
      setReview(item.text);
      setRating(item.rating);
    }
  }, [item, edit]);

  const inputHandler = (e) => {
    if (review.length === 0) {
      setDisabledBtn(true);
      setAlerMessage(null);
    }
    //change here : increase minimum words require to enable submit
    else if (review.length !== 0 && review.split(' ').length <= 2) {
      setAlerMessage('A feedback must be 3 words or more!');
      setDisabledBtn(true);
    } else {
      setAlerMessage(null);
      setDisabledBtn(false);
    }
    setReview(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (review.split(' ').length >= 3 && review.trim('').length >= 5) {
      const newFeedback = {
        text: review,
        rating: rating,
      };

      if (edit) {
        update(item.id, newFeedback);
      } else {
        add(newFeedback);
      }
      setReview('');
    }
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <h2>How would you rate your service with us?</h2>
        {/* ratingSelHandler: handles the selected rating (number) to change its state when submitting */}
        <RatingSelect
          ratingSelHandler={(rating) => {
            setRating(rating);
          }}
        />
        <div className="input-group">
          <input
            onChange={inputHandler}
            type="text"
            placeholder="Write something.."
            value={review}
          />
          <Button type="submit" isDisabled={disabledBtn}>
            Send
          </Button>
        </div>
        {alerMessage && <div className="message">{alerMessage}</div>}
      </form>
    </Card>
  );
};

export default FeedBackForm;
