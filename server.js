
// const db=require('./config/connection')
// const routes= require('./routes');
// const {mongoose} = require('mongoose');

// const express = require('express');
// // Run npm install mongodb and require mongodb and MongoClient class
// // const { MongoClient } = require('mongodb');

// const app = express();
// const port = 3001;

// // // Connection string to local instance of MongoDB
// // const connectionStringURI = `mongodb://127.0.0.1:27017`;

// // // Initialize a new instance of MongoClient
// // const client = new MongoClient(connectionStringURI);

// mongoose.connect('mongodb://localhost:27017/socialNetwork');
// // // Declare a variable to hold the connection
// // let db;

// // Create variable to hold our database name
// const dbName = 'socialNetwork';

// // Use connect method to connect to the mongo server
// client.connect()
//   .then(() => {
//     console.log('Connected successfully to MongoDB');
//     // Use client.db() constructor to add new db instance
//     db = client.db(dbName);

//     // start up express server
//     app.listen(port, () => {
//       console.log(`Example app listening at http://localhost:${port}`);
//     });
//   })
//   .catch((err) => {
//     console.error('Mongo connection error: ', err.message);
//   });

// // Built in Express function that parses incoming requests to JSON
// app.use(express.json());
// app.use(routes);


// app.get('/read', (req, res) => {
//   // Use db connection to find all documents in collection
//   db.collection('socialNetwork')
//     .find()
//     .toArray()
//     .then(results => res.json(results))
//     .catch(err => {
//       if (err) throw err;
//     });
// });

const express = require("express");
const mongoose = require("mongoose");
// create the express application
const app = express();
const PORT = process.env.PORT || 3001;
// parses incoming JSON requests and puts the parsed data in req.body
app.use(express.json());
// URL-encoded data will be parsed w/ qs library allowing creation of nested objects from query strings
// and does not filter out ? from the query string
app.use(express.urlencoded({ extended: true }));
// serves static files upon initializing
app.use(express.static("public"));
// links the routes directory for the server to use
app.use(require("./routes"));
// tells mongoose which database we want to connect to
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/socialNetwork",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
// use this to log mongo queries being executed
mongoose.set("debug", true);
app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));