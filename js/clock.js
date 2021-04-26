function request() {
    let name = prompt("Adınız nedir?");
    document.getElementById("myName").textContent = name;
}

function showTime() {
    let now = new Date();
    let day = now.getDay();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    if (day == 1) {
        day = "Pazartesi";
    } else if(day == 2) {
        day = "Salı";
    } else if(day == 3) {
        day = "Çarşamba";
    } else if(day == 4) {
        day = "Perşembe";
    } else if(day == 5) {
        day = "Cuma";
    } else if(day == 6) {
        day = "Cumartesi";
    } else if(day == 7) {
        day = "Pazar";
    }

    if (hour < 10) {
        hour = "0" + hour;
    }

    if (minute < 10) {
        minute = "0" + minute;
    }

    if (second < 10) {
        second = "0" + second;
    }

    screenTime = hour + ":" + minute + ":" + second + " " + day;
    
    document.getElementById("myClock").textContent = screenTime;

    setTimeout(showTime, 1000);

}

showTime();
request();