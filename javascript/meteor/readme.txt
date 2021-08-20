//Installing meteor - https://www.meteor.com/install
curl https://install.meteor.com/ | sh

//To get meteor version
meteor --version



//Go to an empty folder (Note: release 1.4.2 is meteor release)
meteor create projectname  || meteor create --release 1.4.2 projectname
    - when complete - go to projectname
    - start the server - in terminal, type - meteor
    - http://localhost:3000/


//Installing React
meteor npm install react@15.3.2 react-dom@15.3.2 --save

//Note Before Running meteor
meteor npm install

meteor run || meteor run --release 1.4.2 

meteor

//Accessing Mongo DB from Terminal - Make sure your terminal is in located in your meteor project
meteor mongo --release 1.4.2 
meteor:PRIMARY> db.players.find() //reading from database