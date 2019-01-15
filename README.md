# katabank
A simple test  Api for a Bank account 

## Prerequired
Node js should be installed 

## Getting started 

run 
```
npm install
````
````
node app.js
````

1- Open an Api tester like : postman or Swagger

2- Test the bank APi 

### Get method
````
localhost:3000/account
````
### Put method

````
localhost:3000/deposit
{ "value" : 100 } 
````
Value should be passed as Json format in the body

### Put method

````
localhost:3000/withdrawal
{ "value" : 50 } 
````
Value should be passed as Json format in the body
 (50 for eg)


### Get method
````
localhost:3000/history
````






















