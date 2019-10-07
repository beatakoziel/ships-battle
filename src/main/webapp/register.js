
document.getElementById("register").onclick = function () {
    var credentials = {};

    credentials.userName = document.getElementById("userName").value;
    credentials.password = document.getElementById("password").value;


    $.ajax({
        type: "POST",
        dataType: "json",
        url: "http://localhost:9002/ships-battle/user",
        data: credentials,
        success: function(response) {
            console.log(response);
          },
    });

    alert("Zarejestrowano urzytkownika "+ credentials.userName);
    location.href = "http://localhost:8126/Projekt-Student/index.html"

}



//http://localhost:9002/ships-battle/user
