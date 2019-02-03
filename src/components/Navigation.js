import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
   return (
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
           <span className="navbar-brand" id="title">yogi's unite</span>
           <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse">
               <ul className="navbar-nav">
                    <li className="nav-item">
                       <NavLink className="nav-link nav-text" to="/">Login</NavLink>
                   </li>
                   
                   <li className="nav-item">
                       <NavLink className="nav-link nav-text" to="/feed">Feed</NavLink>
                   </li>
                   <li className="nav-item">
                       <NavLink className="nav-link nav-text" to="/findstudio">Find Studio</NavLink>
                   </li>
                   <li className="nav-item">
                       <NavLink className="nav-link nav-text" to="/pages/blogs">My Blogs</NavLink>
                   </li>
                   <li className="nav-item">
                       <NavLink className="nav-link nav-text" to="/contact">Contact Us</NavLink>
                   </li>

               </ul>
           </div>
       </nav>

   );
};

export default Navigation;