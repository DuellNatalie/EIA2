namespace L10_DOM {

    window.addEventListener("load", init);

    function init(): void {
        var name: HTMLInputElement;
        var strasse: HTMLInputElement;
        var hausnummer: HTMLInputElement;
        var ort: HTMLInputElement;
        var plz: HTMLInputElement;
        var mail: HTMLInputElement;

        interface Produkte {
            name: string;  
            preis: number;
        }

        let baum1: Produkte = {
            name: "Baum1",
            preis: 10
        };
        let baum2: Produkte = {
            name: "Baum2",
            preis: 15
        };
        let baum3: Produkte = {
            name: "Baum3",
            preis: 20
        };
        let halterung1: Produkte = {
            name: "Halterung1",
            preis: 10
        };
        let halterung2: Produkte = {
            name: "Halterung2",
            preis: 15
        };
        let halterung3: Produkte = {
            name: "Halterung3",
            preis: 20
        };
        let lieferung1: Produkte = {
            name: "Lieferung1",
            preis: 3
        };
        let lieferung2: Produkte = {
            name: "Lieferung2",
            preis: 10
        };
        let schmuck1: Produkte = {
            name: "Schmuck1",
            preis: 10
        };
        let schmuck2: Produkte = {
            name: "Schmuck2",
            preis: 15
        };
        let schmuck3: Produkte = {
            name: "Schmuck3",
            preis: 20
        };
        let kerze1: Produkte = {
            name: "Kerze1",
            preis: 10
        };
        let kerze2: Produkte = {
            name: "Kerze2",
            preis: 15
        };
        let kerze3: Produkte = {
            name: "Kerze3",
            preis: 20
        };

        let baeume: Produkte[] = [baum1, baum2, baum3];
        let halterung: Produkte[] = [halterung1, halterung2, halterung3];
        let lieferung: Produkte[] = [lieferung1, lieferung2];
        let schmuck: Produkte[] = [schmuck1, schmuck2, schmuck3];
        let kerze: Produkte[] = [kerze1, kerze2, kerze3];

        //B‰ume-------------------------------------------------------------
        var fieldset: HTMLElement = document.createElement("FIELDSET");
        //The <fieldset> tag is used to group related elements in a form.
        // The <fieldset> tag draws a box around the related elements.
        document.body.appendChild(fieldset);
        for (let i: number = 0; i < baeume.length; i++) {
            var radio: HTMLElement = document.createElement("INPUT");
            //daten eingeben -> kreisauswahl, nur eine auswahl
            var label: HTMLElement = document.createElement("LABEL");
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
        var fieldset2: HTMLElement = document.createElement("FIELDSET");
        document.body.appendChild(fieldset2);
        for (let i: number = 0; i < halterung.length; i++) {
            var radio: HTMLElement = document.createElement("INPUT");
            var label: HTMLElement = document.createElement("LABEL");
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
        var fieldset3: HTMLElement = document.createElement("FIELDSET");
        document.body.appendChild(fieldset3);
        
        for (let i: number = 0; i < schmuck.length; i++) {

            var label: HTMLElement = document.createElement("LABEL");
            var stepper: HTMLElement = document.createElement("INPUT");

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
        var fieldset4: HTMLElement = document.createElement("FIELDSET");
        document.body.appendChild(fieldset4);
       
        for (let i: number = 0; i < kerze.length; i++) {
           
            var label: HTMLElement = document.createElement("LABEL");
            var stepper2: HTMLElement = document.createElement("INPUT");
            
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
        var fieldset5: HTMLElement = document.createElement("FIELDSET");
        document.body.appendChild(fieldset5);
        
        for (let i: number = 0; i < lieferung.length; i++) {
            
            var radio: HTMLElement = document.createElement("INPUT");
            var label: HTMLElement = document.createElement("LABEL");
            
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
        var fieldset6: HTMLElement = document.createElement("FIELDSET");
        document.body.appendChild(fieldset6);

        let daten: HTMLDivElement = <HTMLDivElement>document.createElement("daten");
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
        strasse.placeholder = "Straﬂe";
        strasse.required = true;
        daten.appendChild(strasse);

        hausnummer = document.createElement("input");
        hausnummer.type = "number";
        hausnummer.name = "DatenHausnummer";
        hausnummer.placeholder = "Hausnummer";
        hausnummer.pattern = "[0-9]{3}";
        hausnummer.required = true;
        daten.appendChild(hausnummer);

        plz = document.createElement("input");
        plz.type = "text";
        plz.name = "DatenPLZ";
        plz.placeholder = "Postleitzahl";
        plz.pattern = "[0-9]{5}";
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
        mail.placeholder = "E-Mail";
        mail.required = true;
        daten.appendChild(mail);

        //ChangeHandler---------------------------------------------------------------------

        let neu: HTMLElement = document.createElement("div");
        neu.innerText = "Warenkorb\n";
        neu.id = "Warenkorbdiv";
        document.body.appendChild(neu);

        function HandleChange(_event: Event): void {
            let target: HTMLInputElement = <HTMLInputElement>_event.target;
            let divList: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("warenkorb");

            for (let i: number = 0; i < divList.length; i++) {
                if (target.id + "bla" == divList[i].id) {

                    divList[i].remove();

                }
            }

            if (target.id + "bla" == "Baum1bla") {
                document.getElementById("Baum1bla").remove;
                document.getElementById("Baum2bla").remove;
                document.getElementById("Baum3bla").remove;

            }
            let div: HTMLElement = document.createElement("div");
            div.id = target.id + "bla";
            div.className = "warenkorb";
            div.innerText += target.id + " " + target.value + "Euro" + "\n";
            neu.appendChild(div);
        }


        let button: HTMLButtonElement = document.createElement("button");
        button.name = "Button";
        button.type = "button";
        button.innerText = "Pruefen";
        button.addEventListener("mousedown", handleMouseDown);
        document.body.appendChild(button);

        function handleMouseDown(_event: MouseEvent): void {
            let feedback: HTMLDivElement = document.createElement("div");
            if (name.checkValidity() == false || strasse.checkValidity() == false || hausnummer.checkValidity() == false || ort.checkValidity() == false || plz.checkValidity() == false || mail.checkValidity() == false) {
                feedback.innerText = "Adresse falsch";
                document.body.appendChild(feedback);

            }
            else {
                feedback.innerText = "Passt";
                document.body.appendChild(feedback);
            }
        }
    }
}
