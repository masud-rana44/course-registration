import PropTypes from "prop-types";
import Card from "./Card";

Cards.propTypes = {
  courses: PropTypes.array,
  handleSelectCourse: PropTypes.func,
};

function Cards({ courses, handleSelectCourse }) {
  return (
    <div className="w-[312px] mx-auto sm:w-auto flex-1 grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Card
          key={course.id}
          course={course}
          handleSelectCourse={handleSelectCourse}
        />
      ))}
    </div>
  );
}

export default Cards;
