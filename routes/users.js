import express from 'express'; // tells we are using express for this file.
import { v4 as uuidv4 } from 'uuid';

const router = express.Router(); // Router library from express to use in this file to manage routes.

let users = []
/*
 * the route itself
 * All the routes in this file already starts with /users ... therefore there's 
 * no need to prefix the below router with the route itself.
*/
router.get('/', (req, res) => { 
    console.log(users);
    res.send(users);
})

router.post('/', (req, res) => {
    console.log('POST ROUTE REACHED');

    /**
     * req has a property called body. It contains the content of a POST request.
     * pushing (add new element to an array) this REQ.BODY to the object USERS
     */
    const user = req.body;
    const userID = uuidv4();

    const userWithId = { ...user, id: userID };

    users.push(userWithId);

    res.send(`User ${user.firstName} ${user.lastName} added to the DB.`);
})

router.get('/:id', (req, res) => {
    /**
     * req.params another property from req, that we have access to the
     * info send after the route as a parameter.
     */
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);
    res.send(`User ${id} removed from DB.`);
    
})

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age} = req.body;
    const user = users.find((user) => user.id === id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User ${id} has been updated.`)
})

export default router; // required for the whole app to be able to see and use the "router object".