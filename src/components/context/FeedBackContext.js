import { useState, createContext, useEffect } from 'react';
import { v4 as uidv4 } from 'uuid';

const FeedBackContext = createContext();

export const FeedBackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false, // checker to now if to edit a particular feedback item
  });

  useEffect(() => {
    fetchHandler();
  }, []);

  // FETCH feeedbacks
  const fetchHandler = async () => {
    const response = await fetch(
      'http://localhost:5001/feedback?order=desc&sort=id'
    );

    const resData = await response.json();
    setFeedback(resData);
  };

  // CREATE feedback: context as 'add'
  const addHandler = (newFeedback) => {
    newFeedback.id = uidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // READ feedback: context as 'edit'
  const readHandler = (item) => {
    setFeedbackEdit({ item: item, edit: true });
  };

  // UPDATE feedback: context as 'update'
  const updHandler = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };

  // DELETE feedback: context as 'del'
  const delHandler = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedBackContext.Provider
      value={{
        data: feedback,
        feedbackEdit,
        add: addHandler,
        del: delHandler,
        edit: readHandler,
        update: updHandler,
      }}
    >
      {children}
    </FeedBackContext.Provider>
  );
};

export default FeedBackContext;
