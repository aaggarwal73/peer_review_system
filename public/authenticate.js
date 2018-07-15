(function() {
    if( "user" in window.sessionStorage ) {
        return;
    } else {
        location.href = "/login"
    }
})();
