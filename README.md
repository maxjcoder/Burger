# Burger
Welcome friends to my food truck, Burger!  We're so hip that one name says it all.  You must be famished, so lets get you fed...


## Code Overview 
This full-stack application utilizes Model/View/Controller (MVC). Controller handls the logic between model or the application database core and View to dynamically render HTML content in response to the user interaction. I used Node.js, Express.js, and Handlebars to work with the logic and to route user requests to MySQL database through Object Relational Mapping (ORM) technique to retrive information and dynamically build HTML pages to display the content back to the user. To run server code, the app has been deployed live on Heroku. 


## HOW IT WORKS

### Enter a burger of your choice into the field and click 'Place your order'.

### Your burger choice will move down to 'My Plate' 

### Click 'Devour it' to virtually "eat da burger"

### The "devoured" burger will then list under 'My compliments to the chef'

-----------------------------------------

## SEE THE WORKING CODE 

### https://drive.google.com/file/d/1b45hUFJvW5DY49XuU9ACuxp74nAGhbxr/view


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


## npm Packages: 
* [Express](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for node to handle routing.
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - A view engine that utilizes logicless Mustache templating language for Express that keep the view and the code separated.
* [mysql](https://www.npmjs.com/package/mysql) - A Node.js module driver for MySQL databases.
* [Body-Parser](https://www.npmjs.com/package/body-parser) - Middleware - It parses your incoming request, assembles the chunks containing your form data, then creates this body object filled it with your form data.
* [Method-Override](https://www.npmjs.com/package/method-override) - Middleware - Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.


#### Directory Structure

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

## Author
* Max M. Jackson, M.Ed.
* Click on the deployed app on Heroku!
https://tranquil-island-49159.herokuapp.com/

* Click on the GitHub link to view code!
https://github.com/maxjcoder/Burger


-----------------------------------------

##### My name is Max Jackson, and [I am a web developer in the making](https://maxjcoder.github.io/Bootstrap-Portfolio/index.html). (c) 2019