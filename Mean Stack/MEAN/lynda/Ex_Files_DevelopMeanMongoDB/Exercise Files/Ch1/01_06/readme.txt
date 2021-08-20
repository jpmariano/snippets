mongod

vim /etc/mongod.conf
mkdir data
mongod --nojournal

echo 'mongod --nojournal --dbpath=data' >  mongod-start

./mongod-start
alt+t
mongo
db
use myDB
db.users.insert( {
    user_id: "abc123",
    age: 55,
    status: "A"
 } )
 db.users.find()
 exit
 
 
 
 echo /data >> .gitignore
 echo mongo-start >> .gitignore
 git add .
 git commit -m "app-skeleton"
 git push --set-upstream origin master
 
