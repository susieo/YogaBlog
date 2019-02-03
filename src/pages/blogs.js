// The submit button needs to store to mongo DB and to render "blog list". 
// The Blog list will then link to individual BlogPage
import React, {Component} from "react";
import axios from "axios";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import {Col, Row, Container} from "../components/Grid";
import { Input, TextArea,  FormBtn }from "../components/Form";
import imageYogaHeader from "../images/yogablog.jpg";

export class blogs extends Component {

// Setting our component's initial state
state = {
  title: "",
  author: "",
  description: "",
  picture: ""
};

handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};

handleFormBlog = event => {
  // Preventing the default behavior of the form submit (which is to refresh the page)
  event.preventDefault();
  this.makeapicall()
  .then(response => {
    console.log(response);
    alert(`You got it`)

  })
  .catch(err => console.log(err));

};

makeapicall = () => {

  const getURl = endPoint => {
    if (process.env.MONGOLAB_URI) return endPoint;
    return `http://localhost:3001${endPoint}`;
  };

  const body = {
    title: this.state.title,
    author: this.state.author,
    description: this.state.description,
    picture: this.state.picture
  };

  // we are sending the body to the back end via json
  return axios
    .post(getURl("/api/blogs"), body)
};


    render() {
      return ( 
   <div className = "App" >


        <Container fluid>
          <Row>
            <Col size="md-6">
              
              <Jumbotron>
              <image className="blogHeadLeft" src={imageYogaHeader} alt= "Nature and serene waters"/> 
              
             {/* <Image src={Image}> */}
             {/* <Image source={require('./src/images/yogablog.jpg')} /> */}
                <h1>Submit Your Greatest Blog Here</h1>
                {/* </image> */}
              
              </Jumbotron>

              <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />

              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />


              <Input
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Add Your Image (sauce)"
              />

             
              <TextArea
                value={this.state.picture}
                onChange={this.handleInputChange}
                name="picture"
                placeholder="Blog Entry (Optional)"
              />

              {/*
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              > 
                Submit Book
              </FormBtn>  
            */}
              <button onClick={this.handleFormBlog}>Submit</button>
              </form>

              </Col>
              </Row>    
          </Container>

</div> 

      );
      }
      }


export default blogs;