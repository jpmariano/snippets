$ mongod 
$ mongo 
> use <table_name>
> db.<table_name>.remove({})

//create unique index
> db.<table_name>.createIndex({"fieldname":1},{unique:true})
> mongoimport --collection <database_name> -db <table_name> --file filename.json 

//Tune Mongo queries 
db.<tablename>.find({},{fieldname:1}) //to display specific field
    db.<tablename>.find({},{fieldname:1, fieldname:1}) //to display specific field
db.<tablename>.find({},{fieldname:1,_id:0}) //exclude _id 
db.<tablename>.find({},{fieldname:1,_id:0}).pretty() //display a readable format
db.<tablename>.find({},{fieldname:1,_id:0}).pretty().sort({fieldname:-1}) //sort descending 
db.<tablename>.find({},{fieldname:1,_id:0}).pretty().sort({fieldname:-1}).limit(1)
db.<tablename>.find({},{fieldname:1,_id:0}).pretty().sort({fieldname:-1}).limit(1).skip(20)
db.<tablename>.find({"fieldname":"value"})
db.<tablename>.find({fieldname:{4lte:100, $gte:800}})

//Text indexes
db.<tablename>.createIndex({fieldname:"text",fieldname:"text" })
db.<tablename>.find({$text:{$search:"wine"}})
db.<tablename>.find({$text:{$search:"wine"}},{score:{$meta:"textScore"}}).pretty() //sort by textScore 
db.<tablename>.find({$text:{$search:"wine"}},{score:{$meta:"textScore"}}).pretty().sort({score:{$meta:"textScore"}}) //sort in reverse by textScore 
db.<tablename>.find({fieldname:{$regex:/backpack/}},{fieldanametodisplay:1,_id:0}) //search by regex


db.<tablename>.findOne({fieldname:"value"})

//Join 
var moviename="The Avengers" // fieldvaluetoquery="value"
var movieobj = db.movies.findOne({_id:moviename})//table_name_obj = db.<table_name>.findOne({fieldname:fieldvaluetoquery})
moviename.cast = [] //table_name_obj.subtable = []
var personArray = db.people.find({movies:moviename}) //tableArray = db.<table_name>.find({})
personArray.forEach(function(person){
    movieobj.cast.push(person)
})


//Aggregation
db.<tablename>.count({fieldname:"value"})
db.<tablename>.aggregate([{$group: {_id: '$fieldname'}, count:{$sum:1}}])
db.<tablename>.aggregate([{$group: {_id: '$fieldname'}, average:{$avg: '$anotherfieldname'}, count:{$sum:1}}])
db.<tablename>.aggregate([{$group: {_id: '$fieldname'}, average:{$avg: '$anotherfieldname'}, count:{$sum:1}}, {$out:'customfieldtodisplay'}])
    db.customfieldtodisplay.find()

//Replication Sharding
Replication 
- Full copies of the dataset 
- Primary and secondary servers
- automatic failover

Sharding
- Partition dat onto multiple servers
    - more storage and greater capacity
    - multiple CPUs and memory
    - Operates as a single database for clients
- server farm friendly
- scalability and performance

When to Implement Sharding
- storage limitations
- memory constraints
- load issues
- when cost is prohibitive for a single server 

Data storage
- Monitor the size of /data/db
- db.collection.stats() and db.stats()
- Best to monitor to avoid unexpected failure 

Replication
- uptime and failover
- replica set vs master-slave
- automatic failover 

Other Replication Advantages
- backup from a secondary server
- extensive write operations
- more database reads

How does Replication works?
- it works by creating a replica set
- the servers elect a Primary
- if the primary goes down, a new primary is elected 
- when the old primary comes up, it's brought in as a secondary 


