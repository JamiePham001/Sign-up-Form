document.addEventListener('DOMContentLoaded', function() {
    var password = document.getElementById("pword");
    var confirm_password = document.getElementById("cpword");

    function validatePassword() {
        if (password.value != confirm_password.value) {
            confirm_password.setCustomValidity("Passwords Don't Match");
        } else {
            confirm_password.setCustomValidity('');
        }
    }

    if (password && confirm_password) {
        password.addEventListener('change', validatePassword);
        confirm_password.addEventListener('keyup', validatePassword);
    }
});