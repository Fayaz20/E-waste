import React from 'react';
import './location.css';
function Loc(){
    return(
        <>
        <div className='parent-grid_1' id='hub-section'>
            <h1 >FIND YOUR NEAREST E-WASTE RECYCLE CENTER</h1>
            <div style={{display:'flex',justifyContent:'center'}}>
            <div className="image-box" style={{height:'302px',padding:'5px'}}>
                    <a href="https://maps.app.goo.gl/1NDNpXR3JwbiYdBYA"><img
                        src="https://thegreenera.in/og_image.webp" // Replace with your image URL
                        alt="Image"
                        className="image"
                    /></a>
                   
                </div>
                <div className="image-box" style={{height:'302px',padding:'5px'}}>
                    <a href="https://maps.app.goo.gl/A7Y3W6MNaxAC6Vxz9"><img
                        src="https://media.licdn.com/dms/image/C560BAQGZrz3ufDZFCw/company-logo_200_200/0/1611208934529?e=2147483647&v=beta&t=ESRn4lFIlu1ZlshJrm1iQsK4j-N_1_IuxCjEmgdYEk8" // Replace with your image URL
                        alt="Image"
                        className="image"
                    /></a>
                   
                </div>
                <div className="image-box" style={{height:'302px',padding:'5px'}}>
                    <a href="https://maps.app.goo.gl/yoxGJd1rpBtoxFfS7"><img
                        src="https://lh3.googleusercontent.com/p/AF1QipPGSbU5w4vqBQBW-ea9qP_LXaWCXVXtpWa2grGR=w960-h960-n-o-v1" // Replace with your image URL
                        alt="Image"
                        className="image"
                    /></a>
                </div>
            </div>
                
            </div>
        </>
    );
}
export default Loc
