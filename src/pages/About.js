import React, { Component } from 'react';
import "./About.css";
import profile_pic_name from "../assets/profile_pic_name.jpg";

export default class About extends Component{ 
  render(){ 
    return( 
      <div>
        <p>
        <div class="split left">
          <div className="centered">
            <img 
              src={profile_pic_name}
              className="profile_pic_name"
              //Image goes here
              alt="Profile Pic"              
              ></img>
          </div>
        </div></p>
        <div className="split right">
          <div className="centered">
            <h3 className="name_title">Noor EL-Hawwat</h3>
            <div className="brief_description">
              I am a rising junior majoring in Computer Science at Rutgers University-Newark. 
              My interests are in front end programming and UI/UX design as my main goal is to 
              be a web developer. An interesting fact about me is that I know over 50 digits of pi.
              My favorite hobbies are drawing, cooking, and watching anime. I am looking forward to 
              seeing what this program has in store for me!
            </div>
          </div>
          
        </div>
      </div>  
    )
  }
}
