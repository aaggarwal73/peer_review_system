(function() {
    if( "user" in window.sessionStorage ) {
        let data = { email : window.sessionStorage.getItem( "user" ) };
        $.get( '/authenticate_student', data )
            .done( function( data ) {
                let is_correct_user = check_if_ids_match( data.id );
                if( is_correct_user ) {
                    return;
                } else {
                    location.href = "/login"
                }
            })
            .fail( function( data, return_status ) {
                console.log( return_status );
            });
    } else {
        location.href = "/login"
    }
})();


function check_if_ids_match( id ) {
    if( window.sessionStorage.getItem( "id" ) === id ) {
        return true;
    }
    return false;
}

