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
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (m oder w) und Kommentar");
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

    function saveData(_input: string): string {
         var splitted: string[] = _input.split(',');

    for (var matrikel in splitted) {
        
        students.matrikel = parseInt(splitted[0])
        
        
        }

 
       
        
   
        
return "Hier fehlt noch der richtige Code...";
         

        
        
    }
    
    function queryData(_matrikel: number): string {
        return "Hier fehlt noch der richtige Code...";
        
//         if( ){ //Daten gespeichert -> zurückgeben
           
//            }        
//       else {return "Diese Daten sind uns nicht bekannt!"}
    }
}