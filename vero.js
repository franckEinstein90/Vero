/******************************************************************************
 * Vero by FranckEinstein90
 *
 * Vero is a promises library for fetching information from api sources
 * FranckEinstein90
 * ---------------------------------------------------------------------------
 * It implements: 
 *
 * - alwaysResolve  :   a type of promise that always resolves
 *   USE CASE       :   you want to fetch data from various sources in parallel, 
 *                      so you use Promises.all, so you don't want any 
 *                      but you don't want rejected promises. 
 *
 * - fsPromise      :   a finite state machine in which the nodes are promises
 *   USE CASE       :   complex network of API call with different outcomes
 *                      depending on result
 *
 * - promiseObject  :   a object implementation that gets constructed and 
 *                      updated as necessary init info returns from promise 
 *                      resolving
 *   USE CASE       :   object that has properties that get initialized 
 *                      from various sources
 *
 *
 * depends on the following libraries: 
 * - config
 * - request
 * - validator
 * ***************************************************************************/
"use strict"

/******************************************************************************
* This is a sandbox - code that gets written here and is interesting becomes a 
* test (see test folder) or an example (see example folder) - the rest of this 
* file could be whatever, just disregard
* *****************************************************************************/
const veroData          = require('./src/veroData').veroData
const alwaysResolve     = require('./src/alwaysResolve').alwaysResolve
/******************************************************************************/
const request = require('request')

const apiCall = 'https://restcountries-v1.p.rapidapi.com/alpha/jp'
alwaysResolve(apiCall, {
    good    :   x => console.log(x), 
    bad     :   x => console.log('didnt go well'), 
    headers :   {
        'x-rapidapi-host'   : veroData.rapidAPIHost,
        'x-rapidapi-key'    : veroData.rapidAPIKey 
    }
})


/*
const options = {
  method: 'GET',
  }

request(options, (err, res, body) => {
    if( err ){
        console.log('fu')
    }
    console.log(body)
})
*/




















