import React from 'react';
import logo from '../../../assets/reel_rush-removebg-preview.png'
const Footer = () => {
    return (
        <footer className="mt-auto footer p-10 bg-blue-100/25 text-base-content">
  <div>
    <img className='md:w-64 md:h-40 w-28 h-28' src={logo} alt="" />
    <p>Reel Rush Entertainment Ltd.<br/>Providing blockbusters since 2010</p>
  </div> 
  <div>
    <span className="footer-title pt-16 text-orange-700">Services</span> 
    <a className="link link-hover">Giveaways</a> 
    <a className="link link-hover">Ratings</a> 
    <a className="link link-hover">Pormotions</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title  pt-16  text-orange-700">Reel Rush</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Movies</a> 
    <a className="link link-hover">Shows</a>
  </div> 
  <div>
    <span className="footer-title  pt-16 text-orange-700">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
    );
};

export default Footer;