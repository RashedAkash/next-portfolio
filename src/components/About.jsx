import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <header className=" dark:bg-[#F8F9FC]">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-[#000]  lg:text-4xl">
                Hello! I am <br />{" "}
                <span className="text-pink-700 ">Rashed Hossain</span>
              </h1>

              <p className="mt-3 text-gray-600 dark:text-gray-700">
                “Emerging web developer with good fundamentals, turning design
                into user-friendly websites. Committed to delivering visually
                appealing solutions. Eager to apply skills, collaborate, and
                create exceptional online experiences.”
              </p>

              <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-pink-700 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Download Resume
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <div className="card  bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="book"
                  width={300}
                  height={300}
                  className="rounded-xl"
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">Education</h2>
                <p className=" font-medium">
                  BBA in Accounting <br /> National University <br />{" "}
                  [2017-2022]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default About;