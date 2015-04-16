var firebaseUrl = "https://glowing-fire-7170.firebaseio.com/.json";

var myAjaxGetToFirebase = function (callback) {
    var request = new XMLHttpRequest();
    request.open('GET', firebaseUrl, true);
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            console.log("success");
            console.log(this.response);
            callback(this.response);
        } else {
            console.error("this.response");
            callback(this.response);
        }
    }
    request.send();
}

var myAlert = function () {
    console.log("I think my callback worked?");
}

var divWriter = function (myStringParameter) {
    document.getElementById("divWriterResults").innerHTML = myStringParameter;
}

myAjaxGetToFirebase(divWriter);
