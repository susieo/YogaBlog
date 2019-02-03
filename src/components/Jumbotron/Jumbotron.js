import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      // renamed class to not match other jumbo className="jumbotron"
      className="blogHeadLeft"
   
     >

      {children}
    </div>
  );
}

export default Jumbotron;
