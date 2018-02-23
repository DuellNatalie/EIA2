var A;
(function (A) {
    window.addEventListener("load", init);
    let BG;
    A.glitterx = [];
    let glitterN = Math.floor(Math.random() * (800 - 200) + 200);
    let shapes = [];
    let AppleKlick = 0;
    let PearKlick = 0;
    let KlickIsaac = 0;
    let BottleKlick = 0;
    let HouseKlick = 0;
    let MoonKlick = 0;
    let canvas = document.getElementsByTagName("canvas")[0];
    A.crc2 = canvas.getContext("2d");
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        A.crc2 = canvas.getContext("2d");
        BG = A.crc2.getImageData(0, 0, canvas.width, canvas.height);
        draw();
        document.getElementById("apple").addEventListener("click", touchApple);
        document.getElementById("apple").addEventListener("touchstart", touchApple);
        document.getElementById("pear").addEventListener("click", touchPear);
        document.getElementById("pear").addEventListener("touchstart", touchPear);
        document.getElementById("isaac").addEventListener("click", touchIsaac);
        document.getElementById("isaac").addEventListener("touchstart", touchIsaac);
        document.getElementById("bottle").addEventListener("click", touchBottle);
        document.getElementById("bottle").addEventListener("touchstart", touchBottle);
        document.getElementById("house").addEventListener("click", touchHouse);
        document.getElementById("house").addEventListener("touchstart", touchHouse);
        document.getElementById("moon").addEventListener("click", touchMoon);
        document.getElementById("moon").addEventListener("touchstart", touchMoon);
    }
    function touchApple() {
        AppleKlick++;
        if (AppleKlick == 1) {
            clicked();
        }
    }
    function touchPear() {
        PearKlick++;
        if (PearKlick == 1) {
            alert("Eine Birne? Ich glaube nicht. \n Probier es nochmal!");
        }
    }
    function touchIsaac() {
        if (KlickIsaac == 0) {
            alert("Isaac mag es gar nicht angefasst zu werden... \n Lass es oder versuche ihn zu reizen...");
            KlickIsaac++;
        }
        else {
            KlickIsaac++;
            if (KlickIsaac == 8) {
                A.crc2.putImageData(BG, 0, 0);
                BG = A.crc2.getImageData(0, 0, canvas.width, canvas.height);
                letItGlitter();
                animate();
                alert("Du hast es geschafft! Allerdings ist Isaac jetzt sauer und da w�re noch die Sache mit der Schwerkraft... \n Versuch es doch mal anders! ");
            }
        }
    }
    function touchBottle() {
        BottleKlick++;
        if (BottleKlick == 1) {
            alert("Nein! Das bringt Isaac nur Probleme. \n Probier es nochmal!");
        }
    }
    function touchHouse() {
        if (HouseKlick == 0) {
            alert("Die bewohner schlafen schon... \n Du willst sie doch nicht wecken, oder?");
            HouseKlick++;
        }
        else {
            HouseKlick++;
            if (HouseKlick == 5) {
                A.crc2.putImageData(BG, 0, 0);
                BG = A.crc2.getImageData(0, 0, canvas.width, canvas.height);
                clicked2();
                alert("Super, du hast die falschen geweckt. Isaac wird das auch nicht helfen. \n Versuch es nochmal! ");
            }
        }
    }
    function touchMoon() {
        MoonKlick++;
        if (MoonKlick == 1) {
            alert("Was soll das werden? Du sollst Isaac wecken! \n Probier es nochmal!");
        }
    }
    function clicked() {
        A.crc2.putImageData(BG, 0, 0);
        drawAppleDown();
        BG = A.crc2.getImageData(0, 0, canvas.width, canvas.height);
        letItGlitter();
        alert("Isaac ist wach! Vielleicht gibt es aber noch andere M�glichkeiten ihn zu wecken. \n Lade die Seite neu und probier es!");
        animate();
    }
    function clicked2() {
        A.crc2.putImageData(BG, 0, 0);
        drawHouseDown();
        BG = A.crc2.getImageData(0, 0, canvas.width, canvas.height);
    }
    function letItGlitter() {
        for (let i = 0; i < glitterN; i++) {
            let color = "rgb(" + Math.floor(Math.random() * 200) + "," + Math.floor(Math.random() * 255) + ","
                + Math.floor(Math.random() * 0) + ")";
            let x = Math.floor(Math.random() * (1551));
            let y = Math.floor(Math.random() * (-700));
            let s = new A.glitter(x, y, color);
            A.glitterx.push(s);
        }
    }
    function draw() {
        // Himmel
        var gradient = A.crc2.createLinearGradient(0, 0, 0, 720);
        gradient.addColorStop(0, "#000d1a");
        gradient.addColorStop(0.6, "#00284d");
        gradient.addColorStop(0.61, "#141f14");
        gradient.addColorStop(1, " #0a100a");
        A.crc2.fillStyle = gradient;
        A.crc2.fillRect(0, 0, 1270, 720);
        var gradient2 = A.crc2.createRadialGradient(400, 150, 100, 400, 150, 50);
        //Random Sterne
        for (let i = 0; i < 70; i++) {
            let x = 10 + Math.random() * 1250;
            let y = 10 + Math.random() * 410;
            drawStars(x, y);
        }
        function drawStars(_x, _y) {
            A.crc2.beginPath();
            A.crc2.arc(_x, _y, 1.5, 0, 2 * Math.PI);
            A.crc2.fillStyle = "silver";
            A.crc2.fill();
            //Mond
            A.crc2.beginPath();
            A.crc2.arc(1105, 100, 60, 0, 2 * Math.PI);
            A.crc2.fillStyle = "silver";
            A.crc2.fill();
        }
        //Wolken  
        for (let i = 0; i < 5; i++) {
            let c = new A.Clouds(Math.random() * 1270, 50 + Math.random() * 270);
            shapes.push(c);
        }
        //Baum
        A.crc2.beginPath();
        A.crc2.moveTo(220, 660);
        A.crc2.lineTo(350, 650);
        A.crc2.lineTo(320, 300);
        A.crc2.lineTo(270, 305);
        A.crc2.closePath();
        A.crc2.strokeStyle = " #1a0d00";
        A.crc2.stroke();
        A.crc2.fillStyle = " #1a0d00";
        A.crc2.fill();
        //Gruenzeug
        A.crc2.beginPath();
        A.crc2.arc(250, 300, 90, 0, 2 * Math.PI);
        A.crc2.fillStyle = "#1a3300";
        A.crc2.fill();
        A.crc2.beginPath();
        A.crc2.arc(190, 250, 90, 0, 2 * Math.PI);
        A.crc2.fillStyle = "#284d00";
        A.crc2.fill();
        A.crc2.beginPath();
        A.crc2.arc(230, 180, 90, 0, 2 * Math.PI);
        A.crc2.fillStyle = "#356600";
        A.crc2.fill();
        A.crc2.beginPath();
        A.crc2.arc(300, 150, 90, 0, 2 * Math.PI);
        A.crc2.fillStyle = "#1a3300";
        A.crc2.fill();
        A.crc2.beginPath();
        A.crc2.arc(370, 230, 90, 0, 2 * Math.PI);
        A.crc2.fillStyle = "#284d00";
        A.crc2.fill();
        A.crc2.beginPath();
        A.crc2.arc(320, 300, 90, 0, 2 * Math.PI);
        A.crc2.fillStyle = "#356600";
        A.crc2.fill();
        //Apfel
        A.crc2.beginPath();
        A.crc2.arc(350, 355, 15, 0, 2 * Math.PI);
        A.crc2.fillStyle = "darkred";
        A.crc2.fill();
        A.crc2.beginPath();
        A.crc2.arc(360, 355, 15, 0, 2 * Math.PI);
        A.crc2.fillStyle = "darkred";
        A.crc2.fill();
        A.crc2.beginPath();
        A.crc2.moveTo(355, 340);
        A.crc2.lineTo(360, 335);
        A.crc2.lineTo(370, 330);
        A.crc2.closePath();
        A.crc2.strokeStyle = "#1a0d00";
        A.crc2.stroke();
        A.crc2.fillStyle = " #1a0d00";
        A.crc2.fill();
        //Isaaac
        //Kopf
        A.crc2.beginPath();
        A.crc2.arc(340, 520, 25, 0, 2 * Math.PI);
        A.crc2.fillStyle = "#ffbf80";
        A.crc2.fill();
        //Haare
        A.crc2.beginPath();
        A.crc2.arc(320, 505, 12, 0, 2 * Math.PI);
        A.crc2.fillStyle = "black";
        A.crc2.fill();
        A.crc2.beginPath();
        A.crc2.arc(330, 498, 12, 0, 2 * Math.PI);
        A.crc2.fillStyle = "black";
        A.crc2.fill();
        A.crc2.beginPath();
        A.crc2.arc(340, 495, 12, 0, 2 * Math.PI);
        A.crc2.fillStyle = "black";
        A.crc2.fill();
        A.crc2.beginPath();
        A.crc2.arc(350, 498, 12, 0, 2 * Math.PI);
        A.crc2.fillStyle = "black";
        A.crc2.fill();
        A.crc2.beginPath();
        A.crc2.arc(315, 515, 12, 0, 2 * Math.PI);
        A.crc2.fillStyle = "black";
        A.crc2.fill();
        A.crc2.beginPath();
        A.crc2.arc(330, 505, 12, 0, 2 * Math.PI);
        A.crc2.fillStyle = "black";
        A.crc2.fill();
        //Augen und Mund
        A.crc2.beginPath();
        A.crc2.moveTo(355, 518);
        A.crc2.lineTo(355, 525);
        A.crc2.strokeStyle = "black";
        A.crc2.stroke();
        A.crc2.moveTo(345, 532);
        A.crc2.lineTo(355, 537);
        A.crc2.strokeStyle = "black";
        A.crc2.stroke();
        //K�rper 
        //         crc2.beginPath();
        //            crc2.arc(370, 648, 35, 1 * Math.PI, 2 * Math.PI);
        //            crc2.strokeStyle = "black";
        //            crc2.closePath();
        //            crc2.fillStyle = "grey";
        //    crc2.fill();  //          1/2 Kreis
        A.crc2.beginPath();
        A.crc2.moveTo(320, 543);
        A.crc2.lineTo(330, 650);
        A.crc2.lineTo(370, 635);
        A.crc2.lineTo(350, 548);
        A.crc2.fillStyle = "hsl(" + Math.random() * 360 + ", 80%, 21%)";
        A.crc2.fill();
        //Birne
        A.crc2.beginPath();
        A.crc2.arc(280, 645, 10, 0, 2 * Math.PI);
        A.crc2.fillStyle = "#95b82e";
        A.crc2.fill();
        A.crc2.beginPath();
        A.crc2.arc(280, 655, 13, 0, 2 * Math.PI);
        A.crc2.fillStyle = "#95b82e";
        A.crc2.fill();
        A.crc2.beginPath();
        A.crc2.moveTo(280, 634);
        A.crc2.lineTo(285, 629);
        A.crc2.lineTo(290, 624);
        A.crc2.closePath();
        A.crc2.strokeStyle = "white";
        A.crc2.stroke();
        A.crc2.fillStyle = " #1a0d00";
        A.crc2.fill();
        //Haus
        A.crc2.beginPath();
        A.crc2.moveTo(1050, 450);
        A.crc2.lineTo(1100, 450);
        A.crc2.lineTo(1100, 500);
        A.crc2.lineTo(1050, 500);
        A.crc2.lineTo(1050, 550);
        A.crc2.fillStyle = "hsl(" + Math.random() * 360 + ", 40%, 75%)";
        A.crc2.fill();
        //Fenster
        A.crc2.beginPath();
        A.crc2.moveTo(1060, 460);
        A.crc2.lineTo(1070, 460);
        A.crc2.lineTo(1070, 480);
        A.crc2.lineTo(1060, 480);
        A.crc2.lineTo(1060, 460);
        A.crc2.fillStyle = "black";
        A.crc2.fill();
        //T�re
        A.crc2.beginPath();
        A.crc2.moveTo(1080, 480);
        A.crc2.lineTo(1092, 480);
        A.crc2.lineTo(1092, 500);
        A.crc2.lineTo(1080, 500);
        A.crc2.lineTo(1080, 480);
        A.crc2.fillStyle = "#1a0d00";
        A.crc2.fill();
        //Dach
        A.crc2.beginPath();
        A.crc2.moveTo(1045, 450);
        A.crc2.lineTo(1105, 450);
        A.crc2.lineTo(1075, 420);
        A.crc2.lineTo(1045, 450);
        A.crc2.fillStyle = "darkred";
        A.crc2.fill();
        //Weinflasche
        A.crc2.beginPath();
        A.crc2.moveTo(450, 630);
        A.crc2.lineTo(500, 630);
        A.crc2.lineTo(500, 636);
        A.crc2.lineTo(518, 637);
        A.crc2.lineTo(518, 643);
        A.crc2.lineTo(500, 644);
        A.crc2.lineTo(500, 650);
        A.crc2.lineTo(450, 650);
        A.crc2.lineTo(450, 630);
        A.crc2.globalAlpha = 0.5;
        A.crc2.fillStyle = "white";
        A.crc2.fill();
        //Wein
        A.crc2.beginPath();
        A.crc2.moveTo(450, 648);
        A.crc2.lineTo(500, 648);
        A.crc2.lineWidth = 5;
        A.crc2.strokeStyle = "red";
        A.crc2.stroke();
        BG = A.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function drawAppleDown() {
        A.crc2.beginPath();
        A.crc2.arc(320, 300, 90, 0, 2 * Math.PI);
        A.crc2.fillStyle = "#356600";
        A.crc2.fill();
        A.crc2.arc(320, 300, 90, 0, 2 * Math.PI);
        A.crc2.fillStyle = "#356600";
        A.crc2.fill();
        //Apfel
        A.crc2.beginPath();
        A.crc2.arc(350, 495, 15, 0, 2 * Math.PI);
        A.crc2.fillStyle = "darkred";
        A.crc2.fill();
        A.crc2.beginPath();
        A.crc2.arc(360, 495, 15, 0, 2 * Math.PI);
        A.crc2.fillStyle = "darkred";
        A.crc2.fill();
        A.crc2.beginPath();
        A.crc2.moveTo(355, 480);
        A.crc2.lineTo(360, 475);
        A.crc2.lineTo(370, 470);
        A.crc2.closePath();
        A.crc2.strokeStyle = "#1a0d00";
        A.crc2.stroke();
        A.crc2.fillStyle = " #1a0d00";
        A.crc2.fill();
    }
    function drawHouseDown() {
        A.crc2.beginPath();
        A.crc2.moveTo(1060, 460);
        A.crc2.lineTo(1070, 460);
        A.crc2.lineTo(1070, 480);
        A.crc2.lineTo(1060, 480);
        A.crc2.lineTo(1060, 460);
        A.crc2.fillStyle = "yellow";
        A.crc2.fill();
    }
    //ANIMATAION/////////////////////////////////////////////////
    function animate() {
        A.crc2.putImageData(BG, 0, 0);
        for (let i = 0; i < A.glitterx.length; i++) {
            let s = A.glitterx[i];
            s.update();
        }
        for (let i = 0; i < shapes.length; i++) {
            let s = shapes[i];
            s.move();
        }
        window.setTimeout(animate, 25);
    }
})(A || (A = {}));
//# sourceMappingURL=main.js.map