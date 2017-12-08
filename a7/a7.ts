/* Aufgabe: 7
    Name: Natalie Düll
    Matrikel: 256026
    Datum: 01.12.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */

namespace StudiVZ {

    interface StudentData {
        
        matrikel: number,
        lastname: string,
        firstname: string,
        age: number,
        gender: boolean,
        com: string,
        
    }

    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn, a oder s eingeben");

        switch (action) {
            
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 (m) oder 1 (w)) und Kommentar");
                alert(saveData(input));
                break;
                
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
                
            case "s":
            case "S":
                stop = true;
                
        }
    }

    function saveData(_input: string): string { //gibt String zurück

        let splitted: string[] = _input.split(',');  //splitted:  variable zum speichern von data in array, _input.split(','): durch , gesplitted

        let studentDat: StudentData = { //

            matrikel: parseInt(splitted[0]), //Pase Int wandelt substring in zahl
            lastname: splitted[1], //Stelle 1 in Array
            firstname: splitted[2],
            age: parseInt(splitted[3]),
            gender: parseInt(splitted[4]) == 0, //boolean, wenn 0 eigegeben wird ist es true (männlich), 
            com: splitted[5],
            
        }

        if (Number.isNaN(studentDat.matrikel)) {
            
            return "Matrikelnummer falsch";
            
        }

        students.push(studentDat); //studentsa Array wird um studentDat erweitert

        return "Deine Daten: " + "\nMatrikelnr: " + studentDat.matrikel + "\nName: " + studentDat.lastname + "\nVorname: " + studentDat.firstname + "\nAlter: " + studentDat.age + "\nGeschlecht: " + studentDat.gender + "\nKommentar: " + studentDat.com;
    }



    function queryData(_matr: number): string {

        for (let i: number = 0; i < students.length; i++) {

            if (students[i].matrikel == _matr) {

                return "Deine Daten: " + "\nMatrikelnr: " + students[i].matrikel + "\nName: " + students[i].lastname + "\nVorname: " + students[i].firstname + "\nAlter: " + students[i].age + "\nGeschlecht: " + students[i].gender + "\nKommentar: " + students[i].com;
            
            }

            
            else {
                
                continue;
                
            }
        }
        
        return "Matrikelnummer nicht gespeichert";

    }
}