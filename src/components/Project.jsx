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
          <h2 className="card-title">Digital-Agency!</h2>
          <p>Next Js + Tailwind css + Html</p>
          <div className="card-actions justify-between">
            <a href="https://design-agency-alpha.vercel.app/">
              <button className="btn text-white bg-pink-700">Live link</button>
            </a>
            <a href="https://github.com/RashedAkash/design-agency">
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
          <h2 className="card-title">Webwhiz!</h2>
          <p>React js + Tailwind css +  Html</p>
          <div className="card-actions justify-between">
            <a href="https://portfolio-1bac8.web.app/">
              <button className="btn text-white bg-pink-700">Live link</button>
            </a>
            <a href="https://github.com/RashedAkash/webWhiz">
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
          <p>React js + Tailwind css + Firebase + Html</p>
          <div className="card-actions justify-between">
            <a href="https://event-lab-551ad.web.app/">
              <button className="btn text-white bg-pink-700">Live link</button>
            </a>
            <a href="https://github.com/RashedAkash/event-lab">
              <button className="btn border border-pink-700">Code link</button>
            </a>
          </div>
        </div>
      </div>
      {/* project-4 */}
      <div className="card card-compact  bg-base-100 shadow-xl">
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
          <h2 className="card-title">FinessGym!</h2>
          <p>React js + Node js + Firebase + Tailwind + Html</p>
          <div className="card-actions justify-between">
            <a href="https://fitness-b1aa9.web.app/">
              <button className="btn text-white bg-pink-700">Live link</button>
            </a>
            <a href="https://github.com/RashedAkash/fitness-gym">
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
          <h2 className="card-title">Fruit Brust!</h2>
          <p>Html + Tailwind css</p>
          <div className="card-actions justify-between">
            <a href="https://rashedakash.github.io/fruit-brust/">
              <button className="btn text-white bg-pink-700">Live link</button>
            </a>
            <a href="https://github.com/RashedAkash/fruit-brust">
              <button className="btn border border-pink-700">Code link</button>
            </a>
          </div>
        </div>
      </div>
      {/* project-6 */}
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
          <h2 className="card-title">Flower Shop!</h2>
          <p>Html + Tailwind css</p>
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
    </div>
  );
};

export default Project;