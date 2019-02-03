import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Feed from "./components/Feed";
import FeedLogin from "./components/FeedLogin";
import FindStudio from "./components/FindStudio";
import Contact from "./components/Contact";
import Blogs from "./pages/blogs";
import Footer from "./components/Footer";
import Error from "./components/Error";


class App extends Component {
 render() {
   return (
     <BrowserRouter>
     <div>
       <Navigation />
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/feed/:id" component={Feed} />
        <Route exact path="/feedlogin/:id" component={FeedLogin} />
        <Route exact path="/findstudio" component={FindStudio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/pages/blogs" component={Blogs} />
        <Route component={Error} />
      </Switch>
      <Footer/>
      </div>
    </BrowserRouter>
   );
 }
}

export default App;








