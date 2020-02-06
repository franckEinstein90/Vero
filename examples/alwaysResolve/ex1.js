/******************************************************************************
 * Vero by FranckEinstein90
 *
 * ***************************************************************************/
"use strict"

const veroData      = require('./veroData').veroData
const alwaysResolve = require('./alwaysResolve').alwaysResolve
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
