saat = () => {
    
    var time = new Date();
    
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();

    var day = time.getDay();
    var month = time.getMonth()+1;
    var year = time.getFullYear();

    (hour < 10)? document.getElementById("hour").innerText = "0" + hour:
                 document.getElementById("hour").innerText = hour;

    (minute < 10)? document.getElementById("minute").innerText = "0" + minute:
                   document.getElementById("minute").innerText = minute;

    (second < 10)? document.getElementById("second").innerText = "0" + second:
                   document.getElementById("second").innerText = second;

    
    document.getElementById("date").innerText = day + "/" + month + "/" + year;
}

setInterval(function(){saat();},1000); // internetten gördüm pratik icin :)