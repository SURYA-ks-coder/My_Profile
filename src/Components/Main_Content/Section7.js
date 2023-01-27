import React from "react";

function Section7() {
  return (
    <div className="text-center  bg-gradient items-center sm:px-20 px-10 pb-24  text-white ">
      <div className=" sm:w-[50rem] h-[50rem] bg-yellow-500 rounded-full absolute  left-[-10rem]  mix-blend-multiply blur-[10rem] z-0"></div>
      <div className="relative z-50">
        <h1 className=" text-6xl font-bold pt-20 relative text-center">
          Let’s Talk
        </h1>
        <p className="sm:p-10 py-10 relative sm:w-[40rem] mx-auto text-center">
          Must explain to you how all this mistaken idea of denouncing pleasure
          born and give you a complete account the system
        </p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Click me
        </button>
      </div>
      <div className="lg:grid grid-cols-2 gap-4 relative ">
        <div className="sm:p-20 bg-[#535151] rounded-3xl px-2 z-[100]">
          <h1 className="p-5 pb-10 text-2xl font-bold ">Get In Touch</h1>
          <form action="" className=" ">
            <div className="sm:flex justify-evenly ">
              <input
                type="text"
                className="sm:w-56 w-full h-20 border-b-2 border-b-[#8c8b87] bg-transparent before:border-transparent after:border-transparent "
                placeholder="Your Name"
              />
              <input
                type="text"
                className="sm:w-56 w-full h-20 border-b-2 border-b-[#8c8b87] bg-transparent ml-2"
                placeholder="Your Email"
              />
            </div>
            <div className="">
              <input
                type="text"
                className="w-full h-20 border-b-2 border-b-[#8c8b87] bg-transparent "
                placeholder="Your Phone"
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full h-24 border-b-2 border-b-[#8c8b87] bg-transparent "
                placeholder="Choose a Service"
              />
            </div>
            <div>
              <textarea
                name=""
                id=""
                cols="10"
                rows="5"
                className="w-full h-32 border-b-2 border-b-[#8c8b87] bg-transparent "
                placeholder="Message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                // className=" p-4 px-10 after:border-5 after:bg-gray-50 border-gray-200 rounded-full mr-5 hover:text-yellow-400 bg-button2 "
                className="p-4 sm:px-10 border border-transparent focus:bg-transparent focus:border focus:border-gray-600  rounded-full ml-5  hover:text-yellow-400 bg-button2 relative"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className=" lg:w-[40rem] h-[40rem] bg-[#ff0000c3] rounded-full absolute  right-0 top-56  mix-blend-multiply blur-[30rem] z-0"></div>

        <div className="sm:p-5 sm:w-[30rem] sm:pl-20 z-[100]">
          <div className="p-5 bg-[#535151] rounded-2xl m-5">
            <h1 className="text-4xl font bold">25 North Street,Dubai</h1>
            <div className="flex justify-center">
              <p>icon</p>
              <p className=" text-2xl p-2">Office Address</p>
            </div>
          </div>
          <div className="p-5 bg-[#535151] rounded-2xl m-5">
            <h1 className="text-4xl font bold">25 North Street,Dubai</h1>
            <div className="flex justify-center">
              <p>icon</p>
              <p className=" text-2xl p-2">Office Address</p>
            </div>
          </div>
          <div className="p-5 bg-[#535151] rounded-2xl m-5">
            <h1 className="text-4xl font bold">25 North Street,Dubai</h1>
            <div className="flex justify-center">
              <p>icon</p>
              <p className=" text-2xl p-2">Office Address</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section7;
