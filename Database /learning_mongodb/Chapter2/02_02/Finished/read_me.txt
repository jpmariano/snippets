$ mongoimport --help 
$ mongoimport --db <database_name> --collection <table_name> --jasonArray --file <filename.json> 

To run mongo server: Open a terminal -> mongod 
To run mongo client: Open a separate terminal -> mongo 
> use <database_name> 
//Create
> db.<table_name>.insert({"fieldName":"value","fieldName": 1, ,"fieldName": true})
//Read
> db.<table_name>.find({"fieldName":"value"})
//Update specific field 
> db.<table_name>.update({"fieldName":"value"},  //find the record to change 
    {$set: {"fieldName":"value"}}  //the specific field of the record to update 
)
//Update value of an array field 
> db.<table_name>.update({"fieldName":"value"},  //find the record to change 
    {$addToSet: {"fieldName":"value"}}  //the specific field of the record to update 
)
//Delete 
> db.<table_name>.remove({"fieldName":"value"})
//Dropping Collection
> db.<table_name>.drop()

//Simple Indexing 
> db.<table_name>.find({"fieldName":"value"}).explain("executionStats") // see totalDocsExamined
> db.<table_name>.createIndex({fieldName:1})

//Multikey Index 
> db.<table_name>.find({"fieldName":{$lte:500}, "fieldName":{$lte:3}}).explain("executionStats")
> db.<table_name>.createIndex({fieldName:1, fieldName:1 })