
import React from 'react';
import './Landing.css';
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';
import headerImg from "../assets/lgoo.png";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2



const Landing = () => {
  return (
    <section className="landing" id="landing">
        

<Grid >
        <Grid item xs={12} sm={8} >
     
      <div className="typewriter-container">
        <Typewriter
            onInit={(typewriter) => {
            typewriter
                .typeString("Decentralized Trading Platform")
                .pauseFor(1000)
                
                .start();
            }}
        />
    </div>
        
           
            <p>A decentralized trading platform revolutionizes the way users engage in financial markets. Utilizing blockchain technology, this platform ensures tamper-proof transactions and enhances privacy. Users can trade a diverse range of assets seamlessly, all while enjoying the benefits of decentralization, increased security, and reduced fees. Welcome to the future of trading, where individuals take charge of their financial journey on their terms.</p>
            <Link to="/home">
            <button class="cybr-btn">
                View Market Place<span aria-hidden>_</span>
                <span aria-hidden class="cybr-btn__glitch">View Market Place</span>
                <span aria-hidden class="cybr-btn__tag">R25</span>
                </button>
                </Link>
                <Link to="/signup">
                <button class="cybr-btn">
                Get Started<span aria-hidden>_</span>
                <span aria-hidden class="cybr-btn__glitch">Get Started</span>
                <span aria-hidden class="cybr-btn__tag">R25</span>
            </button>
            </Link>
            </Grid> 
            <Grid item sm={6} align='right'>
            
            
            <img src={headerImg} alt="Header Img" id="headerimg" className='Headerimg'/>
            
            </Grid>
            </Grid>
    </section>
  );
};

export default Landing;
