# Vero

 Vero is a promises library for fetching information from api sources
 
It implements: 

- alwaysResolve: a type of promise that always resolves
  Use case: you want to fetch data from various sources in 
  parallel, using Promises.all, but you don't want any rejected 
  promises. You would rather get the result as null if the call 
  didn't work out
 
- fsPromise: a finite state machine in which the nodes are 
  promises - USE CASE: you fetch information from source A, depending
  on the result, you might fetch from source B, or do something
  else. 

- promiseObject: a object implementation that gets constructed 
  and updated as necessary init info returns from 
  promise resolving - USE CASE: you make several calls in parallel, 
  all of which are going to affect the values of the properties of an
  object within your app. You don't know which is going to resolve 
  first - EXAMPLE: A service object instance only needs an id to 
  get created - your app makes several calls to different APIs, all
  of which return a common service ID, but different properties. 
    eg: you fetch 3 lists of services through 3 calls to 3 different services, 
    1) returns user information, 2) returns availability information, 
    3) returns location information. Each call goes to different hosts, and 
    so can and should be made in parallel. Since each response uses a 
    common id for services, you have an service object in your implementation that 
    can be created by the first of those returning calls (using the id) and 
    is updated as the other calls return 
    
vero relies on: 
- the request library
* ***************************************************************************/


This is a promise libray - I'm using this repo for dev and testing - when it's ready, my intention is to make it a package
