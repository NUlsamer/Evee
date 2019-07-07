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

    r.db( 'map' ).table( 'pop_ups' )
        .insert( user )
        .run( request._rdb )
        .then( cursor => cursor.toArray() )
        .then( result => {
            response.send( result );
        } )
        .catch( error => response.send( error ) );
} );

router.get( '/', ( request, response ) => {
    r.db( 'map' ).table( 'pop_ups' )
        .run( request._rdb )
        .then( cursor => cursor.toArray() )
        .then( result => {
            response.send( result );
        } )
        .catch( error => response.send( error ) );
} );

router.get( '/:lat/:lng', ( request, response ) => {
    // Todo : Radius berechnung + live übertragung
    r.db( 'map' ).table( 'pop_ups' )
        .run( request._rdb )
        .then( cursor => cursor.toArray() )
        .then( result => {
            var lat1 = 49.956298399999994
            var lng1 = 9.7775562
            var lat2 = 49.80139000893655
            var lng2 = 10.0044384598732
            
            var R = 6371; // Radius of the earth in km
            var dLat = (lat2-lat1) * (Math.PI/180);  // deg2rad below
            var dLon = (lon2-lon1) * (Math.PI/180); 
            var a = 
                Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1 * (Math.PI/180)) * Math.cos(lat2 * (Math.PI/180)) * 
                Math.sin(dLon/2) * Math.sin(dLon/2)
                ; 
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
            var d = R * c; // Distance in km
            
            response.send( d );
        } )
        .catch( error => response.send( error ) );
} );

router.put( '/:pop_ups_id', ( request, response ) => {
    let pop_ups_id = request.params.pop_ups_id;

    r.db( 'map' ).table( 'pop_ups' )
        .get( pop_ups_id )
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

router.delete( '/:pop_ups_id', ( request, response ) => {
    let pop_ups_id = request.params.pop_ups_id;

    r.db( 'map' ).table( 'pop_ups' )
        .get( pop_ups_id )
        .delete()
        .run( request._rdb )
        .then( cursor => cursor.toArray() )
        .then( result => {
            response.send( result );
        } )
        .catch( error => response.send( error ) );
} );

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI/180)
}

module.exports = router;