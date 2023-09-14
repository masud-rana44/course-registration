function Cart() {
  return (
    <div className="bg-white p-6 rounded-xl">
      <h3 className="text-[#2F80ED] text-lg leading-[30px] font-bold">
        Credit Hour Remaining 7 hr
      </h3>
      <span className="block h-[1px] w-full bg-[#1c1b1b33] my-4" />
      <h2 className="text-[#1C1B1B] text-xl font-bold mb-5">Course Name</h2>
      <ul className="text-[#1c1b1b99] leading-[30px]">
        <li>1 Introduction to c programming</li>
        <li>2 Introduction to C++ for DSA</li>
        <li>3 Software Engineering</li>
      </ul>
      <span className="block h-[1px] w-full bg-[#1c1b1b33] my-4" />
      <p className="text-[#1c1b1bcc] font-medium">Total Credit Hour : 13</p>
      <span className="block h-[1px] w-full bg-[#1c1b1b33] my-4" />
      <p className="text-[#1c1b1bcc] font-medium">Total Price : 48000 USD</p>
    </div>
  );
}

export default Cart;
