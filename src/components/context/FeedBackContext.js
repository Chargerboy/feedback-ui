import { useState, createContext, useEffect } from 'react';

const FeedBackContext = createContext();

export const FeedBackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
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
    const response = await fetch('/feedback?order=desc&sort=id');

    const resData = await response.json();
    setFeedback(resData);
    setIsLoading(false);
  };

  // CREATE feedback: context as 'add'
  const addHandler = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
  };

  // READ feedback: context as 'edit'
  const readHandler = (item) => {
    setFeedbackEdit({ item: item, edit: true });
  };

  // UPDATE feedback: context as 'update'
  const updHandler = async (id, updatedItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedItem),
    });

    const data = await response.json();
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  // DELETE feedback: context as 'del'
  const delHandler = async (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      await fetch(`/feedback/${id}`, { method: 'DELETE' });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedBackContext.Provider
      value={{
        data: feedback,
        feedbackEdit,
        isLoading,
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
