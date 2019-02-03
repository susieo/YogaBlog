import React, {Component} from "react";
import yogaLiz from "../images/yogaLiz.JPG";

export class cardYogaLiz extends Component {
    render() {
      return ( 
   <div className = "App" >
        <header className = "App-header" >
        <p> yogi 's unite</p> 
        </header> 

<div className="card card-cascade wider reverse">
    <div className="view view-cascade overlay">
    <img className="card-img-top" src={yogaLiz} alt="happy people  "/>
    <a href= "www.google.com">
    <div className="mask rgba-white-slight"></div>
    </a>
  
  
  <div class="card-body card-body-cascade text-center">

       <h4 className="card-title"><strong>My adventure</strong></h4>
       <h6 className="font-weight-bold indigo-text py-2">Photography</h6>
    <p className="card-text"> 
    <b> Why did you decide to teach yoga?</b>
        I didn’t like the pace of my first teacher; it was too slow, so I signed up for my first yoga teacher training with YogaFit in 2001-2002. I started teaching in a gym, so I didn’t need yoga philosophy so much. I thought that since my children are grown, maybe this could be a job. This is something that I wanted to learn about. I have been fortunate in that I have never needed to apply for a yoga job; I have always been approached.
    <b>Why did you decide to further advance your training with the 500 hour? </b>
        I wanted more knowledge to learn from the class. I felt like “I was in my body”
        I step away to regroup. Any money from teaching goes back into it. When it feels like a job, then I am not going to do it.
    <b>What do you think draws people to your yoga class?</b>
        I feel that people are comfortable with me. I want to help people to find/feel a better experience within their body. I think I am pretty knowledgeable. I want people to feel affirmed.
    <b> Why Prairie yoga? </b>
        It is tough to find a 500 YTT. I also really like Viki. Their curriculum seems well rounded and there is diversity within the teachers.
    <b> How has your teaching style evolved? </b>
        YogaFit did a good job with setup for a pose-theme-conscientious about sequencing-set intention for class. “More mature-but not that mature”
    <b> Where do you think yoga is going as a whole?</b>
        I don’t really know. The market is so saturated. There’s a lot of people that hold a good quality. Very commercialized. I don’t know if they have quality teachers.
    <b> What do you do in order to stay fresh and current? </b>
        Train, train, and train again.
    <b> What do you think makes a good teacher? </b>
        A heart for it. Someone who loves the study of yoga, who never stops learning. Someone who can manage to make everyone feel welcome and wanted.
    <b> Do you have any advice? </b>
        Trust your inner light-it will guide you when you question what is going on in the world and your body. Trust that there is an inherent wisdom within you and follow it.
 
    </p>
   
    <a href= "https://www.eogandcysyoga.com/" alt = "Home page"> Cascade Yoga</a> 
</div>
</div>
</div>
</div>
      );
      }
      }

export default cardYogaLiz;