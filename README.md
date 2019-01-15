# katabank
A simple test  Api for a bank account 

## Prerequired
node js should be installed 

## Getting started 

run 
```
npm install
````
````
node app.js
````

1- Open an Api tester like : postman or Swagger

2- test the bank APi 

### Get method
````
localhost:3000/account
````
### Put method

````
localhost:3000/deposit
{ "value" : 100 } 
````
Value should passed as a Json in the body

### Put method

````
localhost:3000/withdrawal
{ "value" : 50 } 
````
Value should passed as a Json in the body
 (50 for eg)


### Get method
````
localhost:3000/history
````






















