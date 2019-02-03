import React, {Component} from "react";
import {Link} from "react-router-dom"
import "./footer.css"

const Footer = () => {

   return (
   <div className = "footer" >

<div className="card text-center">
    <div className="card-header">
        Let's Connect!
    </div>
    <div className="card-body" id="cardBodyFooter">
        <h5 className="card-title">Thanks for visiting my site!</h5>
        <p className="card-text">Connect with me and let's talk about ideas, projects, or where to find the best
            cup of
            coffee!</p>
        <a href="https://github.com/elowskya"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/ashleyelowsky/"><i className="fab fa-linkedin"></i></a>
        <a href="mailto:ashley.elowsky123@gmail.com"><i className="fas fa-envelope"></i></a>
    </div>
</div>
</div> 


   );
};

export default Footer;