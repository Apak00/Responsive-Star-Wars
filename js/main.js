'use strict';

function User(username, email, password, passwordRepeat ) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.passwordRepeat = passwordRepeat;
}
var user = function (){
    var x = document.getElementById("idRegisterForm");

    console.log(x.elements["username"]);

};

User.prototype.saveToDb = function () {
    // TODO save to database
};

Object.defineProperty(user, "email", {
    writable: false,
    enumerable: false,
    configurable: false
})

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

