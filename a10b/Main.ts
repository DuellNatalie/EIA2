namespace Aufgabe10{
    
    window.addEventListener("load", init);

    //Auswahlboxen erstellen
    let baumtyp: HTMLSelectElement = document.createElement("select");
    let halterung: HTMLSelectElement = document.createElement("select");
    let lieferopttyp: HTMLSelectElement = document.createElement("select");
    
    //Eingabefelder erstellen
    let persName: HTMLInputElement = document.createElement("input");
    let persNachname: HTMLInputElement = document.createElement("input");
    let persMail: HTMLInputElement = document.createElement("input");
    let persAdresse: HTMLInputElement = document.createElement("input");
    let persPlz: HTMLInputElement = document.createElement("input");
    
    //Pruef-Button
    let prufen: HTMLDivElement = document.createElement("div");
    
    //Warenkorb
    let wKorb: HTMLDivElement = document.createElement("div");
    let h2: HTMLHeadingElement = document.createElement("h2");
    
    let gesamtpreis: number = 0;
    
    function init(){
        
        
        
        baumtyp.addEventListener("change", input);
        document.getElementById("baumtyp").appendChild(baumtyp);
         
        
        for (let i: number = 0; i < baumArten.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.innerText = baumArten[i].name;
            baumtyp.id = baumArten[i].kategorie;
            baumtyp.appendChild(option);
        }
        
        halterung.addEventListener("change", input);
        document.getElementById("halterung").appendChild(halterung);
    
        
        for (let i: number = 0; i < halterungen.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.innerText = halterungen[i].name;
            halterung.id = halterungen[i].kategorie; 
            halterung.appendChild(option);
        }
        
        
         for (let i: number = 0; i < kugelDaten.length; i++) {
            let kugeltyp: HTMLInputElement = document.createElement("input");
            kugeltyp.type = "checkbox";
            kugeltyp.id = kugelDaten[i].kategorie;
            kugeltyp.addEventListener("change", function(): void {
                kugelInput(kugeltyp, "1"); //initiation im WK
            });
                           
            document.getElementById("kugeln").appendChild(kugeltyp);

            //Labels hinzuf�gen
            let kugellabel: HTMLLabelElement = document.createElement("label");
            kugellabel.innerText = kugelDaten[i].name;
            document.getElementById("kugeln").appendChild(kugellabel);

            //Anzahl Selektor
            let kugelanz: HTMLInputElement = document.createElement("input");
            kugelanz.type = "number";
            kugelanz.step = "1"; //in 1er Schritten 
            kugelanz.min = "0"; 
            kugelanz.value = "1"; //Startwert
            kugelanz.style.marginRight = "1.5em"; //Abstand zwischen feld und naechster box
            kugelanz.addEventListener("change", function(): void { 
                kugeltyp.checked = true;
                kugelInput(kugeltyp, kugelanz.value);
            });
            document.getElementById("kugeln").appendChild(kugelanz);
        }
        
        
        
        for (let i: number = 0; i < kerzenDaten.length; i++) {
            let kerzentyp: HTMLInputElement = document.createElement("input");
            kerzentyp.type = "checkbox";
            kerzentyp.id = kerzenDaten[i].kategorie;
            kerzentyp.addEventListener("change", function(): void {
                kerzenInput(kerzentyp, "1");
            });
                           
            document.getElementById("kerzen").appendChild(kerzentyp);

            //Labels hinzuf�gen
            let kerzenlabel: HTMLLabelElement = document.createElement("label");
            kerzenlabel.innerText = kerzenDaten[i].name;
            document.getElementById("kerzen").appendChild(kerzenlabel);

            //Anzahl Selektor
            let kerzenanz: HTMLInputElement = document.createElement("input");
            kerzenanz.type = "number";
            kerzenanz.step = "1";
            kerzenanz.min = "0";
            kerzenanz.value = "1";
            kerzenanz.style.marginRight = "1.5em";
            kerzenanz.addEventListener("change", function(): void { 
                kerzentyp.checked = true;
                kerzenInput(kerzentyp, kerzenanz.value);
            });
            document.getElementById("kerzen").appendChild(kerzenanz);
        }
        
        
        //Lieferoptionen
        lieferopttyp.addEventListener("change", input);
        document.getElementById("lieferoption").appendChild(lieferopttyp);

        for (let i: number = 0; i < lieferOptionen.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.innerText = lieferOptionen[i].name;
            lieferopttyp.id = lieferOptionen[i].kategorie;
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


        persMail.type = "email";
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
        let button: HTMLButtonElement = document.createElement("button");
        button.innerText = "Bestellung Pr�fen";
        button.addEventListener("click", PrufeDaten);
        button.style.marginTop = "10px";
        document.getElementById("prufenbutton").appendChild(button);
        
        }
    
    
    function kugelInput(chkElement: HTMLInputElement, anzahl: string): void {
        for (let i: number = 0; i < kugelDaten.length; i++) {
            if (kugelDaten[i].kategorie == chkElement.id) {

                Warenkorb(chkElement.id, kugelDaten[i].name, kugelDaten[i].preis, parseInt(anzahl), chkElement.checked);

            }
        }
    }
    
    
    function kerzenInput(chkElement: HTMLInputElement, anzahl: string): void {
        for (let i: number = 0; i < kerzenDaten.length; i++) {
            if (kerzenDaten[i].kategorie == chkElement.id) {

                Warenkorb(chkElement.id, kerzenDaten[i].name, kerzenDaten[i].preis, parseInt(anzahl), chkElement.checked);

            }
        }
    }
    
    
    function input(){
        var baumName: string = baumtyp.value;
        
        if (baumName != "") {
            inDenWarenkorb(baumArten, baumName, true);
            
        }
        else {
            inDenWarenkorb(baumArten, baumName, false);
        }


        var halterungName: string = halterung.value;
        if (halterungName != "") {
            inDenWarenkorb(halterungen, halterungName, true);
        } else {
            inDenWarenkorb(halterungen, halterungName, false);
        }



        var lieferant: string = lieferopttyp.value;
        if (lieferant != "") {
            inDenWarenkorb(lieferOptionen, lieferant, true);
        }
        }
   
    
    function inDenWarenkorb(daten: Daten[], elementname: string, selected: boolean): void { 
        
        for (let i: number = 0; i < daten.length; i++) {
            if (daten[i].name == elementname) {
                Warenkorb(daten[i].kategorie, elementname, daten[i].preis, 1, selected);

                
            }
        }
    }
    
    function Warenkorb(_kategorie: string, _name: string, _preis: number, _anzahl: number, _selected: boolean) : void{
     
        
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
        
        
        
        
        
        //Schleife schaut ob p schon vorhanden ist 
        for (let i: number = 0; i < wKorb.getElementsByTagName("p").length; i++) { 
            if (wKorb.getElementsByTagName("p")[i].id == _kategorie) {
                var innerPreis: string = wKorb.getElementsByTagName("p")[i].innerText.split(": ")[1]; 
                wKorb.getElementsByTagName("p")[i].remove(); 
                gesamtpreis = gesamtpreis - parseInt(innerPreis.substring(0, innerPreis.length-1));
                
                
            }
            
            //Gesamtpreis p entfernen um sp�ter aktualisiert zur�ck einzuf�gen
            if (wKorb.getElementsByTagName("p")[i].id == "gesamtpreis") {
                wKorb.getElementsByTagName("p")[i].remove();
            }
        }
      
        
        
        var preisObjekte: number = _anzahl * _preis;
      
        if(_selected){
            var p: HTMLParagraphElement = document.createElement("p");
            p.id = _kategorie;
            p.innerText = _anzahl + "x " +_name 
            if(_kategorie.substring(0, _kategorie.length-1) == "kerzen")
            { p.innerText += " Kerzen";}
            if(_kategorie.substring(0, _kategorie.length-1) == "kugel")
            { p.innerText += " Kugeln";}
            p.innerText += ":  " + preisObjekte + "�";
            
            wKorb.appendChild(p);
            }
       
        
        
        
        gesamtpreis += preisObjekte;
        var pGesamt: HTMLParagraphElement = document.createElement("p");
        pGesamt.id = "gesamtpreis";
        pGesamt.innerText = "Gesamtpreis: " + gesamtpreis + "�";
        pGesamt.style.position = "absolute";
        pGesamt.style.bottom = "0";
        pGesamt.style.paddingTop = "10px";
        pGesamt.style.borderTop = "1px solid black";
        wKorb.appendChild(pGesamt);
        
        
        
        }
    
    function PrufeDaten(): void {

        prufen.innerText = "";
        if (persName.checkValidity() == false || persNachname.checkValidity() == false || persMail.checkValidity() == false || persPlz.checkValidity() == false || persAdresse.checkValidity() == false) {
            prufen.innerText = "Deine Eingabe war leider fehlerhaft! �berpr�fe sie noch einmal.";
            prufen.style.color = "red";
            document.body.appendChild(prufen);
        }
        else {
            prufen.innerText = "Deine Bestellung wurde erfolgreich verifiziert!";
            prufen.style.color = "green";
            document.body.appendChild(prufen);
        }
    }
    
    }