import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Meet the Developers
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            
            <h2>Dhriti Krishnan</h2>
            <Link to='/'>
            <img src='images/img-21.jpeg' class="img1"></img>
            </Link>
            
          </div>
          <div class='footer-link-items'>
            <h2>Bhoomi Bhat</h2>
            <Link to='/'>
            <img src='images/img-22.jpeg' class="img1"></img>
            </Link>
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Diya Kalyanpur</h2>
            <Link to='/'>
            <img src='images/img-20.jpeg' class="img1"></img>
            </Link>
            
          </div>
          <div class='footer-link-items'>
            <h2>Chetana Mital</h2>
            <Link to='/'>
            <img src='images/img-29.jpeg' class="img1"></img>
            </Link>
           
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              FOODPEDIA
              
            </Link>
          </div>
          <small class='website-rights'>FOODPEDIA © 2022</small>
         
        </div>
      </section>
    </div>
  );
}

export default Footer;
