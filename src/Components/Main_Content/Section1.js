import React from "react";
import Profile from "../Images/profile1.png";
import MongoDb from "../Images/Mongodb.webp";
import Reactjs from "../Images/logo192.png";
import Tailwind from "../Images/Tailwind_CSS_Logo.svg.png";
import Nodejs from "../Images/Node.js-logo.png";

function Section1() {
  return (
    // <div className="flex justify-between px-20 h-[40rem] ">
    //   <div className=" c ">
    //     <h1 className=" text-5xl text-yellow-200 flex justify-start py-4">
    //       Hello,
    //     </h1>
    //     <h1 className="text-6xl flex justify-start py-2">I AM SURYA.</h1>
    //     <h2 className="text-2xl text-green-500 flex justify-start">
    //       MERN Stack Developer
    //     </h2>
    //     <p className="text-2xl flex justify-start py-2">
    //       Must explain to how all this mistaken idea denouncing pleasure pain
    //       the system and expound the actua.
    //     </p>
    //     <button className="flex justify-start bg-green-500 p-4 text-white rounded-full">
    //       Hire Me
    //     </button>
    //   </div>
    //   <div>
    //     <img src={Profile} alt="" className="h-full w-full" />
    //   </div>
    // </div>
    <div className="sm:grid grid-cols-2 gap-2 md:px-20 px-10 h-[60rem] w-full bg-gray-600 lg:items-start relative  top-0 ">
      <div className="relative  sm:top-72  font-bold z-[100] lg:pt-0 pt-32">
        <h1 className=" lg:text-6xl text-4xl text-yellow-200 flex justify-start py-4">
          Hello,
        </h1>
        <h1 className="lg:text-7xl text-5xl flex justify-start py-2 text-white">
          I AM SURYA.
        </h1>
        <h2 className="lg:text-5xl text-2xl text-green-500 flex justify-start py-5">
          Software Engineer
        </h2>
        <h2 className="lg:text-2xl text-lg text-white flex justify-start">
          Experience using ReactJS for front-end and MongoDB for the back-end
          database.
        </h2>
        {/* <h1 className="text-2xl text-white flex justify-start">
          pleasure pain the system and expound the actua.
        </h1> */}
        {/* <h1 className="text-2xl relative left-0 py-4 text-white">
          Must explain to how all this mistaken idea denouncing
        </h1>
        <h1 className="text-2xl relative left-0 py-4 text-white">
          pleasure pain the system and expound the actua.
        </h1> */}
        {/* <button className="flex justify-start bg-green-500 p-4 text-white rounded-full mt-6">
          Hire Me
        </button> */}
        <button className=" mt-6 p-3 px-5 bg-[#00264d] rounded-2xl text-white drop-shadow-2xl border-2  relative glow-on-hover">
          Submit
        </button>
      </div>
      <div className="py-10  ">
        <div className="relative sm:mt-32 xl:mt-2">
          {/* <div className=" relative left-0 top-56 w-32 h-32 z-50 bg-white rounded-xl">
            <img src={img1} alt="" />
          </div> */}
          <div className=" p-1 items-center  absolute xl:top-[20rem] sm:top-[16rem] top-[2rem]  sm:left-[4rem] left-[1rem] z-[100]  animate-bounce">
            <img
              src={MongoDb}
              alt=""
              className="p-3 bg-white text-center  rounded-xl xl:w-28 sm:w-20 w-20  "
            />
          </div>
          <div className=" p-1  items-center  absolute xl:top-[20rem] sm:top-[16rem] top-[2rem]  xl:left-[28rem] sm:left-[16rem] left-[15rem] z-[100] animate-bounce">
            <img
              src={Reactjs}
              alt=""
              className="p-3 bg-white text-center  rounded-xl xl:w-28 sm:w-20 w-20"
            />
          </div>
          <div className=" p-1  items-center  absolute xl:top-[40rem] sm:top-[32rem] top-[16rem]  sm:left-[3rem] left-[1rem] z-[100] animate-bounce">
            <img
              src={Nodejs}
              alt=""
              className=" bg-white text-center  rounded-xl xl:w-32 sm:w-20 w-20 sm:h-28 h-20 "
            />
          </div>
          <div className="  items-center  absolute xl:top-[40rem] sm:top-[32rem] top-[16rem]  xl:left-[28rem]  sm:left-[16rem] left-[15rem] z-[100]  animate-bounce">
            <img
              src={Tailwind}
              alt=""
              className="p-3 bg-white text-center  rounded-xl xl:w-28 sm:w-20 w-20"
            />
          </div>
          <div className="relative ">
            <img
              src={Profile}
              alt=""
              className="absolute  sm:top-72 top-[3rem] xl:left-[5rem]  md:left-[4rem] left-[3rem] sm:z-50 bg-[#5493ff] rounded-full w-[15rem] sm:w-[16rem]  xl:w-[30rem] h-[15rem] sm:h-[16rem] xl:h-[30rem] z-[80] "
            />
          </div>
        </div>
        <div className=" w-screen">
          <div className=" sm:w-[60rem] sm:h-[50rem] bg-red-500 rounded-full absolute top-[-10rem] left-[-20rem] mix-blend-multiply blur-[10rem] z-30"></div>
          <div className=" w-[50rem] h-[60rem] bg-[#113778]  absolute top-[-30rem] right-0 mix-blend-multiply z-40 rounded-tl-full rounded-bl-full blur-[10rem] brightness-150 "></div>
          <div className=" lg:w-[50rem] xl:h-[50rem] bg-yellow-500 rounded-full lg:absolute top-10 sm:left-96 mix-blend-multiply blur-[10rem] z-30"></div>
          <div className=" w-[90rem] xl:h-[10rem] bg-gray-800 rounded-full absolute top-[40rem] left-[-20rem] mix-blend-multiply blur-[10rem] z-50"></div>
          {/* <div className=" w-[50rem] h-[70rem] bg-gray-800 rounded-tl-full rounded-bl-full absolute top-[30rem] right-0 mix-blend-multiply blur-[8rem] z-0"></div> */}
        </div>
      </div>
    </div>
  );
}

export default Section1;
