const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");

const API_PORT = process.env.PORT || 3001;
const User = require("./User");
const Blogs = require ("./blogs")
const app = express();



/**
 *this is our api which has all methods related to querying and gathering
 *information from our database.
 * GET /api/users: will return all users from our users collection in our database
 * POST /api/users will create a user into our users colleciton in our database
 */
const apiRouter = express
  .Router()
  .post("/users", (req, res, next) => {
    console.log(req.body);
    const userToCreate = {
        name: req.body.first,
        lastname: req.body.last,
        email: req.body.email,
        password: req.body.password
    };
    User.create(userToCreate, (err, user) => {
      if (err) return next(err);
      return res.status(201).json({ success: true, data: user });
    });
  })
  .post("/blogs", (req, res, next) => {
    console.log(req.body);
    const blogToCreate = {
        Title: req.body.title,
        Author: req.body.author,
        Description: req.body.description,
        picture: req.body.picture
    };
    Blogs.create(blogToCreate, (err, user) => {
      if (err) return next(err);
      return res.status(201).json({ success: true, data: user });
    });
  })


  .get("/users/:userId", (req, res, next) => {
    console.log(req.params.userId)

    User.findById(req.params.userId,(err,user)=>{
      if(err) next(err);
      if(!user) {
        // handle if no user is found
        return next({
          message: "No user was found"
        })
      }
      return res.status(200).json({
        user:user
      })
    })
  })

  .post("/login", (req, res, next) => {
    console.log(req.body)
    return User.findOne({email:req.body.email},(err,user)=>{
      if(err) next(err);
      if(!user){
        return next({
          message: "No user found with that email."
        })
      }
      if(user.password === req.body.password){
        return res.status(200).json(user)
      } else {
        return next({
          message: "Passwords do not match"
        })
      }
  })
  })


  .get("/blogs",(req, res, next) => {
    Blogs.find({},(err,blogs)=>{
      if(err)  next(err)
      return res.status(200).json({blogs:blogs})
    })
  })
  .get("/users",(req, res, next) => {
    User.find({},(err,user)=>{
      if(err)  next(err)
      return res.status(200).json({user:user})
    })
  })


  
/** this function will connect us to the correct database.
 * Will connect to our local database when in development
 * will connect to our mlab database when in production
 */
const connectToDatabase = () => {
  const getUrl = () => {
    // if (process.env.PORT) {
      return "mongodb://susie:2password@ds159164.mlab.com:59164/yogadb";
    // } else {
      // return "mongodb://localhost:27017/yogadb";
    // }
  };
  // connects our back end code with the database
  mongoose.connect(
    getUrl(),
    { useNewUrlParser: true }
  );
};

connectToDatabase();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));

// this code allows the front end to actually be okay to talk to our back end
// and recieve its json payload
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,OPTIONS,PATCH"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  // intercept OPTIONS method
  if ("OPTIONS" == req.method) return res.send(200);
  else return next();
});

// append /api for our http requests
app.use("/api", apiRouter);

/**
 * This will handle all our next(err) calls
 * */
app.use((err, req, res, next) => {
  console.log(err, "An error has occurred");
  res.status(500).json({ success: false, error: err });
});

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
