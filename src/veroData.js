/******************************************************************************
 * Vero by FranckEinstein90
 * FranckEinstein90 - 2010
 * ---------------------------------------------------------------------------
 *
  ****************************************************************************/
"use strict"
/*****************************************************************************/
const config = require('config')
/*****************************************************************************/

const getAppData = dataKey => config.has( dataKey ) ? config.get(dataKey) : null

const veroData = (function(){

    let _rapidAPIKey            = getAppData('rapidAPIKey')
    let _rapidAPICountryv1Host  = getAppData('rapidAPICountryv1Host')
    let _appSecret              = getAppData('appSecret')

    return {

        rapidAPIKey             : _rapidAPIKey, 
        rapidAPICountryv1Host   : _rapidAPICountryv1Host, 
        appSecret               : _appSecret 

    }
})()

module.exports = {
    veroData
}


