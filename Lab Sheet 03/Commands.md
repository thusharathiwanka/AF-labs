# Lab Sheet 03 - MongoDB Commands

## Create database and selecting database

```
use.sliit
```

## Create a collection

```
db.createCollection("lab_3")
```

## Insert document

```
db.lab_3.insertOne({
  "name": "John",
  "dateOfBirth": "1990-01-01T00:00:00Z",
  "subjects": ["Application frameworks", "Computer architecture"]
})
```

## Find document by name

```
db.lab_3.find({name: "John"})
```

## Find document by id

```
db.lab_3.find({"_id": ObjectId("603fe239ea4e1d3010b67a8a")})
```

## Update document

```
db.lab_3.updateOne({"name": "John"},{$push:{"subjects": "Distributed computing"}})
```

## Insert many documents at once

```
db.lab_3.insertMany([{
  "name": "Smith",
  "dateOfBirth": "1990-01-15T00:00:00Z",
  "subjects": ["Application frameworks", "Computer architecture"],
  "isActive": true
},
{
  "name": "Jane",
  "dateOfBirth": "1990-02-15T00:00:00Z",
  "subjects": ["Application frameworks", "Computer architecture"],
  "isActive": "false"
}])
```

## Update document by finding document using two properties

```
db.lab_3.updateOne({"name": "Smith", "isActive": true},{$push: {"subjects": "Distributed computing"}})
```

## Update first document

```
db.lab_3.updateOne({"name": "John"},{$push: {"isActive": false}})
```

## Delete one document

```
db.lab_3.deleteOne({"name": "John"})
```
