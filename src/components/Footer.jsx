import Link from 'next/link';
import { FaGlobe, FaLocationArrow, FaMailBulk, FaPhone } from "react-icons/fa";
import FooterTitle from './FooterTitle';
import Title from './Title';

const Footer = () => {
  return (
    <div>
      <div className="bg-[#0E1025] px-5 lg:px-20 pt-7  ">
        <div className=" flex justify-between">
          <div className=" text-start">
            <Title title="join me" />
            <div className="flex gap-4 items-center justify-center">
              <h2 className=" font-bold text-3xl text-white">
                Md Rashed Hossain
              </h2>
              {/* <img src={star} alt="" /> */}
            </div>
          </div>
          <div></div>
        </div>
        <footer className="footer py-10 bg-[#0E1025] text-base-content">
          <aside>
            {/* <img src={logo1} alt="" /> */}
            <p className=" text-[#808088] text-start">
              I am Rashed Hossain a passionate web developer
              <br /> who loves coding.
            </p>
            <h2 className=" relative text-white mt-4">
              Social Links
              <span className=" absolute bg-pink-700 h-[2px] w-7 top-2 right-[-35px]"></span>
            </h2>
            <div className=" flex gap-2">
              {/* <img src={twitter} alt="" />
              <img src={linkedin} alt="" />
              <img src={telegram} alt="" />
              <img src={be} alt="" />
              <img src={dribbble} alt="" /> */}
            </div>
          </aside>
          <nav>
            <header>
              <FooterTitle title="Company" />
            </header>
            <Link href="/" className="link text-[#949498] link-hover">
              Home
            </Link>
            <Link href="/about" className="link text-[#949498] link-hover">
              About Us
            </Link>
            <Link href="/contact" className="link text-[#949498] link-hover">
              Contact
            </Link>
            <Link href="/projects" className="link text-[#949498] link-hover">
              Projects
            </Link>
          </nav>
          <nav>
            <header>
              <FooterTitle title="Our services" />
            </header>
            <Link href="/" className="link text-[#949498] link-hover">
              JavaScript
            </Link>
            <Link href="/" className="link text-[#949498] link-hover">
              React js
            </Link>
            <Link href="/" className="link text-[#949498] link-hover">
              Next js
            </Link>
            <Link href="/" className="link text-[#949498] link-hover">
              Tailwind css{" "}
            </Link>
          </nav>
          <nav>
            <header>
              <FooterTitle title="Contact" />
            </header>
            <Link
              href="/"
              className="link flex items-center gap-2 text-[#949498] link-hover"
            >
              <FaMailBulk /> rashedhossain416400@gmail.com
            </Link>
            <Link
              href="/"
              className="link text-[#949498] link-hover flex items-center gap-2"
            >
              <FaPhone /> (+880) 1521-787-495
            </Link>
            <Link
              href="/"
              className="link flex items-center gap-2 text-[#949498] link-hover"
            >
              <FaLocationArrow /> Satkhira,Khulna, Bangladesh
            </Link>
            <Link
              href="/"
              className="link flex items-center gap-2 text-[#949498] link-hover"
            >
              <FaGlobe />
              Rashed Hossain.com{" "}
            </Link>
          </nav>
        </footer>
        <footer className="footer border-t border-[#64656D] footer-center p-4 bg-[#0E1025] text-base-content">
          <aside>
            <p className=" text-[14px] text-[#64656D] flex items-center ">
              {" "}
              <span className=" text-[18px]">©</span> Copyright 2023 © Built &
              Designed by. Md.Rashed Hossain
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;