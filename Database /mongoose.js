const mongoose = require('mongoose');

mongoose.Promise = global.Promise; //tells mongoose to use ES6 promise 
//Hook before only run once vs beforeEach 
before((done) => {
    mongoose.connect('mongodb://<ipaddress>:27017/<databasename>'); // mongoose.connect('mongodb://username:password@host:port/database?options...');
    mongoose.connection
    .once('open', () => {  done(); })
    .on('error', (error) => {
        console.log('warning', error);
    });
});

//hook beforeEach test 
beforeEach(() => {
    // Dropping Database
    mongoose.connection.collections.users.drop((()=>{
        //Tells mocha that it is ready to run the next test!
        done();
    }));
});

// In separate file
const mongoose = require('<path>/mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: String
});

const User = mongoose.model('user', UserSchema);
module.exports = User;

// In separate file
const assert = require('assert');
const User = require('<path>/user');

describe('Creating Record', () => {

    let joe; 

    beforeEach(() => {
        const joe = new User({name: 'Joe'});
        joe.save() //mongoose default promises deprecated 
            .then((() => {
                //isNew (mongoose) True if is not save, False if is save 
                //assert(!joe.isNew);
                done();
            }))
    });

    it('find all users with a name of joe', (done) => {
        User.find({
            name: 'Joe'
        }).then((users) => {
            //toString is important because the _id is wrap in object
            assert(users[0]._id.toString() === joe._id.toString());
            done();
        })
    })
})



//Other Promises library
//Bluebird 
//q
//ES6 promises
