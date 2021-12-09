function TaxiSond() {
    let taxieffect = document.getElementsByTagName('audio')[0];
    if (taxieffect.paused) {
        document.getElementById('taxi-btn').className = "audioelement played"
        taxieffect.play();
        taxieffect.loop = true;
    } else {
        document.getElementById('taxi-btn').className = "audioelement"
        taxieffect.pause();
    }
}
function callPassengers() {
    let callffect = document.getElementsByTagName('audio')[3];
    if (callffect.paused) {
        callffect.play();
    } else {
        document.getElementById('call-btn').className = "audioelement"
        callffect.pause();
        callffect.currentTime = 0
    }
    callffect.addEventListener('timeupdate', function () {
        var timing = callffect.currentTime / callffect.duration;
        if (timing != 1) {
            document.getElementById('call-btn').className = "audioelement played"
        }
        else {
            document.getElementById('call-btn').className = "audioelement "
        }
    });
}
function clacson() {
    let clacsonffect = document.getElementsByTagName('audio')[4];
    if (clacsonffect.paused) {
        clacsonffect.play();
        clacsonffect.volume = 0.1;

    } else {
        document.getElementById('clacson-btn').className = "audioelement"
        clacsonffect.pause();
    }
    clacsonffect.addEventListener('timeupdate', function () {
        var timing = clacsonffect.currentTime / clacsonffect.duration;
        if (timing != 1) {
            document.getElementById('clacson-btn').className = "audioelement played"
        }
        else {
            document.getElementById('clacson-btn').className = "audioelement "
        }
    });
}
function PassengersSond() {
    let Passengers = document.getElementsByTagName('audio')[1];
    if (Passengers.paused) {
        Passengers.play();
        Passengers.loop = true;
        Passengers.volume = 0.2;
        document.getElementById('pssen-btn').className = "audioelement played"
    } else {
        document.getElementById('pssen-btn').className = "audioelement"
        Passengers.pause();
    }
}
function music() {
    let music = document.getElementsByTagName('audio')[2];
    if (music.paused) {
        music.play();
        music.volume = 0.4;
        music.loop = true;
        document.getElementById('music-btn').className = "audioelement played"
    } else {
        document.getElementById('music-btn').className = "audioelement"
        music.pause();
    }
}
function changeMusic() {
    let music = document.getElementsByTagName('audio')[2];
    music.src = "audios/" + document.getElementById('select').value
    music.play();
    music.volume = 0.4;
    music.loop = true;
    document.getElementById('music-btn').className = "audioelement played"
}