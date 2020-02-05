/******************************************************************************
 * Vero is a promises library for fetching information from api sources
 * FranckEinstein90
 * ---------------------------------------------------------------------------
 * It implements: 
 * - alwaysResolve: a type of promise that always resolves
 *   Use case: you want to fetch data from various sources in paralell, 
 *   so you use Promises.all, so you don't want any rejected promises. 
 *
 * - fsPromise:     a finite state machine in which the nodes are promises
 * - promiseObject: a object implementation that gets constructed and updated 
 *   as necessary init info returns from promise resolving
 *
 *
 * It relies on: 
 * - the request library
 * ***************************************************************************/


