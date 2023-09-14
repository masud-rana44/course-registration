import PropTypes from "prop-types";

Card.propTypes = {
  course: PropTypes.object,
};

function Card({ course }) {
  const { imageUrl, title, description, price, credit } = course;

  return (
    <div>
      <figure>
        <img src={imageUrl} alt={`Image of ${title}`} />
      </figure>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="flex items-center justify-between">
          <div>Price: {price}</div>
          <div>Credit: {credit}hr</div>
        </div>
        <button
          type="button"
          className="w-full bg-blue-600 rounded-lg py-2 text-white"
        >
          Select
        </button>
      </div>
    </div>
  );
}

export default Card;
