import PropTypes from "prop-types";
import Card from "./Card";

Cards.propTypes = {
  courses: PropTypes.array,
};

function Cards({ courses }) {
  return (
    <div className="grid col-span-3 grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Card key={course.id} course={course} />
      ))}
    </div>
  );
}

export default Cards;
