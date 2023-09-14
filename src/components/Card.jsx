import PropTypes from 'prop-types';

Card.propTypes = {
  course: PropTypes.object,
}

function Card({ course }) {
  return <div>{course.title}</div>;
}

export default Card;
