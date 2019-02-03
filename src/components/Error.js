import React from "react";
import { NavLink } from "react-router-dom";
import "./error.css";

const Error = () => {
   return (
    <div className="body">
    <section id="not-found">
      <div id="title">Simple Pure CSS3 &bull; 404 Error Page</div>
      <div class="circles">
        <p>404<br/>
         <small>PAGE NOT FOUND</small>
        </p>
        <span className="circle big"></span>
        <span className="circle med"></span>
        <span className="circle small"></span>
      </div>
    </section>
    </div>
  

   );
};

export default Error;