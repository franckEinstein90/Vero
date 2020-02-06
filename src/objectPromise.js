"use strict"

class objectPromiseProto {

    constructor({

    }){

    }
}

const objectPromise = function( keyLabel  = 'id' ){

    let _keyLabel   = keyLabel
    let _objects    = new Map()
    let _update     = function( object, objectInfo ){
        
    }

    return: {

        setOrUpdate: function( objectInfo ){

            let id = objectInfo[_keyLabel]
            if(! _objects.has( id )){
                _objects.set( id, { })
            } 
            _update(_objects.get(id) , objectInfo )
        }

    }
}

module.exports = {
    objectPromise
}




