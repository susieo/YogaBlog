import React, { Component } from "react";
import { Link } from "react-router-dom"
import imageSheryl from "../images/yogaSheryl.JPG";
import "./feed.css";
import "../App.css";
import "../components/feed.css";
import Api from "./services/api";


class BlogComponent extends Component {
    render() {
        return (
            <div>
                Title: {this.props.Title}
                Author: {this.props.Author}
                Description: {this.props.Description}
                Pictures: {this.props.Pictures}
                {/* <img src={this.props.src} /> */}
            </div>
        )
    }
}

class FeedLogin extends Component {

    state = {
        user: {
            id: "i love tequila",
            name:"",
            lastname:"",
            email:""
        },
        blogs:[]
    }

    componentDidMount = () => {
        Api.getUsersInfo(this.props.match.params.id)
            .then(userInfo => {
                return this.setState({
                    user: userInfo
                })
            })
            .catch(err => {
                console.log(err.response.data)
            })

        Api.getBlogInfo()
            .then(blogs => {
                this.setState({
                    blogs: blogs
                })
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }


    render() {
        return (
            <div className="container" id="parallax">
                <br />
                {/* This creates first row */}
                <div className="row">
                    {/* This creates first column of 2 with the profile */}
                    <div className="col-md-6">
                        {/* <div className="card"> */}
                        <img src={imageSheryl} className="card-img-top" alt="yoga with Sheryl" />
                    </div>


                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title"><b>Betty White</b></h5>
                            <div className="card-text">
                                <ul>
                                    <li>name: {this.state.user.name}</li>
                                    <li>lastname: {this.state.user.lastname}</li>
                                    <li>email: {this.state.user.email}</li>
                                </ul>
                                {this.state.blogs.map((blog, index) => (
                                    <BlogComponent {...blog} key={index} />
                                ))}
                            </div>
                           
                            {/* <p className="card-text">Mantra: We are all part of an echo system.</p>
                            <p className="card-text">Blogs Written: 12</p>
                            <p className="card-text">Expertise: Vinyasas</p>
                            <p className="card-text">Favorite Yogi United Author: Ashley Elowsky The Great</p> */}
                        </div>
                    </div>
                    {/* </div> */}

                    {/* This creates the secondmost column on top */}
                    <div>
                            {/* {this.state.blogs.map((blog, index) => {
                                return (<BlogComponent {...blog} key={index} />)
                            })} */}
                        
                    </div>
                    {/* This starts the second parent column across the top */}
                    <div className="col-md-6">

                        {/* This creates a child column inside of the second column */}

                        {/* This should end the row for our second topmost row */}
                    </div>
                    {/* This begins the second row for our route to click to add a blog */}
                    <br />
                    <div className="col-md-12">
                        <br />
                        <div className="jumbotron" >
                            <img className="jumbotronImage" alt="Nature and serene waters" />
                            <h1>Namaste</h1>
                            <Link to="/pages/blogs">
                                <button className="addYourBlog">Add your blog</button>
                            </Link>
                        </div>
                    </div>

                    <div>
                    </div>
                </div>

            </div>



        );
    }
}

export default FeedLogin;