import PropTypes from "prop-types";

import { doller, book } from "../assets";

Card.propTypes = {
  course: PropTypes.object,
  handleSelectCourse: PropTypes.func,
};

function Card({ course, handleSelectCourse }) {
  const { imageUrl, title, description, price, credit } = course;

  return (
    <div className="p-4 bg-white rounded-xl flex flex-col">
      <figure>
        <img
          className="rounded-lg h-[150px]"
          src={imageUrl}
          alt={`Image of ${title}`}
        />
      </figure>
      <div className="mt-4 flex flex-col flex-1">
        <h3 className="text-[#1C1B1B] text-lg font-bold mb-1">{title}</h3>
        <p className="text-[#1c1b1b99] mb-5 flex-1">{description}</p>
        <div className="flex items-center justify-between text-[#1c1b1b99] mb-6 mt-auto">
          <div className="flex items-center gap-2">
            <img className="h-6 w-6" src={doller} alt="icon" />{" "}
            <p>Price: {price}</p>
          </div>
          <div className="flex items-center gap-2">
            <img className="h-6 w-6" src={book} alt="icon" />{" "}
            <p>Credit: {credit}hr</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => handleSelectCourse(course)}
          className="w-full bg-[#2F80ED] hover:bg-[#2F80ED]/90 transition rounded-lg py-2 text-white"
        >
          Select
        </button>
      </div>
    </div>
  );
}

export default Card;
