# KANRAKU HOSAI
<img width="1281" alt="Screenshot 2022-10-28 at 15 15 45" src="https://user-images.githubusercontent.com/69083631/198670456-7d232a83-b478-4119-a13d-f1e3bc950e83.png">

## Table of content
- [Introduction](#Introduction)
- [Installation](#getting-started)
- [Screenshots](#screenshots)
- [Features](#features)
    - [TOKEN](#)
    - [Job Search](#)
    - [Add Applied](#)
    - [Applied Jobs](#)
    - [Rewards](#)
- [Usage](#built-with)
- [API](#api)
- [Future](#future)
- [Authors](#authors)
    - 
- [Acknowledgments](#acknowledgements)

## Introduction



Front End
* React components handling routing
* Material UI for consistent styling
* API calls to manipulate database

REST API
* GET, POST, PUT requests handled
* CRUD manipulation through REST API
* CSV formatted jobs applied

Relational Database
* Handled with ORM (SQLAlchemy)
* Model system with base model handling identification
* Many to many relationship for users and rewards

Server / Deployment
* Nginx / Gunicorn
* AWS EC2 on Ubuntu 16.04

## Installation


## Contributing

## Related projects



### **Auth**



### **Add Applied**


### **Applied Jobs**



### **Rewards**



## Built With
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - The Frontend Language
* [MongoDB](http://flask.pocoo.org/docs/1.0/) - The Web Development Framework
* [Redux](https://www.sqlalchemy.org/) - Python SQL Toolkit and Object Relational Mapper
* [React](https://mysql.com) - Relational Database Management System
* [NodeExpress](https://reactjs.org) - Javascript Library

## API

/api/rewards

GET: Returns a randomized array of ten rewards based on rarity for a user to win based on a roll
POST: Takes a user id and reward id and adds that to the user rewards table

/api/user

GET: Returns the user's information based on session id

/api/user/currency

GET: Returns the user's currency based on session id

/api/user/rewards

GET: Returns all rewards associated with a user

/api/job_search

POST: Returns job's matching the parameters through Github Jobs API

/api/user/<user_id>/jobs

GET: gets all jobs asscoiated with a user
POST: create a new user job
PUT: modify an existing user job

/api/user/<user_id>/appliedstats

GET: Returns the statistics associated with a user's applied jobs

/api/user/<user_id>/email

GET: Returns a user email
POST: Adds a user email

/api/jobs/interested

GET: Returns all the jobs marked as interested from job searches
POST: Modify information related to an interested job
PUT: Create a new interested job from a job search call
DELETE: Delete an existing interested job

/api/jobs/applied

Depreciated jobs applied call using old schema, working on phasing out

## Future



## Authors
### **Hiromi VARNIER**


### **Susan Su**


## Acknowledgements
