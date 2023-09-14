import PropTypes from "prop-types";

Cart.propTypes = {
  selectedCourses: PropTypes.array,
};

function Cart({ selectedCourses }) {
  const totalCredit = selectedCourses.reduce(
    (acc, course) => acc + course.credit,
    0
  );

  const totalPrice = selectedCourses.reduce(
    (acc, course) => acc + course.price,
    0
  );

  return (
    <div className="mx-auto w-[312px]">
      <div className="bg-white p-6 rounded-xl">
        <h3 className="text-[#2F80ED] text-lg leading-[30px] font-bold">
          Credit Hour Remaining {20 - totalCredit} hr
        </h3>
        <span className="block h-[1px] w-full bg-[#1c1b1b33] my-4" />
        <h2 className="text-[#1C1B1B] text-xl font-bold mb-5">Course Name</h2>
        <ul className="text-[#1c1b1b99] leading-[30px]">
          {selectedCourses.map((course, idx) => (
            <li key={course.id}>
              {idx + 1} {course.title}
            </li>
          ))}
        </ul>
        <span className="block h-[1px] w-full bg-[#1c1b1b33] my-4" />
        <p className="text-[#1c1b1bcc] font-medium">
          Total Credit Hour : {totalCredit}
        </p>
        <span className="block h-[1px] w-full bg-[#1c1b1b33] my-4" />
        <p className="text-[#1c1b1bcc] font-medium">
          Total Price : {totalPrice} USD
        </p>
      </div>
    </div>
  );
}

export default Cart;
