import React, {Component} from "react";
import {Link} from "react-router-dom"
import imageJamie from "../images/yogaJamie.JPG";
import imageLiz from "../images/yogaLiz.JPG";
import imageSheryl from "../images/yogaSheryl.JPG";
import imageTricia from "../images/yogaDurangoExtra.JPG";
import imageVikki from "../images/yogaVikki.JPG";
import imagePeter from "../images/yogaPeter.JPG";
import "../App.css";



class Home extends Component {
  render() {
    return ( 
   <div className = "homepageContainer">
   
   <header className = "jumbotron" >
      <image className="jumbotronImage" alt= "Nature and serene waters"/>
        <h1>Namaste</h1>
        <p>Serenity is within yourself</p>
      </header> 

     <div className="card-deck">
        <div className="card">
            <img className="card-img-top" src= {imagePeter} alt="Peter Walters"/>
        <div className="card-body">
                <h5 className="card-title"> Peter Walters</h5>
                <p className="card-text"> Peter has a playful flow with bhakti and playlists recommended by yogi's that come to his class.
                </p>
            <Link to="/yogaPeter">
                <button class="btn btn-primary">Read more>></button>
            </Link>
                    <p class="card-text"><small class="text-muted"> San Fransico, CA</small></p>
            </div>
        </div>
        <div className="card">
            <img className="card-img-top" src={imageJamie} alt="Yoga with Jamie"/>
            <div className="card-body">
                <h5 className="card-title"> Jamie K</h5>
                <p className="card-text"> Jamie has a focused approach and you know that you are going to work mentally and physically.
                </p>
                <Link to="/yogaJamie">
                <button class="btn btn-primary">Read more>></button>
                </Link>
                <p class="card-text"><small class="text-muted"> Grand Rapids, MI</small></p>
            </div>
        </div>
        <div className="card">
            <img className="card-img-top" src={imageLiz} alt="Yoga with Liz"/>
            <div className="card-body">
                <h5 className="card-title"> Liz Fulsher</h5>
                <p className="card-text"> Liz has a kind approach in her classes and really emphasizes body awareness.</p>
                <Link to="/yogaLiz">
                <button class="btn btn-primary">Read more>></button>
                </Link>
                <p className="card-text"><small class="text-muted"> Grand Rapids, MI</small></p>
            </div>
        </div>
    </div>
    <div className="card-deck">
        <div className="card">
            <img className="card-img-top" src={imageSheryl} alt="Yoga with Sheryl"/>
            <div className="card-body">
                <h5 className="card-title">Sheryl McGorty</h5>
                <p className="card-text"> Sheryl's class is infused with movement patterns that open your perspective outside of yourself.</p>
                <Link to="/yogaSheryl">
                <button class="btn btn-primary">Read more>></button>
                </Link>
                <p class="card-text"><small class="text-muted"> Durango, CO</small></p>
            </div>
        </div>
        <div className="card">
            <img className="card-img-top" src= {imageTricia} alt="Yoga with Tricia"/>
            <div className="card-body">
                <h5 className="card-title">Tricia Fiske</h5>
                <p className="card-text"> Tricia's experience and skillset brings forth a scientific based approach to yoga.</p>
                <Link to="/yogaTricia">
                <button class="btn btn-primary">Read more>></button>
                </Link>
                <p class="card-text"><small class="text-muted"> Chicago, IL</small></p>
            </div>
        </div>
    </div>
             
        <div className="Grid-fluid">
        <div className="row">
         <div className="col-xs-8" id="thumbnailText"> 
        <h1>Hello World!</h1>
        <p>Resize the browser window to see the effect.</p>
        <p>The columns will automatically stack on top of each other when the screen is less than 768px wide.</p>
        </div>
        <div className="col-xs-4" id="thumbnail"> <img src={imageVikki} alt="yoga with Vikki"/></div>
        </div>
        </div>
        
         </div>
  
    );
  }
}

export default Home;