import React, {Component} from "react";
import yogaSheryl from "../images/yogaSheryl.JPG";

export class cardYogaSheryl extends Component {
    render() {
      return ( 
   <div className = "App" >
        <header className = "App-header" >
        <p> yogi 's unite</p> 
        </header> 

<div className="card card-cascade wider reverse">
    <div className="view view-cascade overlay">
    <img className="card-img-top" src={yogaSheryl} alt="happy people  "/>
    <a href= "www.google.com">
    <div className="mask rgba-white-slight"></div>
    </a>
  
  
  <div class="card-body card-body-cascade text-center">

       <h4 className="card-title"><strong>My adventure</strong></h4>
       <h6 className="font-weight-bold indigo-text py-2">Photography</h6>
    <p className="card-text"> 
    <b>How did you come to teach yoga? </b>
        Teacher started in school. Also was a dancer. Found yoga in her early 20s- it blended so many things. Yoga teacher-evolved – India 2006
    <b>What sets you apart?</b>
        “non intimidating space” make it accessible and welcome people. Only variation of classes is a strength of ours. Infusion of hatha and vinyasa
    <b>What is your own practice like?</b>
        Home- it depends on the day. Take classes from colleagues- support and learn from them, guest teachers come to the studio
    <b>What is the challenging aspect of being a studio owner?/</b>
        Nature of business- not extremely lucrative being a small business owner is a lot of work. Maximize occupancy, rent, charge what you are worth. I wouldn’t want to be doing anything else.
    <b>Where do you see yoga as a whole going?/</b>
        Mainstream- If yoga is mainstream and helping people then why would we hold back from that.
    <b>What do you think makes a great yoga teacher?/</b>
        A teacher in general. Listening, not having an agenda- seeing and feeling the energy in the room and connecting with that. Open space for people to have their own experience. No teacher- we are students
    <b>How many classes do you teach each week?</b>
        6 classes
    <b>Advice?/</b>
        Yogis- personal practice, path. It is meant to break you down a bit.
        Teachers- asking people to be themselves, be authentic, be honest about yourself.
        Owners- it is all about relationships- you build a reputation.
    <b>How do you get involved with the community?/</b>
        Fundraisers, services for silent auctions, knowing about people- we can support each other. Leadership program- teach yoga classes at school.
    <b>How do you feed back into yourself?/</b>
        Aruveyda practicioner- there is external giving, but also there is receiving. I try not to get to places where I am not too burned out. My ginger tea, my son. I think it is perspective. I work on how I see things. I try to do my best. I love walking in nature. My home feels like a sanctuary. Make good food.
    
    </p>
   
    <a href = "https://yogadurango.com/" alt = "YogaDurango" > YogaDurango</a>  
</div>
</div>
</div>
</div>
      );
      }
      }

export default cardYogaSheryl;