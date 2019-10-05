function logout() {
    document.getElementById("logout").onclick = function () {
        console.log("token = " + token);
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8126/Projekt-Student/resources/user/logout?token=" + token, true);
        xhr.addEventListener("load", function () {
            console.log("Wynik połączenia:");
            console.log(this);
            if (this.status === 200) token = "";
        });
        xhr.send();
    }
}


window.onload = logout;