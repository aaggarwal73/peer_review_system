function login_user() {
    let account_credentials = {
        email    : $( '#input_email' ).val(),
        password : $( '#input_password' ).val()
    };

    $.get( '/login_user', account_credentials )
        .done( login_user_success )
        .fail( function( data, return_status ) {
            console.log( return_status );
        });
}

function login_user_success( data ) {
    window.sessionStorage.setItem( "user", data.email );
    window.sessionStorage.setItem( "id", data.id      );
    location.href = "/student/group_dashboard"
}
