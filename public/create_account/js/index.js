function create_new_account() {

    let new_account_credentials = {
        email    : $( '#input_email' ).val(),
        password : $( '#input_password' ).val()
    };

    $.post( '/create_new_account', new_account_credentials )
        .done( create_new_account_request )
        .fail( function( data, return_status ) {
            console.log( return_status );
        });
}

function create_new_account_request( data ) {
    console.log( "Congrats!" );
}
