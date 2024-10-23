const express = require("express");
const app = express();

/**
 Check the documentation of expressjs middleware  
 https://expressjs.com/en/guide/using-middleware.html#using-middleware

 If you look in the documentation, you will fine that is it possible to combine multiple middlewares

/*
  Todo: Write another expressjs middleware: logMidware   
  to log some information about req

  Combine the verifyMidware with logMidware for GET and POST
  - if there is no token throw an error
  */

app.listen(3000, () => {
  console.log("Server is listening on port 3000....");
});
