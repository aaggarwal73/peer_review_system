function create_new_account() {

    let new_account_credentials = {
        email    : $( '#input_email' ).val(),
        password : $( '#input_password' ).val()
    };

    $.post( '/create_new_account', new_account_credentials )
        .done( create_new_account_success )
        .fail( function( data, return_status ) {
            console.log( return_status );
        });
}

function create_new_account_success( data ) {
    window.sessionStorage.setItem( "user", data.email );
    location.href = "/student/group_dashboard"
}
