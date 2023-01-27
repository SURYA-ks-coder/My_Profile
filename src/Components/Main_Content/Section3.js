import React, { useState } from "react";

function Section3() {
  const [Design, setDesign] = useState("design1");
  // const btnValue = [
  //   { id: 1, value: "design1" },
  //   { id: 1, value: "design2" },
  //   { id: 1, value: "design3" },
  // ];
  return (
    <div className=" text-center  bg-gradient items-center lg:px-20 px-10 pb-24  text-white ">
      {/* <div className=" w-[50rem] h-[50rem] bg-gray-600 rounded-full absolute  left-[-10rem]  mix-blend-multiply blur-[10rem] z-0"></div>
      <div className=" w-[70rem] h-[50rem] bg-gray-600 rounded-full absolute  right-[-10rem]  mix-blend-multiply blur-[10rem] z-0"></div> */}

      {/* <div className=" w-[50rem] h-[50rem] bg-yellow-500 rounded-full absolute  left-[-10rem]  mix-blend-multiply blur-[10rem] z-0"></div> */}
      {/* <div className=" w-[40rem] h-[40rem] bg-fuchsia-600 rounded-full absolute  right-[1rem]  mix-blend-multiply blur-[10rem] z-0"></div> */}

      <div className="sm:p-10">
        <h1 className=" text-6xl font-bold pt-20 relative">Projects</h1>
        <p className=" p-5 md:p-10 relative sm:w-[40rem] mx-auto">
          Must explain to you how all this mistaken idea of denouncing pleasure
          born and give you a complete account the system
        </p>
        <div className="flex justify-center pb-10 relative">
          <div className="grid grid-cols-3  font-bold sm:text-2xl">
            <button
              className={`${
                Design === "design1" ? " bg-transparent" : "bg-button2"
              } p-4 sm:px-10 border border-gray-600 rounded-full mr-5 hover:text-yellow-400 `}
              onClick={() => {
                setDesign("design1");
              }}
            >
              Design
            </button>
            <button
              className="p-4 sm:px-10 border border-transparent focus:bg-transparent focus:border focus:border-gray-600 rounded-full mr-5  hover:text-yellow-400 bg-button2"
              onClick={() => {
                setDesign("design2");
              }}
            >
              Design
            </button>
            <button
              className="p-4 sm:px-10 border border-transparent focus:bg-transparent focus:border focus:border-gray-600  rounded-full ml-5  hover:text-yellow-400 bg-button2"
              onClick={() => {
                setDesign("design3");
              }}
            >
              Design
            </button>
          </div>
        </div>
      </div>
      {Design === "design1" && (
        <div className="sm:grid grid-cols-3 pb-2 relative  ">
          <div className="lg:p-10 pb-20 border-2 border-gray-600 rounded-2xl m-2 btn-gradient-card">
            <div className="rounded-full  w-28 m-5  mx-auto bg-button hover:bg-green-600">
              <p className="p-10">icons</p>
            </div>
            <h1 className="p-5 font-bold text-2xl">Graphic Design</h1>
            <p className="p-5">
              Explain to you how all this mistaken idea of denouncing pleasure
              born and give you complete account the system.
            </p>
            <button>LEARN MORE</button>
          </div>
          <div className="lg:p-10 pb-20 border-2 border-gray-500 rounded-2xl m-2 btn-gradient-card group/item">
            <div className="rounded-full  w-28 m-5  mx-auto bg-button hover:bg-green-600">
              <p className="p-10">icons</p>
            </div>
            <h1 className="p-5 font-bold text-2xl">Graphic Design</h1>
            <p className="p-5">
              Explain to you how all this mistaken idea of denouncing pleasure
              born and give you complete account the system.
            </p>
            <button>LEARN MORE</button>
          </div>
          <div className="lg:p-10 pb-20 border border-gray-500 rounded-2xl m-2 btn-gradient-card">
            <div className="rounded-full  w-28 m-5  mx-auto bg-button hover:bg-green-600">
              <p className="p-10">icons</p>
            </div>
            <h1 className="p-5 font-bold text-2xl">Graphic Design</h1>
            <p className="p-5">
              Explain to you how all this mistaken idea of denouncing pleasure
              born and give you complete account the system.
            </p>
            <button>LEARN MORE</button>
            {/* <a
            class="group/edit invisible hover:bg-slate-200 group-hover/item:visible ..."
            href="tel:{person.phone}"
          >
            <span class="group-hover/edit:text-gray-700 ...">Call</span>
            <svg class="group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500 ...">
              ...
            </svg>
          </a> */}
          </div>
        </div>
      )}
      {Design === "design2" && (
        <div className="sm:grid grid-cols-3 pb-2 relative  ">
          <div className="lg:p-10 pb-20 border-2 border-gray-600 rounded-2xl m-2 btn-gradient-card">
            <div className="rounded-full  w-28 m-5  mx-auto bg-button hover:bg-green-600">
              <p className="p-10">icons</p>
            </div>
            <h1 className="p-5 font-bold text-2xl">Graphic </h1>
            <p className="p-5">
              Explain to you how all this mistaken idea of denouncing pleasure
              born and give you complete account the system.
            </p>
            <button>LEARN MORE</button>
          </div>
          <div className="lg:p-10 pb-20 border-2 border-gray-500 rounded-2xl m-2 btn-gradient-card group/item">
            <div className="rounded-full  w-28 m-5  mx-auto bg-button hover:bg-green-600">
              <p className="p-10">icons</p>
            </div>
            <h1 className="p-5 font-bold text-2xl">Graphic </h1>
            <p className="p-5">
              Explain to you how all this mistaken idea of denouncing pleasure
              born and give you complete account the system.
            </p>
            <button>LEARN MORE</button>
          </div>
          <div className="lg:p-10 pb-20 border border-gray-500 rounded-2xl m-2 btn-gradient-card">
            <div className="rounded-full  w-28 m-5  mx-auto bg-button hover:bg-green-600">
              <p className="p-10">icons</p>
            </div>
            <h1 className="p-5 font-bold text-2xl">Graphic </h1>
            <p className="p-5">
              Explain to you how all this mistaken idea of denouncing pleasure
              born and give you complete account the system.
            </p>
            <button>LEARN MORE</button>
            {/* <a
            class="group/edit invisible hover:bg-slate-200 group-hover/item:visible ..."
            href="tel:{person.phone}"
          >
            <span class="group-hover/edit:text-gray-700 ...">Call</span>
            <svg class="group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500 ...">
              ...
            </svg>
          </a> */}
          </div>
        </div>
      )}
      {Design === "design3" && (
        <div className="sm:grid grid-cols-3 pb-2 relative  ">
          <div className="lg:p-10 pb-20 border-2 border-gray-600 rounded-2xl m-2 btn-gradient-card">
            <div className="rounded-full  w-28 m-5  mx-auto bg-button hover:bg-green-600">
              <p className="p-10">icons</p>
            </div>
            <h1 className="p-5 font-bold text-2xl">Graphic Design</h1>
            <p className="p-5">
              Explain to you how all this mistaken idea of denouncing pleasure
              born and give you complete accou sfdfbc sdclsd hsjsachnc
              sichicbdcnt the system.
            </p>
            <button>LEARN MORE</button>
          </div>
          <div className="lg:p-10 pb-20 border-2 border-gray-500 rounded-2xl m-2 btn-gradient-card group/item">
            <div className="rounded-full  w-28 m-5  mx-auto bg-button hover:bg-green-600">
              <p className="p-10">icons</p>
            </div>
            <h1 className="p-5 font-bold text-2xl">Graphic Design</h1>
            <p className="p-5">
              Explain to you how all this mistaken idea of denouncing pleasure
              born and give you sdcdhoped uferfbc iwdcgyg jsdchdgcb complete
              account the system.
            </p>
            <button>LEARN MORE</button>
          </div>
          <div className="lg:p-10 pb-20 border border-gray-500 rounded-2xl m-2 btn-gradient-card">
            <div className="rounded-full  w-28 m-5  mx-auto bg-button hover:bg-green-600">
              <p className="p-10">icons</p>
            </div>
            <h1 className="p-5 font-bold text-2xl">Graphic Design</h1>
            <p className="p-5">
              Explain to you how all this mistaken idea of denouncing pleasure
              born and give you fdknmfrcygscns scsdchbwef akschccnmcoei complete
              account the system.
            </p>
            <button>LEARN MORE</button>
            {/* <a
            class="group/edit invisible hover:bg-slate-200 group-hover/item:visible ..."
            href="tel:{person.phone}"
          >
            <span class="group-hover/edit:text-gray-700 ...">Call</span>
            <svg class="group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500 ...">
              ...
            </svg>
          </a> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Section3;
