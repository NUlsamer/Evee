'use strict';

const r = require( 'rethinkdb' );
const router = require( 'express' ).Router();
const connect = require( '../lib/connect' );

router.post( '/', ( request, response ) => {
    let user = Object.assign( {}, {
        'name': request.body.name,
        'discription': request.body.discription,
        'lat': request.body.lat,
        'lng': request.body.lng,
        'creator': request.body.creator
    } );

    r.db( 'map' ).table( 'events' )
        .insert( user )
        .run( request._rdb )
        .then( cursor => cursor.toArray() )
        .then( result => {
            response.send( result );
        } )
        .catch( error => response.send( error ) );
} );

router.get( '/', ( request, response ) => {
    r.db( 'map' ).table( 'events' )
        .run( request._rdb )
        .then( cursor => cursor.toArray() )
        .then( result => {
            response.send( result );
        } )
        .catch( error => response.send( error ) );
} );

router.get( '/:lat/:lng', ( request, response ) => {
    // Todo : Radius berechnung + live übertragung
    r.db( 'map' ).table( 'events' )
        .run( request._rdb )
        .then( cursor => cursor.toArray() )
        .then( result => {
            response.send( result );
        } )
        .catch( error => response.send( error ) );
} );

router.put( '/:event_id', ( request, response ) => {
    let event_id = request.params.event_id;

    r.db( 'map' ).table( 'events' )
        .get( event_id )
        .update( {
            'email': request.body.email,
            'name': request.body.name
        } )
        .run( request._rdb )
        .then( cursor => cursor.toArray() )
        .then( result => {
            response.send( result );
        } )
        .catch( error => response.send( error ) );
} );

router.delete( '/:event_id', ( request, response ) => {
    let event_id = request.params.event_id;

    r.db( 'map' ).table( 'events' )
        .get( event_id )
        .delete()
        .run( request._rdb )
        .then( cursor => cursor.toArray() )
        .then( result => {
            response.send( result );
        } )
        .catch( error => response.send( error ) );
} );

module.exports = router;