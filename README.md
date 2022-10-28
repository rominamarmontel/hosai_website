# KANRAKU HOSAI
<img width="1281" alt="Screenshot 2022-10-28 at 15 15 45" src="https://user-images.githubusercontent.com/69083631/198670456-7d232a83-b478-4119-a13d-f1e3bc950e83.png">

## Table of content
- [Introduction](#introduction)
- [Installation](#installation)
- [Screenshots](#screenshots)
- [Features](#features)
    - [SECURITY](#)
    - [Product Search](#)
    - [Admin Panel](#)
    - [Cart System](#)
    - [Review](#)
- [Usage](#usage)
- [API](#api)
- [Authors](#authors)

## Introduction
![Untitled (1)](https://user-images.githubusercontent.com/69083631/198746597-6502dc0d-e842-40c1-956b-bc988ffe9a47.jpg)





## Installation
### Front End
| Name | Description |
|-----------|-------------|
| React | Javascript library to easily create fast user interfaces for websites and applications alike |
| React-Bootstrap  | CSS frameworks |
| React-Bootswatch | an open source project |
| fontAwesome| Tool for web production, the web's most popular icon set and toolkit |
| axios | Javascript library for intercepting HTTP requests and responses and enables client-side protection against XSRF |
| Redux| Javascript library, a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native |
| redux-devtools-extension |  |
| React Router DOM | Package that enables you to implement dynamic routing in a web app |
| React Dom| Package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside the React model if you need to |
| React Hook Form| library that helps you validate forms in React. It allows you to register an input or select element and apply validation rules to React Hook Form. Validation rules are all based on the HTML standard and also allow for custom validation methods. |

### Back End
| Name | Description |
|-----------|-------------|
| Node.js | a runtime environment, based on Chrome's V8 JavaScript engine (not library, not framework) for using to construct servers |
| Express | Node.js web application framework, It's a layer built on the top of the Node js that helps manage servers and routes |
| MongoDB Atlass | NoSQL database server for Node.js, which uses MongoDB Query Language (MQL) |
| MongoDB Compass| Database Tools,a powerful GUI for querying, aggregating, and analyzing your MongoDB data in a visual environment |
| Mongoose | Node.js-based Object Data Modeling (ODM) library for MongoDB |
| Nodemon | Tool helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected |
| multer | Node.js middleware for handling multipart/form-data, which is primarily used for uploading files |
| express-async-handler | Middleware for handling exceptions inside of async express routes and passing them to your express error handlers |



### Protection
| Name | Description |
|-----------|-------------|
| .gitignore | a runtime environment, based on Chrome's V8 JavaScript engine (not library, not framework) for using to construct servers |
| dotenv (Front End & Back End) | Node.js web application framework, It's a layer built on the top of the Node js that helps manage servers and routes |
| Redux-thunk (Front End) | It is a middleware which allows us to dispatch actions manually, which gives us the power to incorporate some logic or run some asynchronous code before dispatching an action |
| bcryptjs (Back End)| Database Tools,a powerful GUI for querying, aggregating, and analyzing your MongoDB data in a visual environment |
| jsonwebtoken (Back End)| Open standard used to share information between two parties securely — a client and a server |
| helmet | Express middleware functions that set security-related HTTP response headers. Csp sets the Content-Security-Policy header to help prevent cross-site scripting attacks and other cross-site injections (returned by your Express apps)

### Option
| Name | Description |
|-----------|-------------|
| color | JavaScript library for immutable color conversion and manipulation with support for CSS color strings |
| morgan | Node. js and Express middleware to log HTTP requests and errors, and simplifies the process. It is a function that has access to the request and response lifecycle methods, and the next() method to continue logic in your Express server |
| emailjs-com |  |
| carousel |  |
| PayPal |  |
| helmet| |


### Server / Deployment


## Screenshots
![feature_3 copy](https://user-images.githubusercontent.com/69083631/198746843-02699b70-05ce-41c7-9730-ede9b546db57.jpg)

## Features
    - [SECURITY]
    - [Product Search]
    - [Admin Panel]
    - [Cart System]
    - [Review]





## Usage


## Contributing


## Related projects
AMAZON

## API
### Order Controller
Private side
| Route | API | ACCESS |
|-----------|-------------|-------------|
| /api/orders/myorders | GET | USER (Get the page of user's cart) |
| /api/orders | POST | USER (Create un new order to user's cart) |
| /api/orders/:id | GET | USER (Get the page of user's order found by product ID) |
| /api/orders/:id/pay| PUT | USER ( Update the method of payment) |
| /api/orders/:id/deliver | PUT | USER( Update the shipping address) |

Admin side
| Route | API | ACCESS |
|-----------|-------------|-------------|
| /api/orders | GET | Admin (Get the page of all order list) |
| /api/orders/:id/deliver | PUT | Admin( Update the status of user's after payment ) |

### Product Controller
Public side
| Route | API | ACCESS |
|-----------|-------------|-------------|
| /api/products/ | GET | USER(Get all products) |
| /api/products/:id | GET | USER(Get a product founded by product ID) |

Private side
| Route | API | ACCESS |
|-----------|-------------|-------------|
| /api/products/:id/reviews | POST | USER (Get the page of user's cart) |

Admin side
| Route | API | ACCESS |
|-----------|-------------|-------------|
| /api/products/ | POST | Admin(Create a new product) |
| /api/products/:id | PUT | Admin(Update a product founded by product ID) |
| /api/products/:id | DELETE | Admin(Delete a product founded by product ID) |

### User Controller
Public side
| Route | API | ACCESS |
|-----------|-------------|-------------|
| /api/users/login | POST | USERS (Login with an email and a password) |
| /api/users | POST | USERS (Register a new user) |

Private side
| Route | API | ACCESS |
|-----------|-------------|-------------|
| /api/users/profile | GET | USERS (Loading page to the user's profile found by user's ID) |
| /api/users/profile | PUT | USERS (Update the user's profile found by user's ID) |

Admin side
| Route | API | ACCESS |
|-----------|-------------|-------------|
| /api/users/:id | GET | Admin (Get an user's profile by user's ID) |
| /api/users | GET | Admin (Get all users profile) |
| /api/users/:id | PUT | Admin (Update user's profile) |
| /api/users/:id | DELETE | Admin (delete user found by user's ID) |



## Authors
### **Hiromi VARNIER**

## Licensing
