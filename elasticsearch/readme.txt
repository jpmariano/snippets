Elastic Search Basic Concept
    - Nodes store data that we add to Elastic Search
    - A Cluster is a collection of nodes
    - Data is stored as documents which are JSON objects
    - Documents (record in RDBMS) are grouped together with by type (table) and are grouped within index (database in rdbms)
    - Index is divided into shard
    - Shard can be in more or more machine(node)
        - Cluster a collection of shard
        - A cluster has a colleciton of replicas which is used as a backup if shard goes down
        - With each node you create, the shard will be distributed automatically
        - Clustering - Each node should have the same cluster name
        - https://www.youtube.com/watch?v=8r_IMTerZSY
    - Each piece is referred to as a shard
    - Sharding is done at the index level
    - The main purpose of sharding is to horizontally scale the data volume
    - A shard is an independent index kind of
    - Each shard is an Apache Lucene index
    - Elastic Search is consist of one or more lucene indices
    - Mainly to be able to store more documents
    - To easier fit large indices onto nodes
    - Improve performance
        - Parallelization of quieres increases the throughput of an index



- Install Java if not installed
- Download and unzip elasticsearch
    - bin - executables
    - config - configuration and can be raname to .json
    - data - index
    - lib -jar file
    - logs -debugging and analysis 

elasticsearch.yml
    - path.data: <path/foldername || foldername> 
    - path-logs: <path/foldername || foldername> 
    - cluster.name: <yourclustername>

Installing Elasticsearch
1. Make sure Install Jav 7 or higher 
    - javac -version
2. Download Elastic Search https://www.elastic.co/products/elasticsearch
2. $ bin/elasticsearch 
    - localhost:9200 
    - creates a cluster called elasticsearch 
    - creates a master node 
    - individual node is given a random name 
    - ctrl + C to stop elasticsearch 
3. $ curl <url:9200>
4. Configuring Elastic Search
    - Network and port of the elastic search server - only in production
    - To add a node to a cluster: 
        - cluster.name in /Users/user/Documents/elasticsearch/config/elasticsearch.yml where you add a cluster name
    - https://www.udemy.com/elasticsearch-complete-guide/learn/v4/t/lecture/7429062?start=0
5. Download Kibana - https://www.elastic.co/products/kibana
    - port 45601 
    - Download Kibana 
    - $ tar -zxf kinbana
    - $ bin/kibana - to start 
        - go to your url:45601
        - ctrl + C to stop 
4. Configuring kibana - kibana.yml 
    - https://www.udemy.com/elasticsearch-complete-guide/learn/v4/t/lecture/7429072?start=0
    - Using Dev Tools
        - Console (Copy the console as curl):
            - GET /_cluster/health
            - GET /_cat/nodes?v
            - GET /_cat/indices?v
                - curl -XGET "http://localhost:9200/_cat/indices?v"
            - GET _search
            {
            "query": {
                "match_all": {}
            }
            }
5. Intro to kibana 
    - https://www.udemy.com/elasticsearch-complete-guide/learn/v4/t/lecture/7429078?start=0
    - $curl -XGET <kibanaconsolegearurl>
    - In Kibana Console
        GET /_cluster/health
        GET /_cat/nodes?v
        GET /_cat/indices?v
        GET /_cat/shards?v

    Creating Node:
        Step 1:
            Duplicate a default elastic search folder
        Step 2: configure elasticsearch.yml
            - Make sure they have the same clustername 
            - node.name: node-1 in one folder, node.name: node-2 in another folder
        Start 3: Start Elasticsearch (if the same computer it will automatically add the node)
    Development way only of creating node: bin/elasticsearch -Enode.name=node-3 -Epath.data=.node-3/data Epath.logs=.node-3/logs
