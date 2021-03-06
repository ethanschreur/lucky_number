### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?
RESTful routing is a way of setting up an API that follows a certain set of standards.
- What is a resource?
A piece of content managed by an API
- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?
Becuase then the route wouuld return HTML and not JSON???
- What does idempotent mean? Which HTTP verbs are idempotent?
Idempotent means that the function can be performed again and again with the same result. GET, PUT, and DELETE 
- What is the difference between PUT and PATCH?
Put is used when we are editting the entire resource. Patch is used when we are editting only a part of the resource.
- What is one way encryption?
One way encryption means that you can translate a password into the code but it is really hard to translate the code back to the password
- What is the purpose of a `salt` when hashing a password?
The salt Is a random code that gets added onto a password before it is hashed that totally changes the resulting encrypted string. This is done so that it is much more difficult to try the common passwords until they work and also to make it harder for the code to be broken.
- What is the purpose of the Bcrypt module?
Bcrypt module will be used to encode the password plus the salt. We also will use this module to decode the password and check if the inputted password is correct for the user.
- What is the difference between authorization and authentication?
Authorization checks if you are allowed to peeform the action you are attempting to perform. Authentification is what checks your identity (usually done iwth usernames and passwors)