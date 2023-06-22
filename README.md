# fictious-online-store-api
  A **RESTful API** for a fictional online store that sells products.

# Requirements
  - Node.js ( >= v14)
  - MongoDB ( >= v3.6)

# How to start
1. Clone the repository:

$ git clone https://github.com/bidbanRG/fictious-online-store-api.git

2. Install the dependencies:
   $ cd fictious-online-store
   # for npm
      $ npm install 
   # for yarn
      $ yarn 
3.Set up the environment variables:
    add **.env** file at root of your project:
    i: MONGO_DB_URL=<your-mongodb-connection-string>
   ii: ACCESS_SECRET_TOKEN=<your-jwt-secret-key>
    
4. Start the server:
   $ npm start
    or
   $ yarn start
  

Server will start at `http://localhost:8000`.
  
