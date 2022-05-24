'use strict'; 

MouseOver();
MouseOut();
startButton();

//Uebung 01 
//In der Section „Our Classes“ füge beim „OnMouseOver“ bei
//jedem Item einen Button hinzu auf dem steht, jetzt Buchen

function MouseOver() {
    return $(".OnMouseOver").mouseover(
        function () {
            $(this).append('<div class="col-3 my-auto"><button type="button" class="btn btn-primary">Jetzt Buchen</button></div>');
        });
}
function MouseOut() {
    return $(".OnMouseOver").mouseout(
        function () {
            $(this).find('button').remove();
        });
}

//Uebung 02
// In der Landing Section ändere den Text Get startet beim
//„OnClick“ auf „You just startet + Heutiges Datum“ Gibt das
//Datum mittels Date() aus

function startButton() {
    $("#start-btn").click(function () {
        $(this).html("You started today on " + Date().slice(3,15) + " !");
    });
}

//Uebung 03
//Validiere jedes Input Feld im Formular sobald jemand etwas
//eingegeben hat ohne auf Absenden zu klicken. Erstelle Sinnvolle
//Validierungsfunktionen für jedes Formular.

checkFirstName();
checkLastName();
checkSubject();
checkMessage();
checkMail();

function checkMail() {
    $('#email').keyup(function () {
        checkEmail(this);
        checkMinLength(this);
    });
}

function checkMessage() {
    $('#message').keyup(function () {
        checkMinLength20(this);
    });
}

function checkSubject() {
    $('#subject').keyup(function () {
        checkMinLength(this);
    });
}

function checkLastName() {
    $('#last-name').keyup(function () {
        checkMinLength(this);
    });
}

function checkFirstName() {
    $('#first-name').keyup(function () {
        checkMinLength(this);
    });
}

function checkMinLength(input) {
    if (input.value.length === 0) {
        input.classList.add('input-error');
    } else {
        input.classList.remove('input-error');
    }
}

function checkEmail(input) {
    value = input.value;
    const mailInput = /^((\w[^\W]+)[\.\-]?){1,}\@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm;

    if(mailInput.test(value)){   
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
    }
}


//Uebung 04
// Fügen einen Window Resize EventListener hinzu und gib die
// Screen Width und Screen Height aus sobald das Fenster kleiner
// oder größer gezogen wird.

resize();

function resize() {
    $(window).resize(function () {
        console.log("innerWidth: " + window.innerWidth);
        console.log("outerWidth: " + window.outerWidth);
        console.log("innerHeight: " + window.innerHeight);
        console.log("outerHeight: " + window.outerHeight);
    });
}
