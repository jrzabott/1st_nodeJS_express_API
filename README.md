# 1st_nodeJS_express_API
This is a very simple example based on a tutorial I saw on Youtube on how to build your first NodeJS + Express API.

I wanted to make it public, first for having something "recent" in my repo and for my future self see that I put some effort into learning JS + Frameworks.

Basically it generates a new instance of http://localhost:5000 and for

_____________________________

Usage:
* / - It shows a dummy message stating that everything is OK
* /users - list all users in JSON
* /users - POST - created a new user the 
* /users/:id (uuid) - list specific user
* /users/:id (uuid) - PATCH - will update the fields in the Data Model
* /users/:id (uuid) - DELETE - will detele the specified user-


Data Model is as simple as this:
```
{
  "firstName" : ""
  "lastName" : ""
  "age": ""
}
```

TODO:
* Filter Users by properties
* Validate fileds on new users
* Valide fields of patched users
* users are stored on dinamically created object (perhaps add some permanent storage for the users!?)

I'll happily hear any thoughts, tutoriais, indications and internship/junior position opportunities :)
