/* 
  * importing libraries as modules. 
  * for that to work, we should change the file "package.json" and add the option: ` "type": "module" `
  * right after the ` "main": "index.js" `, so we cna make use of the import in this format. 
  * The alternative is to use const express = require('express'), which is equivalent.
  */
import express from 'express'; // needed for declaring the usage of express framwork
import bodyParser from 'body-parser'; // required for dealing with json files.
import usersRoutes from './routes/users.js'; //adding the users routes to the app

const app = express(); // creating a new instance of express
const PORT = 5000; // defining the port in which our NodeJS server will run

app.use(bodyParser.json()); //informing the app that we will use the JSON funcionalities of bodyParser.

app.use('/users', usersRoutes);

/* 
 * Handling GET requestes to /
 * this function requires two parameters, the route and the callback function.
 * This sinmples example the callback funcion will only return a log, however this 
 * callback function also requires two parameters. (req, res)
*/
app.get('/' , (req, res) => {
    // variables created fust for the sake of clarity
    let myDate = new Date(Date.now())
    let myOutputText = `A new user has arrived at ${myDate.toString()}`
    
    console.log(myOutputText); // Send output to Server Console || NODE = API
    res.send(myOutputText); // Send the raw data do client
});


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}. Good Work!`));