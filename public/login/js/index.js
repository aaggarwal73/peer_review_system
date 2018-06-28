function login_user() {
    let account_credentials = {
        email    : $( '#input_email' ).val(),
        password : $( '#input_password' ).val()
    };

    // $.get( '/create_new_account', account_credentials );
    //     .done( login_user_success )
    //     .fail( function( data, return_status ) {
    //         console.log( return_status );
    //     });
}

function login_user_resquest( data, return_status ) {

}
