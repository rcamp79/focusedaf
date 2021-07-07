import React from 'react'
import profile from '../Assets/Img/profile.jpg';
import Header from '../Components/Header';


function About() {
    return (
        <div className="about-container">
            <Header/>
            <div className='main-about'>
                <div className="about-content">
                    <h2>About Us</h2>
                    <div className="about-text">
                        <img src={profile} alt=""  className='profile-image'/>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas earum, ipsa repellendus tempore illum numquam quam nostrum quis necessitatibus vero ut. Reiciendis atque quaerat tenetur accusantium incidunt ducimus aspernatur, molestias officia voluptatem commodi quo, animi officiis repellendus quas laboriosam magnam unde mollitia explicabo blanditiis ad iure. Quasi, et. Sit, sunt?</p>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}

export default About
