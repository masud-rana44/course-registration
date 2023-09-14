import PropTypes from "prop-types";
import Card from "./Card";

Cards.propTypes = {
  courses: PropTypes.array,
};

function Cards({ courses }) {
  return (
    <div className="col-span-3  grid grid-cols-3 gap-6">
      {courses.map((course) => (
        <Card key={course.id} course={course} />
      ))}
    </div>
  );
}

export default Cards;
