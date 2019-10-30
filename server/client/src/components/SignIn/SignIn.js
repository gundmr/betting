import React from 'react';
import "./style.css";
import logo from "../../assets/ebetz-main.png"

import desktopImage from '../../assets/scales.jpg';
import mobileImage from '../../assets/scales.jpg';

const SignIn = () => {
    const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

    return (
        
        <div className="header" style={{backgroundImage: `url(${imageUrl})` }}>
            <div className="overlay">
                <img className="img-logo" src={logo} alt="Logo" />;
                <h1>Sign in to Bet</h1>
                <p>New Users Recieve 10k Points</p>
            </div>
        </div>
    );
};

export default SignIn;


// function SignIn() {

    //     return(
    //         <header className="mt-0 header">
    //                 <div class="overlay"></div>
    //                     <h1>Sign In to Find Your Team and Place Your Bets</h1>
    //         </header>
    
    //     );
    // }
    
    // export default SignIn;


