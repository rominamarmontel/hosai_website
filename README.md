<<<<<<< HEAD
# KANRAKU HOSAI
<img width="1281" alt="Screenshot 2022-10-28 at 15 15 45" src="https://user-images.githubusercontent.com/69083631/198670456-7d232a83-b478-4119-a13d-f1e3bc950e83.png">

## Table of content
- [Introduction](#introduction)
- [Installation](#installation)
- [Screenshots](#screenshots)
- [Features](#features)
- [Usage](#usage)
- [API](#api)
- [Authors](#authors)

## Introduction
I have been studying Programming at Holberton School since January of this year, and about 8 months into my studies, I was assigned the task of creating a portfolio. I had been asked to create a website by a friend who is an art appraiser, so I decided to create a plot type. The desired content was a website that would allow art appraisers to sell his collection and estimate client's collections, plus a page where they could provide and update information about their stores. I chose JavaScript as the language, React, Redux for the front-end, Node.js Express for the back-end, and MongoDB for the database, all libraries and tools that were new to me, but the Rest API and algorithms that I had developed in school were the same, so I was able to use them all. It was a great benefit that I could understand more than I expected. Due to the short production period of three weeks, we were only able to complete the eCommerce and news distribution portions of the project, but we will continue to update the estimates as soon as they are completed.


### Technology
<img width="1429" alt="Screenshot 2022-10-31 at 21 52 31" src="https://user-images.githubusercontent.com/69083631/199108421-e6000e17-098c-46f2-936d-00e639ac125b.png">



### Architecture 
![Untitled (9)](https://user-images.githubusercontent.com/69083631/199108503-d9c8a2e7-07aa-4a6f-8daa-6d0b9989d07d.jpg)

Landing Page : https://rominamarmontel.github.io/



## Installation
### Front End
| Name | Description |
|-----------|-------------|
| React | Javascript library to easily create fast user interfaces for websites and applications alike |
| React-Bootstrap  | CSS frameworks |
| React-Bootswatch | an open source project |
| fontAwesome| Tool for web production, the web's most popular icon set and toolkit |
| Redux| Javascript library, a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native |
| axios (Front End) | Javascript library for intercepting HTTP requests and responses and enables client-side protection against XSRF |
| redux-devtools-extension | Open source project for debugging application's state changes which provides power-ups for your Redux development workflow |
| React Router DOM | Package that enables you to implement dynamic routing in a web app |
| React Dom| Package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside the React model if you need to |
| React Hook Form| library that helps you validate forms in React. It allows you to register an input or select element and apply validation rules to React Hook Form. Validation rules are all based on the HTML standard and also allow for custom validation methods. |
| Redux-thunk (Front End) | It is a middleware which allows us to dispatch actions manually, which gives us the power to incorporate some logic or run some asynchronous code before dispatching an action |

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
| Postman | API platform for testing API. It is an HTTP client that tests HTTP requests, utilizing a graphical user interface, through which we obtain different types of responses that need to be subsequently validated |
| Redux DevTools for Chrome | Debugging application's state changes. The extension provides power-ups for your Redux development workflow |



### Protection & Security
| Name | Description |
|-----------|-------------|
| .gitignore | a runtime environment, based on Chrome's V8 JavaScript engine (not library, not framework) for using to construct servers |
| dotenv (Front End & Back End) | Node.js web application framework, It's a layer built on the top of the Node js that helps manage servers and routes |
| bcryptjs (Back End)| This module enables storing of passwords as hashed passwords instead of plaintext |
| jsonwebtoken (Back End)| Open standard used to share information between two parties securely — a client and a server |
| helmet | Express middleware functions that set security-related HTTP response headers. Csp sets the Content-Security-Policy header to help prevent cross-site scripting attacks and other cross-site injections (returned by your Express apps)

### Option
| Name | Description |
|-----------|-------------|
| color | JavaScript library for immutable color conversion and manipulation with support for CSS color strings |
| morgan | Node. js and Express middleware to log HTTP requests and errors, and simplifies the process. It is a function that has access to the request and response lifecycle methods, and the next() method to continue logic in your Express server |
| emailjs-com | It helps to send emails using client-side technologies only. No server is required – just connect EmailJS to one of the supported email services, create an email template, and use our Javascript library to trigger an email |
| carousel | Slideshow component for cycling through elements—images or slides of text |
| PayPal developer sandbox | Self-contained, virtual testing environment that simulates the live PayPal production environment |


### Server / Deployment

## Features
    - [SECURITY]       : It protects the transfer of information between the user and the server
                        by encrypting the user's registered password using a hash function and then creating
                        a JWT(Json Web Token) that is used primarily for two purposes: authentication and data transfer.
    - [Product Search] : You can find just the product you are looking for by entering keywords
                        into a search engine. However, at this time, only one keyword is supported, and we plan to
                        improve this functionality with additional features.
    - [Admin Panel]    : Products and Topics can be edited, deleted, and new ones added from the Admin Panel.
    - [Cart System]    : You can add products to your cart by specifying the quantity you wish to purchase.
                        The inventory count is also automatically updated with sales records, so you can immediately see
                        if an item is available for purchase or not.
    - [Review]         : This option is available only to registered users. Submissions are limited to one
                        per product, and the number of stars is automatically calculated and changed according to the user's rating.

## API

### ![Untitled (7)](https://user-images.githubusercontent.com/69083631/199108789-432c03c6-ed70-4157-b3ed-f5f287a11715.jpg)
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

### Topic Controller
Public side
| Route | API | ACCESS |
|-----------|-------------|-------------|
| /api/topic | GET | USERS (Get all topics) |
| /api/topic/:id | GET | USERS (Get a single topic) |

Admin side
| Route | API | ACCESS |
|-----------|-------------|-------------|
| /api/topics/ | POST | Admin(Create a new topic) |
| /api/topics/:id | PUT | Admin(Update a topic founded by topic ID) |
| /api/topics/:id | DELETE | Admin(Delete a topic founded by topic ID) |

## Usage
![Untitled (6)](https://user-images.githubusercontent.com/69083631/198899252-d4188849-a893-449f-bfa0-6ad552de032b.jpg)

![Customer Touchpoint Map](https://user-images.githubusercontent.com/69083631/198897057-9af808b1-8f06-4fb6-8bad-df798bd6ffc9.jpg)




## Contributing
Responsive design : affordable access to technology and the convenience of shopping from anywhere, at any time

## Related projects
* AMAZON.com
* ebay.com
* Zalando.com
* Fnac.com

## Authors & Licensing
### **Hiromi VARNIER** 
< 4336@holbertonstudents.com >
=======
HOSAI
>>>>>>> 7f5e0ec (logo image format change)
