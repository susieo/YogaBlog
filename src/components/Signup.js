import React, { Component } from "react";
import axios from "axios";
import "./signup.css";

class Signup extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    this.makeapicall()
    .then(response => {
      console.log(response);
      alert(`Welcome to our Yogi Place ${this.state.firstName} ${this.state.lastName}`);
      this.setState({
        firstName: "",
        lastName: ""
      })
      this.props.history.push(`/feed/${response.data.data._id}`)
 
    })
    .catch(err => console.log(err));

  };
  makeapicall = () => {

    const getURl = endPoint => {
      if (process.env.MONGOLAB_URI) return endPoint;
      return `http://localhost:3001${endPoint}`;
    };

    const body = {
      first: this.state.firstName,
      last: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    };

    // we are sending the body to the back end via json
    return axios
      .post(getURl("/api/users"), body)
  };


 


  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="container">
   
      <div className="signupCard">
          <div className="card-body" id="signup-card-body">
      <i class="fas fa-check"></i>
              <h1 className="card-title">Hey there!</h1>
              <form className="form">
         <div className="form-group"> 
               <input
               value={this.state.firstName}
               name="firstName"
               onChange={this.handleInputChange}
               type="text"
               placeholder="First Name"
               />
</div>
<div className="form-group"> 
               <input
               value={this.state.lastName}
               name="lastName"
               onChange={this.handleInputChange}
               type="text"
               placeholder="Last Name"
               />
             </div>
             <div className="form-group"> 
               <input
               value={this.state.email}
               name="email"
               onChange={this.handleInputChange}
               type="email"
               placeholder="Email"
               />
               </div>
               
               <div className="form-group"> 
               <input
               value={this.state.password}
               name="password"
               onChange={this.handleInputChange}
               type="password"
               placeholder="Password"
               />
               </div>
          
               <button class="btn btn-primary btn-lg btn-block" onClick={this.handleFormSubmit}>Submit</button>
         </form>

          </div>
          </div>
          </div>
         
    // <div className="grid">
        
   
    //   <div className="loginContainer">
    //         <h2 className="welcomeText"><b>
    //        Login to yogi's unite
    //        </b></h2>
    
    //   {/* //This creates a second row below for the form input// */}
         
    //         <div className="row">
                
    //               <form className="form">
    //               <div className="form-group"> 
    //                     <input
    //                     value={this.state.firstName}
    //                     name="firstName"
    //                     onChange={this.handleInputChange}
    //                     type="text"
    //                     placeholder="First Name"
    //                     />
    //                 </div>
    //           <div className="form-group"> 
    //                     <input
    //                     value={this.state.lastName}
    //                     name="lastName"
    //                     onChange={this.handleInputChange}
    //                     type="text"
    //                     placeholder="Last Name"
    //                     />
    //                   </div>
    //                   <div className="form-group"> 
    //                     <input
    //                     value={this.state.email}
    //                     name="email"
    //                     onChange={this.handleInputChange}
    //                     type="text"
    //                     placeholder="Email Address"
    //                     />
    //                     </div>
                        
    //                     <div className="form-group"> 
    //                     <input
    //                     value={this.state.password}
    //                     name="password"
    //                     onChange={this.handleInputChange}
    //                     type="text"
    //                     placeholder="Password"
    //                     />
    //                     </div>
                   
    //                     <button onClick={this.handleFormSubmit}>Submit</button>
    //               </form>
                  
    //         </div>
    //   </div>
    //       </div>
      
            
    );
  }
}

export default Signup;