6. Creating Index 
    - PUT /<database_name>?pretty - pretty will make the result easy on the human eyes 
    https://www.elastic.co/guide/en/elasticsearch/reference/current/removal-of-types.html
    PUT twitter
    {
        "mappings": {
            "_doc": {
            "properties": {
                "type": { "type": "keyword" }, 
                "name": { "type": "text" },
                "user_name": { "type": "keyword" },
                "email": { "type": "keyword" },
                "content": { "type": "text" },
                "tweeted_at": { "type": "date" }
            }
            }
        }
    }

    PUT twitter/_doc/user-kimchy
    {
        "type": "user", 
        "name": "Shay Banon",
        "user_name": "kimchy",
        "email": "shay@kimchy.com"
    }

    PUT twitter/_doc/tweet-1
    {
        "type": "tweet", 
        "user_name": "kimchy",
        "tweeted_at": "2017-10-24T09:00:00Z",
        "content": "Types are going away"
    }

    GET twitter/_search
    {
        "query": {
            "bool": {
            "must": {
                "match": {
                "user_name": "kimchy"
                }
            },
            "filter": {
                "match": {
                "type": "tweet" 
                }
            }
            }
        }
    }

    //Migrating multiple indices to a single type
    PUT users
        {
            "settings": {
                "index.mapping.single_type": true
            },
            "mappings": {
                "_doc": {
                "properties": {
                    "name": {
                    "type": "text"
                    },
                    "user_name": {
                    "type": "keyword"
                    },
                    "email": {
                    "type": "keyword"
                    }
                }
                }
            }
        }

    PUT tweets
        {
            "settings": {
                "index.mapping.single_type": true
            },
            "mappings": {
                "_doc": {
                "properties": {
                    "content": {
                    "type": "text"
                    },
                    "user_name": {
                    "type": "keyword"
                    },
                    "tweeted_at": {
                    "type": "date"
                    }
                }
                }
            }
        }

    POST _reindex
        {
            "source": {
                "index": "twitter",
                "type": "user"
            },
            "dest": {
                "index": "users",
                "type": "_doc"
            }
        }

    POST _reindex
        {
            "source": {
                "index": "twitter",
                "type": "tweet"
            },
            "dest": {
                "index": "tweets",
                "type": "_doc"
            }
        }
    PUT new_twitter
    {
        "mappings": {
            "_doc": {
            "properties": {
                "type": {
                "type": "keyword"
                },
                "name": {
                "type": "text"
                },
                "user_name": {
                "type": "keyword"
                },
                "email": {
                "type": "keyword"
                },
                "content": {
                "type": "text"
                },
                "tweeted_at": {
                "type": "date"
                }
            }
            }
        }
    }


    POST _reindex
    {
        "source": {
            "index": "twitter"
        },
        "dest": {
            "index": "new_twitter"
        },
        "script": {
            "source": """
            ctx._source.type = ctx._type;
            ctx._id = ctx._type + '-' + ctx._id;
            ctx._type = '_doc';
            """
        }
    }

7. Adding Document to index through console of kibana
    - POST /<database_name>/default {
        "field_name": "value",
         "field_name": {
              "field_name": "value",
               "field_name": "value",
         },
    }   // http ver + endpoint 
    - PUT /<database_name>/default/<id:num> {
        "field_name": "value",
         "field_name": {
              "field_name": "value",
               "field_name": "value",
         },
    }   // http ver + endpoint 
    - get /<database_name>/default/<id:num> 
8. Updating Documents - Adding new fields
    - POST /<database_name>/default/<id:num>/_update
    {
        "doc": {
            "new_field_name": "value",
            "new_field_name": ["value"],
            "new_field_name": {
                    "field_name": "value",
                    "field_name": "value" }
        }
    }
9. Scripting Update 
     - POST /<database_name>/default/<id:num>/_update
     {
         "script": "ctx._source.<field_name> = newvalue" 
     } 
     
     or

     {
         "script": "ctx._source.<field_name> += 10" 
     }
     - More Example: https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-update.html
     - https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-scripting.html
     - GET /<database_name>/default/<id:num>
10. Upsert - updates the field if it exist, if not, it runs the upsert 
    - POST /<database_name>/default/<id:num>/_update
     {
         "script": "ctx._source.<field_name> += 10" 
         "upsert":{
             "price": 100;
         }
     } 
11. 
    - Deleting single Document 
        - DELETE /<database_name>/default/<id:num>
    - Deleting Mutiple Document
        - POST /<database_name>/_delete_by_query 
        {
            "query":{
                "match": {
                    "field_name": "value"
                }
            }
        }
12. Deleting Index
    - DELETE /<database_name> 
13. Batch Processing 
    - POST /<database_name>/default/_bulk
    {
        "index": {
            "_id": "100"
        }
    }
    {  "price": 100 }
    {
        "index": {
            "_id": "101"
        }
    }
    {  "price": 101 }
    - Batch Updating and Deleting 
    POST /<database_name>/default/_bulk
    {
        "update": {
            "_id": "100"
        }
    }
    {"doc": {  "price": 1000 }}
    {"delete": {  "_id": 101 }}
14. Importing Batch Data using Curl 
    -$ curl -H "Content-Type: application/json" -XPOST "http://localhost:9200/<database_name>/default/_bulk?pretty" --data-binary "@ptest-data.json" 
