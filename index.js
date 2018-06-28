const express    = require( 'express'  );
const firebase   = require( 'firebase' );
const bodyParser = require( 'body-parser' );
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

// These allow us to shortcut links and src references within our code.
app.use( '/public', express.static( 'public/'  ) );
app.use( express.static( 'public/'             ) );
app.use( '/css', express.static( 'public/css/' ) );

app.post( '/create_new_account', function( req, res ) {
    let email = req.body.email;
    let password = req.body.password;

    var failed = false;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( function( success ) {
            res.status(200).send( 'Congrats new user' );
        }, function( error ) {
            console.log( error );
            res.status(500).send( error.message );
        });
});

app.listen( 3000, () => console.log( 'Example app listening on port 3000!' ) );
