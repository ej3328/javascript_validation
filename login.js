var responseDiv = document.body.querySelector(".response");


document.querySelector(".submit").addEventListener("click", function (){
    var validUser = document.body.querySelector(".input").value;


    if(validUser == "coolStudent123"){
        responseDiv.innerHTML = "Logging in!";
        location.href = 'index.html';
    }else{
        responseDiv.innerHTML = "You didn't type in a valid username.";
    }
})