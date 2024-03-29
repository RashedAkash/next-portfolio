import Image from 'next/image';
import Link from 'next/link';


const Banner = () => {
  return (
    <div className='py-10'>
      <header className=" dark:bg-white">
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

                <div >
                  <a href="">
                    <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-pink-700 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                      Download Resume
                    </button>
                  </a>
                 
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <div className="border-2 border-pink-700 rounded-full p-10">
                <Image
                  src="/md.png"
                  alt="me"
                  width={200}
                  height={200}
                  className="rounded-full p-10 bg-pink-700"
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;