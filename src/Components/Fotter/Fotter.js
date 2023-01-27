import React from "react";

function Fotter() {
  return (
    <div className="bg-gradient text-white  pb-24 ">
      <div className=" w-[40rem] h-[40rem] bg-green-600 rounded-full absolute  right-[1rem]  mix-blend-multiply blur-[10rem] z-0"></div>

      <div className="relative flex bg-red-500 text-white font-bold h-[20rem] items-center sm:w-11/12  rounded-br-[20rem] z-[100]">
        <h1 className="sm:text-6xl text-4xl w-10/12 p-2">
          Send me a message and make something together.
        </h1>
        <button className="sm:p-5 p-3 bg-black m-2 rounded-2xl">
          Contact Us
        </button>
      </div>
      <div className="sm:grid grid-cols-3 gap-4 relative lg:px-20 px-10 pt-20">
        <div className="py-5">
          <div className="text-2xl">Logo</div>
          <div>
            <p className="py-5">
              Welcome and open yourself to your truest love this year with us!
              With the Release Process
            </p>
          </div>
          <div className="flex relative">
            <ul className="flex">
              <li>F</li>
              <li>T</li>
              <li>I</li>
              <li>G</li>
            </ul>
          </div>
        </div>
        <div className="lg:grid grid-cols-2 gap-2 relative py-5">
          <div className="sm:pb-5">
            <h1 className="text-2xl">Navigation</h1>
            <ul>
              <li>About us</li>
              <li>Contact us</li>
              <li>Projects</li>
              <li>Recent Post</li>
            </ul>
          </div>
          <div className="sm:pt-5">
            <h1 className="text-2xl">All Services</h1>
            <ul>
              <li>About us</li>
              <li>Contact us</li>
              <li>Projects</li>
              <li>Recent Post</li>
            </ul>
          </div>
        </div>
        <div className="py-5">
          <h1 className="text-2xl">Newsletter</h1>
          <p className="py-5">
            Must explain to you how all this mistaken idea pleasure born and
            give you a complete account.
          </p>
          <input
            type="text"
            className="bg-gray-500 rounded-lg h-10 w-full"
            placeholder="Mail Box"
          />
        </div>
      </div>
    </div>
  );
}

export default Fotter;
