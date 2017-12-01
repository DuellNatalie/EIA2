/* Aufgabe: 7
    Name: Natalie D�ll
    Matrikel: 256026
    Datum: 01.12.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */
var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn, a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (m oder w) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        var splitted = _input.split(',');
        return "Hier fehlt noch der richtige Code...";
    }
    function queryData(_matrikel) {
        return "Hier fehlt noch der richtige Code...";
        //         if( ){ //Daten gespeichert -> zur�ckgeben
        //            }        
        //       else {return "Diese Daten sind uns nicht bekannt!"}
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=a7.js.map