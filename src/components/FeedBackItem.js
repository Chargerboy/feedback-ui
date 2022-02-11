import Card from './Card';
import PropTypes from 'prop-types';
import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import FeedBackContext from './context/FeedBackContext';

const FeedBackItem = ({ item }) => {
  const { del, edit } = useContext(FeedBackContext);
  return (
    <Card reverse={false}>
      {/* reverse: change bg&txt color of */}
      <div className="num-display">{item.rating}</div>
      <button
        onClick={() => {
          del(item.id);
        }}
        className="close"
      >
        <FaTimes color="black" />
      </button>
      <button className="edit">
        <FaEdit color="black" onClick={() => edit(item)} />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

FeedBackItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default FeedBackItem;
