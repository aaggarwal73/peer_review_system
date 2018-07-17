// function login_user() {
//     let account_credentials = {
//         email    : $( '#input_email' ).val(),
//         password : $( '#input_password' ).val()
//     };

//     $.get( '/login_user', account_credentials )
//         .done( login_user_success )
//         .fail( function( data, return_status ) {
//             console.log( return_status );
//         });
// }

// function login_user_success( data ) {
//     window.sessionStorage.setItem( "user", data.email );
//     window.sessionStorage.setItem( "id", data.id      );
//     location.href = "/student/group_dashboard"
// }

function() {

    ('#students-form-link').click(function(e) {
        ("#students-form").delay(100).fadeIn(100);
        ("#teachers-form").fadeOut(100);
        ('#teachers-form-link').removeClass('active');
        (this).addClass('active');
        e.preventDefault();
    });
    ('#teachers-form-link').click(function(e) {
        ("#teachers-form").delay(100).fadeIn(100);
        ("#students-form").fadeOut(100);
        ('#students-form-link').removeClass('active');
        (this).addClass('active');
        e.preventDefault();
    });

};
