'use strict';

const r = require( 'rethinkdb' );
const router = require( 'express' ).Router();
const connect = require( '../lib/connect' );

router.post( '/', ( request, response ) => {
    let user = Object.assign( {}, {
        'name': request.body.name,
        'email': request.body.email,
        'password': request.body.password
    } );

    r.db( 'auth' ).table( 'users' )
        .insert( user )
        .run( request._rdb )
        .then( cursor => cursor.toArray() )
        .then( result => {
            response.send( result );
        } )
        .catch( error => response.send( error ) );
} );

router.get( '/', ( request, response ) => {
    r.db( 'auth' ).table( 'users' )
        .run( request._rdb )
        .then( cursor => cursor.toArray() )
        .then( result => {
            response.send( result );
        } )
        .catch( error => response.send( error ) );
} );

router.get( '/:email/:password', ( request, response ) => {
    let email = request.params.email;
    let password = request.params.password;

    r.db( 'auth' ).table( 'users' )
        .filter({
            "email": email,
            "password": password
        })
        .run( request._rdb )
        .then( cursor => cursor.toArray() )
        .then( result => {
            response.send( result );
        } )
        .catch( error => response.send( error ) );
} );

router.put( '/:user_id', ( request, response ) => {
    let user_id = request.params.user_id;

    r.db( 'auth' ).table( 'users' )
        .get( user_id )
        .update( {
            'name': request.body.name,
            'email': request.body.email,
            'password': request.body.password
        } )
        .run( request._rdb )
        .then( cursor => cursor.toArray() )
        .then( result => {
            response.send( result );
        } )
        .catch( error => response.send( error ) );
} );

router.delete( '/:user_id', ( request, response ) => {
    let user_id = request.params.user_id;

    r.db( 'auth' ).table( 'users' )
        .get( user_id )
        .delete()
        .run( request._rdb )
        .then( cursor => cursor.toArray() )
        .then( result => {
            response.send( result );
        } )
        .catch( error => response.send( error ) );
} );

module.exports = router;