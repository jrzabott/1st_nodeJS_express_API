import { v4 as uuidv4 } from 'uuid';

export const getUsers = (req, res) => { 
    console.log(users);
    res.send(users);
}

export const getUser = (req, res) => {
    /**
     * req.params another property from req, that we have access to the
     * info send after the route as a parameter.
     */
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}

export const createUser = (req, res) => {
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
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age} = req.body;
    const user = users.find((user) => user.id === id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User ${id} has been updated.`)
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);
    res.send(`User ${id} removed from DB.`);
    
}