# Burger
This app logs data with My SQL, Node, Express, Handlebars and a home made ORM. It follows the MVC design pattern and utilizes Node and MySQL to query and route data and Handlebars to generate HTML

## Code Overview 
This full-stack application utilizes Model/View/Controller (MVC). Controller handls the logic between model or the application database core and View to dynamically render HTML content in response to the user interaction. I used Node.js, Express.js, and Handlebars to work with the logic and to route user requests to MySQL database through Object Relational Mapping (ORM) technique to retrive information and dynamically build HTML pages to display the content back to the user. To run server code, the app has been deployed live on Heroku. 

## Built with or topics covered
* HTML5
* CSS3
* JavaScript
* jQuery
* Model View Controller (MVC)
* Object Relational Mapping (ORM)
* Express.js
    * HTTP Requests (GET, POST)
    * Routes and static content
    * Handlebars engine integration
* Node.js
    * Backend API 
* Handlebars Templates and Layouts
* Node Package Manager (npm)
* Media queries
* MySQL/JawsDB
* Heroku deployment

## npm packages: 
* [Express] (https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for node to handle routing.
* [Express-Handlebars] (https://www.npmjs.com/package/express-handlebars) - A view engine that utilizes logicless Mustache templating language for Express that keep the view and the code separated.
* [mysql] (https://www.npmjs.com/package/mysql) - A Node.js module driver for MySQL databases.


#### Directory structure

All the recommended files and directories should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│
├── node_modules
|
├── public
│   └── assets
│       ├── css
│       │   ├── style.js
|       |   └── reset.css
│       ├── img
│           └── burger.png
│           └── faviconBurger.jpg
│           └── gingham.jpg
│           └── tileable_wood_texture.png
│
├── views
│    ├── layouts
│    │    └── main.handlebars
│    ├── index.handlebars
|
├──.gitignore
│ 
├── package-lock.json
│ 
├── package.json
│ 
├── README.md
│ 
├── server.js


```

