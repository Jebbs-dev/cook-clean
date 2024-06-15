import Image from "next/image";

const Reservation = () => {
  return (
    <div
      className="int:h-[100vh] max-w-[90vw] mx-auto grid py-10 md:grid-cols-2 gap-20 md:gap-5"
      id="contact"
    >
        <div>
          <h1 className="text-5xl font-semibold mb-6">
            Book Your Spot
          </h1>
          <div className="flex flex-col int:flex-row int:w-full int:space-x-4">
            <div className="int:w-1/2">
              <div className="flex flex-col mb-7">
                <label htmlFor="date" className="font-semibold">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="block w-full py-3 px-2 text-sm text-gray-900 border border-[#fbbc04] rounded-lg bg-[#fbbc04] bg-opacity-5 focus:ring-[#fbbc04] focus:outline-[#fbbc04] active:outline-[#fbbc04]"
                />
              </div>
              <div className="flex flex-col mb-7">
                <label htmlFor="date" className="font-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  id="fname"
                  className="block w-full py-3 px-2 text-sm text-gray-900 border border-[#fbbc04] rounded-lg bg-[#fbbc04] bg-opacity-5 focus:ring-[#fbbc04] focus:outline-[#fbbc04] active:outline-[#fbbc04]"
                  placeholder="Input your first name"
                />
              </div>
              <div className="flex flex-col mb-7">
                <label htmlFor="date" className="font-semibold">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lname"
                  className="block w-full py-3 px-2 text-sm text-gray-900 border border-[#fbbc04] rounded-lg bg-[#fbbc04] bg-opacity-5 focus:ring-[#fbbc04] focus:outline-[#fbbc04] active:outline-[#fbbc04]"
                  placeholder="Input your last name"
                />
              </div>
            </div>
            <div className="int:w-1/2">
              <div className="flex flex-col mb-7">
                <label htmlFor="date" className="font-semibold">
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  className="block w-full py-3 px-2 text-sm text-gray-900 border border-[#fbbc04] rounded-lg bg-[#fbbc04] bg-opacity-5 focus:ring-[#fbbc04] focus:outline-[#fbbc04] active:outline-[#fbbc04]"
                />
              </div>
              <div className="flex flex-col mb-7">
                <label htmlFor="date" className="font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="block w-full py-3 px-2 text-sm text-gray-900 border border-[#fbbc04] rounded-lg bg-[#fbbc04] bg-opacity-5 focus:ring-[#fbbc04] focus:outline-[#fbbc04] active:outline-[#fbbc04]"
                  placeholder="Input your email"
                />
              </div>
              <div className="flex flex-col mb-7">
                <label htmlFor="phone" className="font-semibold">
                  Phone
                </label>
                <input
                  type="number"
                  id="phone"
                  className="block w-full py-3 px-2 text-sm text-gray-900 border border-[#fbbc04] rounded-lg bg-[#fbbc04] bg-opacity-5 focus:ring-[#fbbc04] focus:outline-[#fbbc04] active:outline-[#fbbc04]"
                  placeholder="Input your phone number"
                />
              </div>
            </div>
          </div>
          <div>
            <textarea
              name="comments"
              className="w-full h-[200px] p-2 border border-[#fbbc04] rounded-md bg-[#fbbc04] bg-opacity-5 focus:outline-[#fbbc04] mb-7"
            ></textarea>
          </div>
          <button
            type="button"
            className="block text-white rounded-md bg-[#fbbc04] hover:bg-orange-700 focus:outline-none font-medium text-sm px-4 py-3 mt-2∂ text-center w-full md:w-[280px]"
          >
            Confirm Reservation
          </button>
        </div>
        <div>
          <img
            src="/reserve-image.jpg"
            alt=""
            className="rounded-lg "
          />
        </div>
    </div>
  );
};

export default Reservation;