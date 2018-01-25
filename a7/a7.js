/* Aufgabe: 7
    Name: Natalie D�ll
    Matrikel: 256026
    Datum: 01.12.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */
var StudiVZ;
(function (StudiVZ) {
    var students = []; //v students von typ StudentData Array
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn, a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 (m) oder 1 (w)) und Kommentar");
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
        let splitted = _input.split(','); //splitted:  variable zum speichern von data in array, _input.split(','): durch , gesplitted
        let studentDat = {
            matrikel: parseInt(splitted[0]),
            lastname: splitted[1],
            firstname: splitted[2],
            age: parseInt(splitted[3]),
            gender: parseInt(splitted[4]) == 0,
            com: splitted[5],
        };
        if (Number.isNaN(studentDat.matrikel)) {
            return "Matrikelnummer falsch";
        }
        students.push(studentDat); //students Array wird um studentDat erweitert
        return "Deine Daten: " + "\nMatrikelnr: " + studentDat.matrikel + "\nName: " + studentDat.lastname + "\nVorname: " + studentDat.firstname + "\nAlter: " + studentDat.age + "\nGeschlecht: " + studentDat.gender + "\nKommentar: " + studentDat.com;
    }
    function queryData(_matr) {
        for (let i = 0; i < students.length; i++) {
            if (students[0].matrikel == _matr) {
                return "Deine Daten: " + "\nMatrikelnr: " + students[i].matrikel + "\nName: " + students[i].lastname + "\nVorname: " + students[i].firstname + "\nAlter: " + students[i].age + "\nGeschlecht: " + students[i].gender + "\nKommentar: " + students[i].com;
            }
            else {
                continue;
            }
        }
        return "Matrikelnummer nicht gespeichert";
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=a7.js.map