15. Exploring the cluster 
    - GET /_cat/health?v - https://www.elastic.co/guide/en/elasticsearch/reference/current/cluster.html
    - GET /_cat/nodes?v - https://www.elastic.co/guide/en/elasticsearch/reference/current/cat-nodes.html
    - GET /_cat/indices?v 
    - GET /_cat/allocation?v 
    - GET /_cat/shards?v 

 Mapping - or schema in mysql
16. Dynamic Mapping - By Default, when you Post your data elastic search will map the field automatically
    - Show Mappings
        - GET /<database_name>/default/_mapping 
17. Meta Fields 
    - _index - contains the name of the index to which a document belongs
    - _id - stores the id of the Documents
    - _source - contains the original json object used when indexing a document
    - _field_names - contains the names of every field that contains a non-null value 
    - _routing - stores the value used to route a document to a shard 
    - _version - stores the internal version of a document - the value is integer 
    - _meta - may be used to store custom data that is left untouched by Elastic search 

18. Field Data Types 
    - Core Data Types
        - text - "lorem ipsum" - optimal for full text searches 
        - keyword - tags, categories, email address (used for structrued data) - use for filtering or agrregations
        - numeric - long, short, integer, byte, float, scaled_float, half_float 
        - date - string, long, epoc 
        - boolean - true or false 
        - binary - base64. Not stored by default 
        - range - { "gte":10, "lte":20} integer_range, float_range, long_range, double_range, date_range 
    - Complex Data Types
        - object - json 
        - array 
        - array of objects - 
        {
            "persons": [
                { "name": "Bo Andersen" , "age": 28 },
                { "name": "Bo Andersen" , "age": 28 }
            ] 
        } becomes 
        {
            "persons.name": ["Bo Andersen" ,  "Bo Andersen" ],
            "persons.age": [ 28 , 28 ]
            
        } 
        - Nested - specialized version of the object data type. Enables arrays of objects to be querified independently of each other. 
    - Geo Data Types
        - longitude and lattitude 
        {
            location: {
                "lat": 33.5206608,
                "lon": -86.8024900
            }
        }
        {
            "location": "33.5206608, -86.8024900"
            
        }
        {
            "location": "[3.5206608, -86.8024900]
            
        }
        {
            "location": "asdfasdfasd" //geo hashed
            
        }
        - Geo Shape 
            - geographical shaes such as polygons, circles, point, linestring, multipoint, multilinestring, multipolygon, goemetrycollection, envelope, and circle 


    - Specialized Data Types 
         - For storing IP address IPV or IPV6
        - Completion 
            - provide auto completion ("search as yout tyoe") functionality. Optimes for quick lookups
        - Attachment - Rquires the ingest attachment processor plugin. Used to make text from various document formats searchable (E.g. PPT. PDF, and RTF )
        Uses Apache Tika interanlly for text recognation 
        - $ sudo bin/elasticsearch-plugin install -ingest-attachment 
19. Adding Mappings/schema to Existing indices 
    - PUT /<database_name>/default/_mapping  //to set mapping
    {
        "properties": {
            "<field_name>": {
                "type": "<data_type>" 
            }
        }
    }
    - GET /product/default/_mapping  // to view mapping
20. Changing Existing Mappings
    - Note: You can add properties to object and you can add keyword to text without deleting the indexes 
    - DELETE /<database_name>
    - PUT /<database_name> //to set mapping
    {
        "mappings": {
            "default": {
                "dynamic": false,
                "properties": {
                    "in_stock": {
                        "type": "integer"
                    }, 
                    "is_active": {
                        "type": "integer"
                    }, 
                    "price": {
                        "type": "integer"
                    }, 
                    "sold": {
                        "type": "long"
                    }
                }
            }
        }
    }

