
function login() {

    var token;

    document.getElementById("login").onclick = function () {

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8126/Projekt-Student/resources/user/login", true);
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.addEventListener("load", function () {
            console.log("Wynik połączenia:");
            console.log(this);
            if (this.status === 200){
                token = this.response;
                alert(token);
            }
        });

        let credentials = {}; //tworzony jest tutaj obiekt
        credentials.userName = document.getElementById("userName").value;
        credentials.password = document.getElementById("password").value;
        ///alert(credentials.userName);
        xhr.send(JSON.stringify(credentials));

        if(token==-1)
            alert('Zzarejstruj się najepirw');
        else if(token==0){
            alert('Urzytkownik zalogowany');
            location.href = "http://localhost:8126/Projekt-Student/game.html";
        }
        else
            location.href = "http://localhost:8126/Projekt-Student/game.html";
    }
}

window.onload = login;

//  http://localhost:9002/ships-battle/user