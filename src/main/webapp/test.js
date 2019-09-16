function test(){
    document.getElementById("test").onclick = function() {
        console.log("token = " + token);
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8126/Projekt-Student/resources/user/test/" + document.getElementById("dane").value + "?token=" + token, true);
        xhr.addEventListener("load", function() {
            console.log("Wynik połączenia:");
            console.log(this);
            if(this.status === 200) responses.innerHTML += this.response + "\n";
        });
        xhr.send();
    }


}

window.onload = test;