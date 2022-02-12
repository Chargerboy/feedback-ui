import React from 'react';
import FeedBackItem from './FeedBackItem';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedBackContext from './context/FeedBackContext';
import Spinner from './Spinner';

const FeedBackList = () => {
  const { data, isLoading } = useContext(FeedBackContext);
  //   Case 1: if there is no data/feeedback items
  const noFBstyles = {
    marginTop: '50%',
    display: 'flex',
    fontSize: '40px',
    justifyContent: 'center',
    alignContent: 'center',
  };

  if (!isLoading && (!data || data.length === 0)) {
    return (
      <>
        <div style={noFBstyles}>No Feedbacks yet!</div>
      </>
    );
  }
  // end of Case 1

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {data.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedBackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedBackList;