21. Mapping Parameters
    - coerce - can be used to disable coercion (automatically cleaning up values) - "5" to 5 ""5.0" to 5 
    - copy_to - Enables you to create custom fields. Copies field values into a given field. Copies values, not terms. 
    {
        "first_name:{
            "type": "text",
            "copy_to": "full_name",
        },
        "last_name:{
            "type": "text",
            "copy_to": "full_name",
        },
        "full_name:{
            "type": "text"
        }
    }
    - dynamic - enables or disables adding fields to documents or inner objects dynamically 
    {
        "mapping": {
            "default": {
                "dynamic": false,
                "properties": {
                    "name": {
                        "dynamic": true,
                        "properties": {

                        }
                    }
                }
            }
        }
    }
    - properties - contains field mappings, either at the top level of documents or within inner objects 
    {
        "mappings": {
            "default": {
                "properties": {
                    "name": {
                        "properties": {
                            "first_name": {"type": "text" },
                            "last_name": {"type": "text" }
                        }
                    }
                }
            }
        }
    }
    - norms - whether or not to disable storing norms (used for relevance scores) - disable the relevance  - to save disk space 
    {
        "properties": {
            "full_name": {
                "type": "text",
                "norms": false 
            }
        }
    }
    - format - defines format for date fields
        - "yyyy-MM-dd", "epoc_millis", "epoch_second", etc 
        - Default:
            "strict_date_optional_time || epoch_millis" 
    - null_value 
        - replaces null values with the specified value 
        {
            "properties": {
                "discount": {
                    "type": "integer",
                    "null_value": 0
                }
            }
        }
    - fields - used to index fields in different ways 
    - Mapping Parameters - https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-params.html
    - Custom Date Format - http://www.joda.org/joda-time/apidocs/org/joda/time/format/DateTimeFormat.html
    - Format - https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-date-format.html#built-in-date-formats

22. Adding Multi-fields Mappings 
 - PUT /<database_name>/default/_mapping  //to set mapping
    {
        "properties": {
            "description": {
                "type": "<data_type>" 
            },
            "name": {
                "type": "text",
                "fields": {
                    "keyword": {
                        "type": "keyword"
                    }
                }
            },
            "tags": {
                "type": "text",
                "fields": {
                    "keyword": {
                        "type": "keyword"
                    }
                }
            },
        }
    }
    - GET /<database_name>/default/_mapping  // to view mapping
23. Define Custom Date formats
    - PUT /<database_name>/default/_mapping
    //Default
    {
        "properties":{
            "created": {
                "type": "date",
                "format": "strict_date_optional_time||epoch_millis" 
            }
        }
    }
    //Custom
    {
        "properties":{
            "created": {
                "type": "date",
                "format": "yyyy/MM/dd HH:mm:ss||yyy/MM/dd" 
            }
        }
    }
    - curl -H "Content-Type: application/json" -XPOST "http://localhost:9200/product/default/_bulk?pretty" --data-binary "@filename-bulk.json" 
24. Picking up new fields without dynamic mapping 
- POST /product/default/2000
{
    "description: "test",
    "discount:: 20
}
- PUT /product/default/_mapping
{
    "properties": {
        "discount": {
            "type": "integer"
        }
    }
}

- GET /product/default/_search
{
    "query": {
        "match": {
            "description": "test"
        }
    }
}

- GET /product/default/_search
{
    "query": {
        "term": {
            "discount": 20
        }
    }
}
//To pick up the discount mapping which was disable by dynamic mapping 
POST /product/_update_by_query?conflicts=proceed //the product has been re-index 
DELETE /product/default/2000 

25. Using the Analyze API 
    - POST _analyze 
    {
        "tokenizer": "standard",
        "text": "I'm in the mood for drinking semi dry red wine!"
    }
    - POST _analyze 
    {
        "tokenizer": "lowercase",
        "text": "I'm in the mood for drinking semi dry red wine!"
    }
     - POST _analyze 
    {
        "analyzer": "standard",
        "text": "I'm in the mood for drinking semi dry red wine!"
    }

26. Understanding the inverted index

4.Installing Marvel Dashboard
    - bin/plugin -i elasticsearch/marvel/latest
    - localhost:9200/_plugin/marvel/kibana/index.html#/dashboard 



Data Ingestion
- Indexing Document
- Field Types - how elasticsearch classify field 
    - See how elasticsearch maps:
        - Get /library/books/_mapping 
        - string, numbers (bytes, short, long, integer, double, float), date, boolean, null
        binary files (base64), geopspatial, ipaddress, token bytes
    - Field types are implicitly defined by elasticsearch
        - prior inserting data, explicityly define the field types 
        - Put /library/books/_mapping {
            "properties" {
                "<fied_name>": {
                    "type": "string"
                }
                "<fied_name>": {
                    "type": "long"
                }
                "<fied_name>": {
                    "type": "date"
                }
            }
        }
- Text analysis - how field is broken down to a searchable token
- Routing - How elasticsearch which shard to put the document 
- Bulk Indexing - how to batch large list of update in a single command 

