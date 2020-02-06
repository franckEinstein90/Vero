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

const getAppData = function(dataKey){
    try {
        return config.get(dataKey)
    } catch {
        return null
    }
}

const veroData = (function(){

    let _rapidAPIKey    = getAppData('rapidAPIKey')
    let _rapidAPIHost   = getAppData('rapidAPIHost')
    let _appSecret      = getAppData('appSecret')

    return {
        rapidAPIKey     : _rapidAPIKey, 
        rapidAPIHost    : _rapidAPIHost, 
        appSecret       : _appSecret 
    }
})()

module.exports = {
    veroData
}


