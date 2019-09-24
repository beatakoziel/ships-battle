const ships = [2,2,1,1,1]; //tablica zawierajaca ilosc ztatków odpowienio dla poszczególnych wielkości
/*
number / name / size
1 aircraft curser 5
1 battleship 4
1 curiser 3
2 destroyer 2
2 submarine 1
 */

for (var r = 1; r <= 10; r++)
    for (var c = 1; c <= 10; c++)
        $("." + r + "-" + c).css("background-color", "white"); //ustawianie calej pierszej macierzy na kolor bialy

$("th").mouseover(function () {
    radio1Value = $("input[name='stat']:checked").val();
    radio2Value = $("input[name='orientation']:checked").val();
    kolor = this.style.backgroundColor;

    row = $(this).data('row');
    column = $(this).data('col');

    if (kolor !== "black") {
        if (radio2Value == "pion") {
            $(this).css("background-color", "pink");
            for (var i = 1; i < radio1Value; i++) {
                row++;
                kolor = $('.' + row + '-' + column).css("background-color");
                if (kolor !== 'rgb(0, 0, 0)')
                    $("." + row + "-" + column).css("background-color", "pink");
            }

        } else {
            $(this).css("background-color", "pink");
            for (var i = 1; i < radio1Value; i++) {
                column++;
                kolor = $('.' + row + '-' + column).css("background-color");
                if (kolor !== 'rgb(0, 0, 0)')
                    $("." + row + "-" + column).css("background-color", "pink");
            }
        }
    }
});
$("th").mouseout(function () {

    kolor = $(this).css("background-color");
    row = $(this).data('row');
    column = $(this).data('col');

    if (kolor == 'rgb(255, 192, 203)') {	//jesli rozowy
        $(this).css("background-color", "white");  //to zmien na bialy

        for (var i = 1; i <= radio1Value; i++) {
            kolor = $('.' + row + '-' + column).css("background-color");
            if (kolor == 'rgb(255, 192, 203)') { //jesli kolor rozowy
                $("." + row + "-" + column).css("background-color", "white"); //to zmien kolor na bialy
            }

            if (radio2Value == "pion")
                row++;
            else
                column++;
        }
    } else $("." + row + "-" + column).css("background-color", "black");
});
function checkship(orientation , row, column, size){ //funkcja sprawdzająca
    if(ships[size-1] <= 0) return true;//czy mozna postawić statek
    if( column +  size > 11  && orientation === "poziom") { //sprawdzenie czy postawiony statek nie wyjdzie poza tablice
        alert("Nie można tak ustawić statku");
        return true;
    }
    else if( row +  size > 11  && orientation === "pion") {
        alert("Nie można tak ustawić statku");
        return true;
    }

    // tu będą ify które będą łączyć się z backend i sprawdziać czy można ustawić statek

    return false;
}

$('th').click(function(){ //po kliknięciu
    let size = parseInt($("input[name='stat']:checked").val());
    let orientation = $("input[name='orientation']:checked").val();
    let color = this.style.backgroundColor;

    let row = parseInt($(this).data('row'));
    let column = parseInt($(this).data('col'));

    if(checkship(orientation,row,column,size)) return;//sprawdzenie czy mozna postawić dany statek

    if(orientation === "pion" ) {
        for (var i = 0; i < size; i++) {
            $("." + row + "-" + column).css("background-color", "black");
            row+=1;

        }
    }
    if(orientation === "poziom") {
        for (var i = 0; i < size; i++) {
            $("." + row + "-" + column).css("background-color", "black");
            column+=1;
        }
    }

});




/*

//COŚ TAM BEATY

//$(document).ready(

function setShip() {
    var radio1Value; //dlugosc statku
    var radio2Value; //orientacja statku
    var row;
    var column;
    var ifWhite;
    var kolor;
    var ifEnoughShips;
    var howManyToCheck;
    var kolor;


    for (var r = 1; r <= 10; r++)
        for (var c = 1; c <= 10; c++)
            $("." + r + "-" + c).css("background-color", "white"); //ustawianie calej pierszej macierzy na kolor bialy

//-----------------------------------------------------------------------------MOUSEOVER
    $("th").mouseover(function () {
        radio1Value = $("input[name='stat']:checked").val();
        radio2Value = $("input[name='orientation']:checked").val();
        kolor = this.style.backgroundColor;

        row = $(this).data('row');
        column = $(this).data('col');

        if (kolor !== "black") {
            if (radio2Value == "pion") {
                $(this).css("background-color", "pink");
                for (var i = 1; i < radio1Value; i++) {
                    row++;
                    kolor = $('.' + row + '-' + column).css("background-color");
                    if (kolor !== 'rgb(0, 0, 0)')
                        $("." + row + "-" + column).css("background-color", "pink");
                }

            } else {
                $(this).css("background-color", "pink");
                for (var i = 1; i < radio1Value; i++) {
                    column++;
                    kolor = $('.' + row + '-' + column).css("background-color");
                    if (kolor !== 'rgb(0, 0, 0)')
                        $("." + row + "-" + column).css("background-color", "pink");
                }
            }
        }
    });

//-----------------------------------------------------------------------------MOUSEOUT
    $("th").mouseout(function () {

        kolor = $(this).css("background-color");
        row = $(this).data('row');
        column = $(this).data('col');

        if (kolor == 'rgb(255, 192, 203)') {	//jesli rozowy
            $(this).css("background-color", "white");  //to zmien na bialy

            for (var i = 1; i <= radio1Value; i++) {
                kolor = $('.' + row + '-' + column).css("background-color");
                if (kolor == 'rgb(255, 192, 203)') { //jesli kolor rozowy
                    $("." + row + "-" + column).css("background-color", "white"); //to zmien kolor na bialy
                }

                if (radio2Value == "pion")
                    row++;
                else
                    column++;
            }
        } else $("." + row + "-" + column).css("background-color", "black");
    });

//-----------------------------------------------------------------------------CLICK
    var ifEnoughShips;
    $("th").click(function () {
        var radio1Value;
        var radio2Value;
        var checksEndPion;
        var checksEndPoziom;
        var isChecked;

        event.preventDefault();

        radio1Value = $("input[name='stat']:checked").val();
        radio2Value = $("input[name='orientation']:checked").val();

        //radio1Value = document.getElementsByName("stat").value;
        //radio2Value = document.getElementsByName("orientation").value;
        /*
        $.ajax({
            url: "http://localhost:8126/Projekt-Student/resources/ship/beata/" + radio1Value,
            method: "get",

            //data :{ship: radio1Value},
            success: function (response) {
                //alert("Success!");
                ifEnoughShips = response;
                //debugger;
                console.log(ifEnoughShips);
            },

            error: function (res) {
                console.log(res);
                //alert("AJAX - blad!");
            }
        });
        */
