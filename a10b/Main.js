var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", init);
    //Auswahlboxen erstellen
    let baumtyp = document.createElement("select");
    let halterung = document.createElement("select");
    let lieferopttyp = document.createElement("select");
    //Eingabefelder erstellen
    let persName = document.createElement("input");
    let persNachname = document.createElement("input");
    let persMail = document.createElement("input");
    let persAdresse = document.createElement("input");
    let persPlz = document.createElement("input");
    //Pruef-Button
    let prufen = document.createElement("div");
    //Warenkorb
    let wKorb = document.createElement("div");
    let h2 = document.createElement("h2");
    //All die erstellten Elemente werden später im 
    //Code mit Eigenschaften ausgestattet und ans DOM gehängt
    let gesamtpreis = 0; //Mit 0 iniziiert
    function init() {
        //Baeume definieren u anhängen
        baumtyp.addEventListener("change", input);
        document.getElementById("baum").appendChild(baumtyp);
        for (let i = 0; i < Aufgabe10.baumArten.length; i++) {
            let option = document.createElement("option");
            option.innerText = Aufgabe10.baumArten[i].name;
            baumtyp.id = Aufgabe10.baumArten[i].kategorie; //später im WK gebraucht-> prüfen ob Objekt schon vorhanden ist
            baumtyp.appendChild(option);
        }
        //Halterungen
        halterung.addEventListener("change", input);
        document.getElementById("halterung").appendChild(halterung);
        for (let i = 0; i < Aufgabe10.halterungen.length; i++) {
            let option = document.createElement("option");
            option.innerText = Aufgabe10.halterungen[i].name;
            halterung.id = Aufgabe10.halterungen[i].kategorie;
            halterung.appendChild(option);
        }
        //Kugeln
        for (let i = 0; i < Aufgabe10.kugelDaten.length; i++) {
            let kugeltyp = document.createElement("input");
            kugeltyp.type = "checkbox";
            kugeltyp.id = Aufgabe10.kugelDaten[i].kategorie;
            kugeltyp.addEventListener("change", function () {
                kugelInput(kugeltyp, "1"); //initiation im WK       //Darum: anonyme function
            }); //ruf funkt kugelInput auf, mit diesen parametern
            document.getElementById("kugeln").appendChild(kugeltyp);
            //Labels hinzufügen
            let kugellabel = document.createElement("label");
            kugellabel.innerText = Aufgabe10.kugelDaten[i].name;
            document.getElementById("kugeln").appendChild(kugellabel);
            //Anzahl Selektor
            let kugelanz = document.createElement("input");
            kugelanz.type = "number"; //stepper
            kugelanz.step = "1"; //in 1er Schritten 
            kugelanz.min = "0";
            kugelanz.value = "1"; //Startwert
            kugelanz.style.marginRight = "1.5em"; //Abstand zwischen feld und naechster box
            kugelanz.addEventListener("change", function () {
                kugeltyp.checked = true; //wenn change passiert -> setzt checked auf true
                kugelInput(kugeltyp, kugelanz.value);
            });
            document.getElementById("kugeln").appendChild(kugelanz);
        }
        //Kerzen
        for (let i = 0; i < Aufgabe10.kerzenDaten.length; i++) {
            let kerzentyp = document.createElement("input");
            kerzentyp.type = "checkbox";
            kerzentyp.id = Aufgabe10.kerzenDaten[i].kategorie;
            kerzentyp.addEventListener("change", function () {
                kerzenInput(kerzentyp, "1"); //initiation im WK       //Darum: anonyme function
            }); //ruf funkt kerzenInput auf, mit diesen parametern
            document.getElementById("kerzen").appendChild(kerzentyp);
            //Labels hinzufügen
            let kerzenlabel = document.createElement("label");
            kerzenlabel.innerText = Aufgabe10.kerzenDaten[i].name;
            document.getElementById("kerzen").appendChild(kerzenlabel);
            //Anzahl Selektor
            let kerzenanz = document.createElement("input");
            kerzenanz.type = "number"; //stepper
            kerzenanz.step = "1"; //in 1er Schritten
            kerzenanz.min = "0";
            kerzenanz.value = "1"; //Startwert
            kerzenanz.style.marginRight = "1.5em"; //Abstand zwischen feld und naechster box
            kerzenanz.addEventListener("change", function () {
                kerzentyp.checked = true; //wenn change passiert -> setzt checked auf true
                kerzenInput(kerzentyp, kerzenanz.value);
            });
            document.getElementById("kerzen").appendChild(kerzenanz);
        }
        //Lieferoptionen
        lieferopttyp.addEventListener("change", input);
        document.getElementById("lieferoption").appendChild(lieferopttyp);
        for (let i = 0; i < Aufgabe10.lieferOptionen.length; i++) {
            let option = document.createElement("option");
            option.innerText = Aufgabe10.lieferOptionen[i].name;
            lieferopttyp.id = Aufgabe10.lieferOptionen[i].kategorie;
            lieferopttyp.appendChild(option);
        }
        //Daten
        persName.type = "text";
        persName.placeholder = "Name";
        persName.required = true;
        persName.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(persName);
        persNachname.type = "text";
        persNachname.placeholder = "Nachname";
        persNachname.required = true;
        persNachname.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(persNachname);
        persMail.type = "email"; //string@string.string
        persMail.placeholder = "Email";
        persMail.required = true;
        persMail.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(persMail);
        persAdresse.type = "text";
        persAdresse.placeholder = "Adresse";
        persAdresse.required = true;
        persAdresse.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(persAdresse);
        persPlz.type = "text";
        persPlz.placeholder = "PLZ";
        persPlz.pattern = "[0-9]{5}";
        persPlz.required = true;
        document.getElementById("persdaten").appendChild(persPlz);
        //Button
        let button = document.createElement("button");
        button.className = "h";
        button.innerText = "Abschicken";
        button.addEventListener("click", PrufeDaten);
        button.style.marginTop = "10px";
        button.style.fontFamily = "Arima Madurai";
        button.style.fontSize = "16px";
        button.style.borderRadius = "5px";
        button.style.padding = "4px 20px";
        button.style.border = "none";
        document.getElementById("prufenbutton").appendChild(button);
    }
    // KUGEL
    function kugelInput(chkElement, anzahl) {
        for (let i = 0; i < Aufgabe10.kugelDaten.length; i++) {
            if (Aufgabe10.kugelDaten[i].kategorie == chkElement.id) {
                Warenkorb(chkElement.id, Aufgabe10.kugelDaten[i].name, Aufgabe10.kugelDaten[i].preis, parseInt(anzahl), chkElement.checked);
            }
        }
    }
    //KERZEN  
    function kerzenInput(chkElement, anzahl) {
        for (let i = 0; i < Aufgabe10.kerzenDaten.length; i++) {
            if (Aufgabe10.kerzenDaten[i].kategorie == chkElement.id) {
                Warenkorb(chkElement.id, Aufgabe10.kerzenDaten[i].name, Aufgabe10.kerzenDaten[i].preis, parseInt(anzahl), chkElement.checked);
            }
        }
    }
    //INPUT  
    function input() {
        var baumName = baumtyp.value; //baumtyp.value = ausgewählter Wert im DropDown
        if (baumName != "") {
            inDenWarenkorb(Aufgabe10.baumArten, baumName, true); //true --> element ist ausgewählt
        }
        else {
            inDenWarenkorb(Aufgabe10.baumArten, baumName, false); //false --> Element wurde abgewählt
        }
        var halterungName = halterung.value;
        if (halterungName != "") {
            inDenWarenkorb(Aufgabe10.halterungen, halterungName, true);
        }
        else {
            inDenWarenkorb(Aufgabe10.halterungen, halterungName, false); //wird aus WK rausgenommen
        }
        var lieferant = lieferopttyp.value;
        if (lieferant != "") {
            inDenWarenkorb(Aufgabe10.lieferOptionen, lieferant, true); //ist immer true
        }
    }
    //Wird von DropDown genutzt; Sucht nach dem Preis
    function inDenWarenkorb(daten, elementname, selected) {
        for (let i = 0; i < daten.length; i++) {
            if (daten[i].name == elementname) {
                Warenkorb(daten[i].kategorie, elementname, daten[i].preis, 1, selected);
            }
        }
    }
    function Warenkorb(_kategorie, _name, _preis, _anzahl, _selected) {
        h2.innerText = "Warenkorb";
        h2.style.color = "black";
        h2.style.position = "absolute";
        h2.style.right = "290px";
        h2.style.top = "0px";
        h2.style.zIndex = "99";
        document.getElementById("korb").appendChild(h2);
        wKorb.style.display = "inline-block";
        wKorb.style.position = "absolute";
        wKorb.style.right = "10px";
        wKorb.style.top = "10px";
        wKorb.style.width = "400px";
        wKorb.style.height = "450px";
        wKorb.style.backgroundColor = "#e0b16c";
        wKorb.style.paddingTop = "40px";
        wKorb.style.paddingLeft = "10px";
        document.getElementById("korb").appendChild(wKorb);
        var preisObjekte; //Preis von anzahl mal Element berechnen
        preisObjekte = _anzahl * _preis;
        //Wird erst bei zweitem Durchgang ausgefuehrt, zu Beginn keine Elemente in Korb vorhanden
        for (let i = 0; i < wKorb.getElementsByTagName("p").length; i++) {
            if (wKorb.getElementsByTagName("p")[i].id == _kategorie) {
                var innerPreis = wKorb.getElementsByTagName("p")[i].innerText.split(": ")[1]; //Preis extrahieren
                wKorb.getElementsByTagName("p")[i].remove(); //Wenn vorhanden Element löschen
                gesamtpreis = gesamtpreis - parseInt(innerPreis); //Gesamtpreis bereinigen
            }
            //Gesamtpreis p entfernen um später aktualisiert zurück einzufügen
            if (wKorb.getElementsByTagName("p")[i].id == "gesamtpreis") {
                wKorb.getElementsByTagName("p")[i].remove();
            }
        }
        if (_selected) {
            var p = document.createElement("p");
            p.id = _kategorie;
            p.innerText = _anzahl + "x " + _name;
            gesamtpreis = gesamtpreis + preisObjekte; //Gesamtpreis erhöhen
            p.innerText += ":  " + preisObjekte + "€";
            wKorb.appendChild(p);
        }
        //Gesamtpreis wieder hinzufügen
        var pGesamt = document.createElement("p");
        pGesamt.id = "gesamtpreis";
        pGesamt.innerText = "Gesamtpreis: " + gesamtpreis + " Euro";
        pGesamt.style.position = "absolute";
        pGesamt.style.bottom = "0";
        pGesamt.style.paddingTop = "10px";
        pGesamt.style.borderTop = "1px solid black";
        wKorb.appendChild(pGesamt);
    }
    function PrufeDaten() {
        prufen.innerText = "";
        if (persName.checkValidity() == false || persNachname.checkValidity() == false || persMail.checkValidity() == false || persPlz.checkValidity() == false || persAdresse.checkValidity() == false) {
            prufen.innerText = "Deine Eingabe war leider fehlerhaft!";
            prufen.style.color = "darkred";
            prufen.style.fontFamily = "Arima Madurai";
            document.body.appendChild(prufen);
        }
        else {
            prufen.innerText = "Deine Bestellung wurde erfolgreich verifiziert!";
            prufen.style.color = "#4CAF50";
            document.body.appendChild(prufen);
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Main.js.map