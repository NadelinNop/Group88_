import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';




const Footer = () => {
  return (
    <footer>
       
       
        <ul className="social-icons">
        <h2>Join us on</h2>  
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} className="icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faGooglePlusG} className="icon" />
          </a>
        </li>
      </ul>
      <p>
        Buy and Sell Cryptocurrency with any wallet
      </p>
    </footer>
  )
}

export default Footer