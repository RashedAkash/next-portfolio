import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-gray-900 text-white">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover"> Front End Development</a>
          <a className="link link-hover">Back End Development</a>
          <a className="link link-hover">Next js</a>
          <a className="link link-hover">React js</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link href="/about" className="link link-hover">
            About us
          </Link>
          <Link href="/contact" className="link link-hover">
            Contact
          </Link>
          <Link href="/projects" className="link link-hover">
            Projects
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn bg-pink-700 text-white join-item">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;