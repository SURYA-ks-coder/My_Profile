import React from "react";
import "./Section.css";
// import img from "../Images/0960.png_300.png";

function Section2() {
  return (
    <div className="sm:grid grid-cols-2 gap-3 sm:h-[45rem] background-gradient items-center lg:px-20 px-10">
      <div className=" sm:w-[50rem] h-[50rem] bg-gray-600 rounded-full absolute  left-[-10rem] top-[40rem] mix-blend-multiply blur-[10rem] z-0"></div>
      <div className=" w-[70rem] h-[50rem] bg-gray-600 rounded-full absolute  right-[0rem] top-[30rem] mix-blend-multiply blur-[10rem] z-0"></div>

      <div className=" sm:w-[50rem] h-[50rem]  bg-fuchsia-600 rounded-full absolute  left-[-10rem] top-[70rem] mix-blend-multiply blur-[10rem] z-0"></div>
      <div className=" w-[40rem] h-[40rem] bg-yellow-500  rounded-full absolute  right-[1rem] top-[76rem] mix-blend-multiply blur-[10rem] z-0"></div>

      <div className=" text-white text-start items-start relative">
        <h1 className=" lg:text-6xl text-4xl font-bold py-5">My Advantage</h1>
        <p className="xl:py-3">
          I am a SOFTWARE ENGINEER, I have in depth knowledge of HTML5, CSS3,
          Tailwind CSS, Bootstrap 5, JavaScript, React.js, Node.js, Express.js,
          MongoDB and Git.
        </p>
        <div className="grid grid-cols-3 gap-3 mt-10 relative">
          <div className="xl:py-20 sm:py-5 bg-white rounded-2xl btn-gradient-3 text-center py-auto">
            HTML
          </div>
          <div className="xl:py-20 sm:py-5 bg-white rounded-2xl btn-gradient-4 text-center">
            CSS
          </div>
          <div className="xl:py-20 sm:py-5 bg-white rounded-2xl btn-gradient-5 text-center">
            Tailwind CSS
          </div>
          <div className="xl:py-20 sm:py-5 bg-white rounded-2xl btn-gradient-6 text-center">
            React
          </div>
          <div className="xl:py-20 sm:py-5 bg-white rounded-2xl btn-gradient-7 text-center">
            Mongodb
          </div>
          <div className="xl:py-20 sm:py-5 bg-white rounded-2xl btn-gradient-8 text-center">
            Bootstrap
          </div>
        </div>
      </div>
      <div
        className="relative lg:left-20 xl:h-[30rem] lg:h-[20rem] xl:w-96 lg:w-80 sm:m-5 py-20 text-white rounded-xl mt-10"
        id="bg-gradient"
      >
        <div className="flex items-start justify-center relative ">
          <div className="xl:mt-10 text-center">
            <h1 className="font-bold xl:text-9xl text-5xl ">05</h1>
            <h1 className="font-bold text-2xl">Months Of experience</h1>
          </div>
        </div>
        <div
          className=" relative xl:left-40 sm:left-[10rem] left-[9rem] top-[4rem] xl:top-20 sm:top-10 rounded-xl xl:flex xl:p-4 sm:p-2 module btn-gradient-2 xl:w-96 lg:w-60 sm:w-[10rem] w-[11rem]"
          id="bg-gradient2"
        >
          <h1 className="font-bold xl:text-6xl sm:text-2xl">100%</h1>
          <p className="font-bold lg:text-xl text-sm">clients Statisfaction</p>
        </div>
      </div>
      {/* <div className="">
        <div className=" bg-red-600 w-56 h-56 rounded-full absolute top-[90rem] right-0"></div>
      </div> */}
    </div>
  );
}

export default Section2;