/*
        //console.log("if: " + ifEnoughShips);
        //alert(ifEnoughShips);
        //dodac ifa- jesli ifEnoughShips==1 to wykonac reszte onclick
        if (ifEnoughShips == 1) {
            kolor = this.style.backgroundColor;

            row = $(this).data('row');
            column = $(this).data('col');

            rowsEndPion = (+row + +radio1Value);
            rowsBeginPion = (+row - 1);
            colBeginPion = (+column - 1);
            colEndPion = (+column + 1);

            rowsBeginPoziom = (+row - 1);
            rowsEndPoziom = (+row + 1);
            colBeginPoziom = (+column - 1);
            colEndPoziom = (+column + +radio1Value);

            howManyToCheck = (6 + 2 * radio1Value);

            if (kolor !== "black") {
                if (radio2Value == "pion") { //-----------------USTAWIANIE ship dla orientacji PION
                    isChecked = 0;
                    row = $(this).data('row');
                    column = $(this).data('col');

                    if ((colBeginPion < 1) && (rowsBeginPion < 1)) { //lewy gorny rog
                        colBeginPion = 1;
                        rowsBeginPion = 1;
                        howManyToCheck = (+radio1Value + 2);
                    }

                    if ((colEndPion > 10) || (rowsEndPion > 10)) {
                        if ((colEndPion > 10) && (rowsEndPion > 10)) { //prawy dolny rog
                            colEndPion = 10;
                            rowsEndPion = 10;
                            howManyToCheck = (+radio1Value + 2);
                        } else if (rowsEndPion > 10) {
                            rowsEndPion = 10;
                            howManyToCheck = (3 + 2 * radio1Value);
                        } else if (colEndPion > 10) {
                            colEndPion = 10;
                            howManyToCheck = (+radio1Value + 4);
                        }
                    }

                    for (var x = rowsBeginPion; x <= rowsEndPion; x++) {
                        for (var y = colBeginPion; y <= colEndPion; y++) {
                            ifWhite = $('.' + x + '-' + y).css("background-color", "black");
                            //y.style.backgroundColor = "black";
                            if (ifWhite == 'black')
                                isChecked++;
                        }
                    }

                    //if (isChecked == howManyToCheck) {
                     //   $(this).css("background-color", "black");
                        for (var i = 1; i < radio1Value; i++) {
                            row++;
                            $("." + row + "-" + column).css("background-color", "black");
                        }

                   // } else alert("Nie da sie postawic statku...");
                } else if (radio2Value != "pion") { //-----------------USTAWIANIE ship dla orientacji INNEJ NIZ PION  ///ciekawe jakiej XD ?? można po skosie ?
                    isChecked = 0;
                    row = $(this).data('row');
                    column = $(this).data('col');

                    if ((colBeginPoziom < 1) && (rowsBeginPoziom < 1)) { //lewy gorny rog
                        colBeginPoziom = 1;
                        rowsBeginPoziom = 1;
                        howManyToCheck = (+radio1Value + 2);
                    }

                    if ((rowsEndPoziom > 10) || (colEndPoziom > 10)) {
                        if ((rowsEndPoziom > 10) && (colEndPoziom > 10)) { //prawy dolny rog
                            rowsEndPoziom = 10;
                            colEndPoziom = 10;
                            howManyToCheck = (+radio1Value + 2);
                        } else if (colEndPoziom > 10) {
                            colEndPoziom = 10;
                            howManyToCheck = (3 + 2 * radio1Value);
                        } else if (rowsEndPoziom > 10) {
                            rowsEndPoziom = 10;
                            howManyToCheck = (+radio1Value + 4);
                        }
                    }

                    for (var x = rowsBeginPoziom; x <= rowsEndPoziom; x++) {
                        for (var y = colBeginPoziom; y <= colEndPoziom; y++) {
                            ifWhite = $('.' + x + '-' + y).css("background-color");
                            if (ifWhite == 'rgb(255, 255, 255)')
                                isChecked++;
                        }
                    }

                    if (isChecked == howManyToCheck) {
                        $(this).css("background-color", "black");
                        for (var i = 1; i < radio1Value; i++) {
                            column++;
                            $("." + row + "-" + column).css("background-color", "black");
                        }
                    } else alert("Nie da sie postawic statku...");
                }
            }
        }

    });
)
*/