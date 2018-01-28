var L10_DOM;
(function (L10_DOM) {
    window.addEventListener("load", init);
    function init() {
        var name;
        var strasse;
        var hausnummer;
        var ort;
        var plz;
        var mail;
        let baum1 = {
            name: "Baum1",
            preis: 10
        };
        let baum2 = {
            name: "Baum2",
            preis: 15
        };
        let baum3 = {
            name: "Baum3",
            preis: 20
        };
        let halterung1 = {
            name: "Halterung1",
            preis: 10
        };
        let halterung2 = {
            name: "Halterung2",
            preis: 15
        };
        let halterung3 = {
            name: "Halterung3",
            preis: 20
        };
        let lieferung1 = {
            name: "Lieferung1",
            preis: 3
        };
        let lieferung2 = {
            name: "Lieferung2",
            preis: 10
        };
        let schmuck1 = {
            name: "Schmuck1",
            preis: 10
        };
        let schmuck2 = {
            name: "Schmuck2",
            preis: 15
        };
        let schmuck3 = {
            name: "Schmuck3",
            preis: 20
        };
        let kerze1 = {
            name: "Kerze1",
            preis: 10
        };
        let kerze2 = {
            name: "Kerze2",
            preis: 15
        };
        let kerze3 = {
            name: "Kerze3",
            preis: 20
        };
        let baeume = [baum1, baum2, baum3];
        let halterung = [halterung1, halterung2, halterung3];
        let lieferung = [lieferung1, lieferung2];
        let schmuck = [schmuck1, schmuck2, schmuck3];
        let kerze = [kerze1, kerze2, kerze3];
        //B�ume-------------------------------------------------------------
        var fieldset = document.createElement("FIELDSET");
        //The <fieldset> tag is used to group related elements in a form.
        // The <fieldset> tag draws a box around the related elements.
        document.body.appendChild(fieldset);
        for (let i = 0; i < baeume.length; i++) {
            var radio = document.createElement("INPUT");
            //daten eingeben -> kreisauswahl, nur eine auswahl
            var label = document.createElement("LABEL");
            // was im kaestchen/neben auswahl steht
            radio.setAttribute("type", "radio"); //typ radio
            radio.setAttribute("name", "baeume"); //name: baeume
            radio.setAttribute("value", baeume[i].preis.toString());
            radio.setAttribute("id", baeume[i].name);
            radio.addEventListener("change", HandleChange);
            label.innerText = baeume[i].name;
            fieldset.appendChild(radio);
            fieldset.appendChild(label);
        }
        //Halterung---------------------------------------------------------
        var fieldset2 = document.createElement("FIELDSET");
        document.body.appendChild(fieldset2);
        for (let i = 0; i < halterung.length; i++) {
            var radio = document.createElement("INPUT");
            var label = document.createElement("LABEL");
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", "halterung");
            radio.setAttribute("value", halterung[i].preis.toString());
            radio.setAttribute("id", halterung[i].name);
            radio.addEventListener("change", HandleChange);
            label.innerText = halterung[i].name;
            fieldset2.appendChild(radio);
            fieldset2.appendChild(label);
        }
        //Schmuck----------------------------------------------------------
        var fieldset3 = document.createElement("FIELDSET");
        document.body.appendChild(fieldset3);
        for (let i = 0; i < schmuck.length; i++) {
            // kein preis weil mehr auswahl als 1
            var label = document.createElement("LABEL");
            var stepper = document.createElement("INPUT");
            stepper.setAttribute("name", schmuck[i].name);
            // hier schmuck[i] weil man mehr als 1 auswaehlen kann
            stepper.setAttribute("type", "number");
            stepper.setAttribute("min", "0"); //minwert
            stepper.setAttribute("value", "0"); //startwert
            stepper.setAttribute("id", schmuck[i].name);
            stepper.addEventListener("change", HandleChange);
            label.innerText = schmuck[i].name;
            fieldset3.appendChild(label);
            fieldset3.appendChild(stepper);
        }
        //Kerze----------------------------------------------------------------------------
        var fieldset4 = document.createElement("FIELDSET");
        document.body.appendChild(fieldset4);
        for (let i = 0; i < kerze.length; i++) {
            var label = document.createElement("LABEL");
            var stepper2 = document.createElement("INPUT");
            stepper2.setAttribute("name", kerze[i].name);
            stepper2.setAttribute("type", "number");
            stepper2.setAttribute("min", "0");
            stepper2.setAttribute("value", "0");
            stepper2.setAttribute("id", kerze[i].name);
            stepper2.addEventListener("change", HandleChange);
            label.innerText = kerze[i].name;
            fieldset4.appendChild(label);
            fieldset4.appendChild(stepper2);
        }
        //Lieferung----------------------------------------------------------------------
        var fieldset5 = document.createElement("FIELDSET");
        document.body.appendChild(fieldset5);
        for (let i = 0; i < lieferung.length; i++) {
            var radio = document.createElement("INPUT");
            var label = document.createElement("LABEL");
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", "lieferung");
            radio.setAttribute("value", lieferung[i].preis.toString());
            radio.setAttribute("id", lieferung[i].name);
            radio.addEventListener("change", HandleChange);
            label.innerText = lieferung[i].name;
            fieldset5.appendChild(radio);
            fieldset5.appendChild(label);
        }
        //Adresse-----------------------------------------------------------------------
        var fieldset6 = document.createElement("FIELDSET");
        document.body.appendChild(fieldset6);
        let daten = document.createElement("daten");
        fieldset6.appendChild(daten);
        name = document.createElement("input");
        name.type = "text";
        name.name = "DatenName";
        name.placeholder = "Vorname, Nachname";
        name.required = true;
        daten.appendChild(name);
        strasse = document.createElement("input");
        strasse.type = "text";
        strasse.name = "DatenStrasse";
        strasse.placeholder = "Stra�e";
        strasse.required = true;
        daten.appendChild(strasse);
        hausnummer = document.createElement("input");
        hausnummer.type = "number";
        hausnummer.name = "DatenHausnummer";
        hausnummer.placeholder = "Hausnummer";
        hausnummer.pattern = "[0-9]{3}"; //max 3 stellen
        hausnummer.required = true;
        daten.appendChild(hausnummer);
        plz = document.createElement("input");
        plz.type = "text";
        plz.name = "DatenPLZ";
        plz.placeholder = "Postleitzahl";
        plz.pattern = "[0-9]{5}"; //max 5 stellen
        plz.required = true;
        daten.appendChild(plz);
        ort = document.createElement("input");
        ort.type = "text";
        ort.name = "DatenOrt";
        ort.placeholder = "Ort";
        ort.required = true;
        daten.appendChild(ort);
        mail = document.createElement("input");
        mail.type = "email";
        mail.name = "DatenMail";
        mail.placeholder = "E-Mail"; //hat at und .de?
        mail.required = true;
        daten.appendChild(mail);
        //ChangeHandler---------------------------------------------------------------------
        //  WK reagiert auf change-Event, was habe ich angewahetlt, wv kostet es
        let warenkorb = document.createElement("div");
        warenkorb.innerText = "Warenkorb\n"; //Text, Absatz
        document.body.appendChild(warenkorb);
        function HandleChange(_event) {
            // was angeklickt? welche eigenschaften, id
            //wv schmuck? * preis
        }
    }
})(L10_DOM || (L10_DOM = {}));
//# sourceMappingURL=main.js.map