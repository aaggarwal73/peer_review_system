const express    = require( 'express'  );
const firebase   = require( 'firebase' );
const bodyParser = require( 'body-parser' );
const path       = require( 'path' );
const app        = express();

require( 'dotenv' ).config();

// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect and start up our firebase connection.
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "peer-review-gt18.firebaseapp.com",
    databaseURL: "https://peer-review-gt18.firebaseio.com",
    projectId: "peer-review-gt18",
    storageBucket: "peer-review-gt18.appspot.com",
    messagingSenderId: "837128347977"
  };
  firebase.initializeApp(config);

const database = firebase.database();

// These allow us to shortcut links and src references within our code.
app.use( '/public', express.static( 'public/'  ) );
app.use( express.static( 'public/', { extensions: ['html'] } ) );

// Create a new user account
app.post( '/create_new_account', function( req, res ) {
    let email    = req.body.email;
    let password = req.body.password;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( function( success ) {

            // Create new student instance
            safe_email = email.replace( '.', '_' );
            username = get_username_from_email( email );
            id = make_id();
            firebase.database().ref('students').child( username ).set({
                email : email,
                id    : id,
            });
         
            res.status(200).send( { email : email, id : id } );
        }, function( error ) {
            res.status(500).send( error.message );
        });
});

// Login a user
app.get( '/login_user', function( req, res ) {
    let email    = req.query.email;
    let password = req.query.password;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then( function( success ) {
        username = get_username_from_email( email );

        var user = {};
        firebase.database().ref('/students/' + username).once('value')
            .then( function(snapshot) {
                user["email"] = snapshot.val().email;
                user["id"]    = snapshot.val().id;

                res.status(200).send( { email : user.email, id : user.id } );
            });
    }, function( error ) {
        res.status(500).send( error.message );
    });
});

app.get( '/authenticate_student', function( req, res ) {
    let email    = req.query.email;
    username = get_username_from_email( email );

    firebase.database().ref('/students/' + username).once('value')
        .then( function(snapshot) {
            res.status(200).send( { id : snapshot.val().id } );
        }, function( error ) {
            res.status(500).send( error.message );
    });
});

app.get( '/authenticate_teachers', function( req, res ) {
    let email    = req.query.email;
    username = get_username_from_email( email );

    firebase.database().ref('/teachers/' + username).once('value')
        .then( function(snapshot) {
            res.status(200).send( { id : snapshot.val().id } );
        }, function( error ) {
            res.status(500).send( error.message );
    });
});

// Please keep this peice of middleware at the bottom of this page. It reroutes 404s.
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname + '/public/404.html'));
});

app.listen( 3000, () => console.log( 'Example app listening on port 3000!' ) );

// Make unique id with 15 characters.
function make_id() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 15; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

// Get the part of the email located before the "@" symbol.
function get_username_from_email( email ) {
    let at_location = email.indexOf( "@" );
    let username = email.substring( 0, at_location );

    return username;
}


