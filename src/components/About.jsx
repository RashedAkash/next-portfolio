import Image from 'next/image';
import React from 'react';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <div className=" py-16">
      <div className=' text-center md:text-left'>
        <SectionTitle text="About me" />
      </div>
      <header className=" dark:bg-[#F8F9FC]">
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex gap-7">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <div className="collapse collapse-arrow bg-base-200">
                  <input type="radio" name="my-accordion-2" defaultChecked />
                  <div className="collapse-title text-xl text-pink-700 font-medium">
                    Next js
                  </div>
                  <div className="collapse-content">
                    <p>
                      Next.js offers a powerful set of features and
                      optimizations that make it a preferred choice for building
                      modern web applications with React, particularly those
                      that require server-side rendering or static site
                      generation capabilities. Its simplicity, performance
                      benefits, and seamless integration with the React
                      ecosystem have contributed to its widespread adoption in
                      the development community.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-xl text-pink-700 font-medium">
                    JavaScript
                  </div>
                  <div className="collapse-content">
                    <p>
                      JavaScript is a versatile programming language commonly
                      used for web development. At its core, JavaScript revolves
                      around the concept of variables, which act as containers
                      for storing different types of data. Functions are blocks
                      of code that perform specific tasks and can be reused
                      throughout a program. Arrays are used to store multiple
                      values, while conditional statements, such as if, else if,
                      and else, enable developers to execute different code
                      blocks based on specific conditions. Loops, such as for
                      and while, allow for repetitive execution of code until a
                      certain condition is met. Objects are key-value pairs that
                      represent complex data structures, offering a way to
                      organize and manipulate data efficiently. Understanding
                      these fundamental concepts is crucial for building dynamic
                      and interactive web applications with JavaScript.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-pink-700 text-xl font-medium">
                    React js
                  </div>
                  <div className="collapse-content">
                    <p>
                      React.js, often referred to simply as React, is an
                      open-source JavaScript library maintained by Facebook for
                      building user interfaces (UIs) and single-page
                      applications. It's known for its declarative and
                      component-based approach, which allows developers to
                      create reusable UI components and manage their state
                      efficiently.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center hover:-translate-y-10 transition-all duration-300  justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <Image
                    className=" hover:scale-105 transition-all duration-300 rounded-xl"
                    src="https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="book"
                    width={300}
                    height={300}
                    
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
    </div>
  );
};

export default About;