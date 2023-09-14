import PropTypes from 'prop-types';
import Card from './Card';

Cards.propTypes = {
  courses: PropTypes.array,
}

function Cards({ courses }) {
  return <div>{
      courses.map(course => <Card key={course.id} course={course}/>)
    }</div>;
}

export default Cards;
