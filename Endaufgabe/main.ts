namespace A {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let BG: ImageData;
    // export let confettis: confetti[] = [];
    let shapes: Move[] = [];
    let AppleKlick: number = 0;
    let PearKlick: number = 0;
    let KlickIsaac: number = 0;
let BottleKlick: number = 0;
let HouseKlick: number = 0;    
    
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    crc2 = canvas.getContext("2d");


    function init(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        BG = crc2.getImageData(0, 0, canvas.width, canvas.height);
        draw();

        document.getElementById("apple").addEventListener("click", touchApple)
        document.getElementById("apple").addEventListener("touchstart", touchApple)
        document.getElementById("pear").addEventListener("click", touchPear)
        document.getElementById("pear").addEventListener("touchstart", touchPear)
        document.getElementById("isaac").addEventListener("click", touchIsaac)
        document.getElementById("isaac").addEventListener("touchstart", touchIsaac)
        document.getElementById("bottle").addEventListener("click", touchBottle)
        document.getElementById("bottle").addEventListener("touchstart", touchBottle)
        
        document.getElementById("house").addEventListener("click", touchHouse)
        document.getElementById("house").addEventListener("touchstart", touchHouse)
        document.getElementById("moon").addEventListener("click", touchMoon)
        document.getElementById("moon").addEventListener("touchstart", touchMoon)

    }



    function touchApple(): void {
        AppleKlick++;
        if (AppleKlick == 1) {
            clicked();
            }}


    function touchPear(): void { 
    PearKlick++;
        if (PearKlick == 1) {
            alert("Eine Birne? Ich glaube nicht. \n Probier es nochmal!")
         }}
        

    function touchIsaac(): void { 
    
  if (KlickIsaac == 0) {
            alert("Isaac mag es gar nicht angefasst zu werden... \n Lass es oder versuche ihn zu reizen...");
            KlickIsaac++;
        }
        else {
            KlickIsaac++;
            if (KlickIsaac == 8) {
                crc2.putImageData(BG, 0, 0);
                
                BG = crc2.getImageData(0, 0, canvas.width, canvas.height);
               // generateConfetti();
                animate();
                
                alert("Du hast es geschafft! Allerdings ist Isaac jetzt sauer und da wäre noch die Sache mit der Schwerkraft... \n Versuch es doch mal anders! ");
            }}}

    function touchBottle(): void {
        
    BottleKlick++;
        if (BottleKlick == 1) {
            alert("Nein! Das bringt Isaac nur Probleme. \n Probier es nochmal!")
         }}
    
    
    

    function touchHouse(): void { }

    function touchMoon(): void { }

    function clicked() {
        crc2.putImageData(BG, 0, 0);
        drawAppleDown();
        BG = crc2.getImageData(0, 0, canvas.width, canvas.height);
        // generateConfetti();
        alert("Isaac ist wach! Vielleicht gibt es aber noch andere Möglichkeiten ihn zu wecken. \n Lade die Seite neu und probier es!")
        //  animate();  
    }











    function draw(): void {

        // Himmel
        var gradient = crc2.createLinearGradient(0, 0, 0, 720);
        gradient.addColorStop(0, "#000d1a");
        gradient.addColorStop(0.6, "#00284d");
        gradient.addColorStop(0.61, "#141f14");
        gradient.addColorStop(1, " #0a100a");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 1270, 720);
        var gradient2 = crc2.createRadialGradient(400, 150, 100, 400, 150, 50);


        //Random Sterne
        for (let i: number = 0; i < 70; i++) {
            let x: number = 10 + Math.random() * 1250;
            let y: number = 10 + Math.random() * 410;
            drawStars(x, y);
        }
        function drawStars(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.arc(_x, _y, 1.5, 0, 2 * Math.PI);
            crc2.fillStyle = "silver";
            crc2.fill();

            //Mond
            crc2.beginPath();
            crc2.arc(1105, 100, 60, 0, 2 * Math.PI);
            crc2.fillStyle = "silver";
            crc2.fill();
        }

        //Wolken  
        for (let i: number = 0; i < 5; i++) {
            let c: Clouds = new Clouds(Math.random() * 1270, 50 + Math.random() * 270);
            shapes.push(c);
        }


        //Baum
        crc2.beginPath();
        crc2.moveTo(220, 660);
        crc2.lineTo(350, 650);
        crc2.lineTo(320, 300);
        crc2.lineTo(270, 305);
        crc2.closePath();
        crc2.strokeStyle = " #1a0d00";
        crc2.stroke();
        crc2.fillStyle = " #1a0d00";
        crc2.fill();
        //Gruenzeug
        crc2.beginPath();
        crc2.arc(250, 300, 90, 0, 2 * Math.PI);
        crc2.fillStyle = "#1a3300";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(190, 250, 90, 0, 2 * Math.PI);
        crc2.fillStyle = "#284d00";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(230, 180, 90, 0, 2 * Math.PI);
        crc2.fillStyle = "#356600";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(300, 150, 90, 0, 2 * Math.PI);
        crc2.fillStyle = "#1a3300";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(370, 230, 90, 0, 2 * Math.PI);
        crc2.fillStyle = "#284d00";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(320, 300, 90, 0, 2 * Math.PI);
        crc2.fillStyle = "#356600";
        crc2.fill();
        //Apfel
        crc2.beginPath();
        crc2.arc(350, 355, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "darkred";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(360, 355, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "darkred";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(355, 340);
        crc2.lineTo(360, 335);
        crc2.lineTo(370, 330);
        crc2.closePath();
        crc2.strokeStyle = "#1a0d00";
        crc2.stroke();
        crc2.fillStyle = " #1a0d00";
        crc2.fill();

        //Isaaac
        //Kopf
        crc2.beginPath();
        crc2.arc(340, 520, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffbf80";
        crc2.fill();
        //Haare
        crc2.beginPath();
        crc2.arc(320, 505, 12, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(330, 498, 12, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(340, 495, 12, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(350, 498, 12, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(315, 515, 12, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(330, 505, 12, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        //Augen und Mund
        crc2.beginPath();
        crc2.moveTo(355, 518);
        crc2.lineTo(355, 525);
        crc2.strokeStyle = "black";
        crc2.stroke();

        crc2.moveTo(345, 532);
        crc2.lineTo(355, 537);
        crc2.strokeStyle = "black";
        crc2.stroke();

        //Körper 
        //         crc2.beginPath();
        //            crc2.arc(370, 648, 35, 1 * Math.PI, 2 * Math.PI);
        //            crc2.strokeStyle = "black";
        //            crc2.closePath();
        //            crc2.fillStyle = "grey";
        //    crc2.fill();  //          1/2 Kreis
        crc2.beginPath();
        crc2.moveTo(320, 543);
        crc2.lineTo(330, 650);
        crc2.lineTo(370, 635);
        crc2.lineTo(350, 548);
        crc2.fillStyle = "hsl(" + Math.random() * 360 + ", 80%, 21%)";
        crc2.fill();

        //Birne
        crc2.beginPath();
        crc2.arc(280, 645, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "#95b82e";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(280, 655, 13, 0, 2 * Math.PI);
        crc2.fillStyle = "#95b82e";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(280, 634);
        crc2.lineTo(285, 629);
        crc2.lineTo(290, 624);
        crc2.closePath();
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.fillStyle = " #1a0d00";
        crc2.fill();

        //Haus
        crc2.beginPath();
        crc2.moveTo(1050, 450);
        crc2.lineTo(1100, 450);
        crc2.lineTo(1100, 500);
        crc2.lineTo(1050, 500);
        crc2.lineTo(1050, 550);
        crc2.fillStyle = "hsl(" + Math.random() * 360 + ", 40%, 75%)";
        crc2.fill();
        //Fenster
        crc2.beginPath();
        crc2.moveTo(1060, 460);
        crc2.lineTo(1070, 460);
        crc2.lineTo(1070, 480);
        crc2.lineTo(1060, 480);
        crc2.lineTo(1060, 460);
        crc2.fillStyle = "black";
        crc2.fill();
        //Türe
        crc2.beginPath();
        crc2.moveTo(1080, 480);
        crc2.lineTo(1092, 480);
        crc2.lineTo(1092, 500);
        crc2.lineTo(1080, 500);
        crc2.lineTo(1080, 480);
        crc2.fillStyle = "#1a0d00";
        crc2.fill();
        //Dach
        crc2.beginPath();
        crc2.moveTo(1045, 450);
        crc2.lineTo(1105, 450);
        crc2.lineTo(1075, 420);
        crc2.lineTo(1045, 450);
        crc2.fillStyle = "darkred";
        crc2.fill();

        //Weinflasche
        crc2.beginPath();
        crc2.moveTo(450, 630);
        crc2.lineTo(500, 630);
        crc2.lineTo(500, 636);
        crc2.lineTo(518, 637);
        crc2.lineTo(518, 643);
        crc2.lineTo(500, 644);
        crc2.lineTo(500, 650);
        crc2.lineTo(450, 650);
        crc2.lineTo(450, 630);
        crc2.globalAlpha = 0.5;
        crc2.fillStyle = "white";
        crc2.fill();
        //Wein
        crc2.beginPath();
        crc2.moveTo(450, 648);
        crc2.lineTo(500, 648);
        crc2.lineWidth = 5;
        crc2.strokeStyle = "red";
        crc2.stroke();

        BG = crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }

    function drawAppleDown(): void {
        crc2.beginPath();
        crc2.arc(320, 300, 90, 0, 2 * Math.PI);
        crc2.fillStyle = "#356600";
        crc2.fill();
        crc2.arc(320, 300, 90, 0, 2 * Math.PI);
        crc2.fillStyle = "#356600";
        crc2.fill();
        //Apfel
        crc2.beginPath();
        crc2.arc(350, 495, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "darkred";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(360, 495, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "darkred";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(355, 480);
        crc2.lineTo(360, 475);
        crc2.lineTo(370, 470);
        crc2.closePath();
        crc2.strokeStyle = "#1a0d00";
        crc2.stroke();
        crc2.fillStyle = " #1a0d00";
        crc2.fill();
    }

    //ANIMATAION/////////////////////////////////////////////////
    function animate(): void {
        crc2.putImageData(BG, 0, 0);


        for (let i: number = 0; i < shapes.length; i++) {
            let s: Move = shapes[i];
            s.move();
        }
        window.setTimeout(animate, 25);

    }


}