- localhost:9200/_plugin/marvel/sense/index.html
    - inserting data in the left pane:
        PUT /<index_name>/<doc_type>/<doc_id> { <your Json data} 
        POST /<index_name>/<doc_type>/<doc_id> { <your Json data} 
        ex. PUT /library/books/1 {"title": "exampele" , "publish_date": "July 2013" }
        - when inserted, it will show in the right pane
            - each time you update the specific document - the version number increased 
        - POST /library/books/1?version=1 {"title": "exampele" , "publish_date": "July 2013" }
    - Searching:
        - Get /library/_search/?q="exampele" or Get /library/_search/?q=49.99
    - See how elasticsearch maps:
        - Get /library/books/_mapping 
    - Deleting Data:
        DELETE /library/books or DELETE /library/books/1

Advanced Ingestiion Topics 
    - localhost:9200/_plugin/marvel/sense/index.html
        - To analyze string: 
            GET /library/analyze?text=Example+text&analyzer=whitespace 
        - to add analyzer to _mapping : https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-analyzers.html
            - Put /library/books/_mapping {
            "properties" {
                    "<fied_name>": {
                        "type": "string",
                        "analyzer: "whitespace" 
                    }
                    "<fied_name>": {
                        "type": "long",
                         "analyzer: "stop" 
                    }
                    "<fied_name>": {
                        "type": "date",
                        "analyzer: "pattern" 
                    }
                }
            }
        - Stemming - breaking words down to its root  by using english as analyzer 
            - Put /library/books/_mapping {
            "properties" {
                    "<fied_name>": {
                        "type": "string",
                        "analyzer: "english" 
                    }
                    "<fied_name>": {
                        "type": "long",
                         "analyzer: "stop" 
                    }
                    "<fied_name>": {
                        "type": "date",
                        "analyzer: "pattern" 
                    }
                }
            }
        - multi-field 
            "properties" {
                    "<fied_name>": {
                        "type": "string",
                        "analyzer: "english",
                        "fields": {
                            "basic": {
                                "type": "string",
                                "analyzer": "standard",
                                "boost": "1.5"
                            }
                        }
                    }
                    "<fied_name>": {
                        "type": "long",
                         "analyzer: "stop" 
                    }
                    "<fied_name>": {
                        "type": "date",
                        "analyzer: "pattern" 
                    }
                }
            }
        - Document Routing 
            - How document is stored in the available shard
                - default: routing is based in the hashed of doc id 
            - 1st way field based routing: PUT /library/books/_mapping {
                "_routing": {
                    "required": "true",
                    "path": "language"
                }
            }
            - 2nd Way Document routing: POST /library/books/1?routing=2  - to route to specific shard 
        - batch Ingestiion
            - POST /library/books/_bulk 
            {"index":{"_id": "1"}}{
                <yourjson>
            }
            {"index":{"_id": "2"}}{
                <yourjson>
            }
            - To see if ingestion was successful: Get/library/_stats

Querying Elasticsearch
- Basic Query Types
    - Terms
    - Match
    - Range
    - Filters
- Specialized Query Types

 - Query Domain Specific language (DSL)
    - instead of writing query string through URL: www.example.com/_search?q=:fieldname=value&fieldname=value
    - {
        "simple_query_string": {
            "query": "web design".
            "analyzer": "english",
            "fields", ["title^5","description"],
            "default_operator": "AND"
        }
    }
    - Term query
        GET /library/books/_search 
       - Basic
       {
            "query": {
                "term" : 
                { "title" : "Kimchy" } 
            }
        }
        - General Purpose: 
        {
            "query": {
                "match" : 
                { "title" : "Kimchy" } 
            }
        }
         - General Purpose: When searching for multiple string, the default is or operator
        {
            "query": {
                "match" : 
                { "title" : "Kimchy" } 
                { "operator" : "and" } 
            }
        }
        - Multi_match
        {
            "query": {
                "multi_match" : {
                "query":    "Book title",
                "fields": [ "title" ],
                "operator" : "and"
                }
            }
        }
        - Match_Phrase
         {
            "query": {
                "match_pharse" : {
                "title":    "Book title"
                }
            }
        }
        - Match_Phrase_prefix
         {
            "query": {
                "match_pharse_prefix" : {
                "title":    "Book tit"
                }
            }
        }
        - Match_Phrase_prefix
        {
            "query": {
                "range" : {
                    "age" : {
                        "gte" : 10,
                        "lte" : 20,
                        "boost" : 2.0
                    }
                }
            }
        }
        - Filter: gives an unrank list, faster than full query - cached
        {
            "query": {
                "filtered": {
                "query": {
                    "multi_match": {
                    "query": "my dog has fleas",
                    "fields": ["name", "keywords"]
                    }
                },
                "filter": {
                    "term": {"status": 2}
                }
                }
            }
        }






