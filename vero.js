/******************************************************************************
 * Vero by FranckEinstein90
 *
 * Vero is a promises library for fetching information from api sources
 * FranckEinstein90
 * ---------------------------------------------------------------------------
 * It implements: 
 *
 * - alwaysResolve  :   a type of promise that always resolves
 *   USE CASE       :   fetching data from multiple sources concurrently, 
 *                      using Promise.all for batch processing without
 *                      getting rejections (see examples/ex1)
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
 * the examples use various free api services, include rapidAPI, postman echo and 
 * so forth - the keys, secrets, passwords are obtained and distributed through 
 * the src/veroData module - to reproduce the examples (and tests) you'll need
 * to obtain your corresponding credentials
 *
 * depends on the following libraries: 
 * - request
 * - validator

 * ***************************************************************************/
"use strict"

/******************************************************************************
 * This is a sandbox - code that gets written here and is interesting becomes a 
 * test (see test folder) or an example (see example folder) - the rest of this 
 * file could be whatever, just disregard
 * *****************************************************************************/
const veroData      = require('./src/veroData').veroData
const alwaysResolve = require('./src/alwaysResolve').alwaysResolve
const objectPromise = require('./src/objectPromise').objectPromise
/******************************************************************************/

//In this example, the countryCodes array contains
//2-digit country codes, which are passed as argument
//to the country api from rapidAPI.com
//Some of those call fail, some don't. All the 
//data is fetched concurrently, and the processing 
//happens when all the promises are resolved. 

const countryCodes  = ['us', 'fr', 'ur', 'ar', 'jp', 'ca', 'ap']
const goodAnswers   = []
const badAnswers    = []

//forms the api call url
const makeCall = countryAlphaCode => `https://${veroData.rapidAPICountryv1Host}/alpha/${countryAlphaCode}`

Promise.all(countryCodes.map(code => {

        return alwaysResolve(makeCall(code), {

            good: answer => {
                goodAnswers.push({
                    code,
                    country: JSON.parse(answer).name
                })
            },

            bad: _ => {
                badAnswers.push(code)
            },

            headers: {
                'x-rapidapi-host'   : veroData.rapidAPICountryv1HostHost,
                'x-rapidapi-key'    : veroData.rapidAPIKey
            }
        })
    }))

    .then(_ => {
        console.log(`got answers for the following: ${goodAnswers.map(x => x.code + ":" + x.country).join(' - ')}`)
        console.log(`but the following codes: [${badAnswers}] didn't get any results`)
    })
