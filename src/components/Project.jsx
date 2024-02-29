import Image from 'next/image';
import React from 'react';

const Project = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      {/* project-1 */}
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <Image
            src="/design.png"
            alt="pr"
            width={350}
            height={300}
            style={{
              width: "auto",
              height: "auto",
            }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">EventLab!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-between">
            <a href="">
              <button className="btn text-white bg-pink-700">Live link</button>
            </a>
            <a href="">
              <button className="btn border border-pink-700">Code link</button>
            </a>
          </div>
        </div>
      </div>
      {/* project-2 */}
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <Image
            src="/webwhizpng.png"
            alt="pr"
            width={350}
            height={300}
            style={{
              width: "auto",
              height: "auto",
            }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">EventLab!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-between">
            <a href="">
              <button className="btn text-white bg-pink-700">Live link</button>
            </a>
            <a href="">
              <button className="btn border border-pink-700">Code link</button>
            </a>
          </div>
        </div>
      </div>
      {/* project-3 */}
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <Image
            src="/eventlab.png"
            alt="pr"
            width={350}
            height={300}
            style={{
              width: "auto",
              height: "auto",
            }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">EventLab!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-between">
            <a href="">
              <button className="btn text-white bg-pink-700">Live link</button>
            </a>
            <a href="">
              <button className="btn border border-pink-700">Code link</button>
            </a>
          </div>
        </div>
      </div>
      {/* project-4 */}
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <Image
            src="/flowershop.png"
            alt="pr"
            width={350}
            height={300}
            style={{
              width: "auto",
              height: "auto",
            }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">EventLab!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-between">
            <a href="https://rashedakash.github.io/flower-shop/">
              <button className="btn text-white bg-pink-700">Live link</button>
            </a>
            <a href="https://github.com/RashedAkash/flower-shop">
              <button className="btn border border-pink-700">Code link</button>
            </a>
          </div>
        </div>
      </div>
      {/* project-5 */}
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <Image
            src="/fruit.png"
            alt="fr"
            width={350}
            height={300}
            style={{
              width: "auto",
              height: "auto",
            }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">EventLab!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-between">
            <a href="">
              <button className="btn text-white bg-pink-700">Live link</button>
            </a>
            <a href="">
              <button className="btn border border-pink-700">Code link</button>
            </a>
          </div>
        </div>
      </div>
      {/* project-6 */}
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <Image
            src="/fitnesspng.png"
            alt="ft"
            width={350}
            height={300}
            style={{
              width: "auto",
              height: "auto",
            }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">EventLab!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-between">
            <a href="">
              <button className="btn text-white bg-pink-700">Live link</button>
            </a>
            <a href="">
              <button className="btn border border-pink-700">Code link</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;