// // Mini project of javascript .. clock digital

function clockRunner(){
    var time = new Date();
    var H = time.getHours();
    var M = time.getMinutes();
    var S = time.getSeconds();

    var p = 'PM';
    if(H > 12){
        H = H - 12;
        p = 'AM';
    }

    if(H < 10){
        H = '0' + H;
    }

    if(M < 10){
        M = '0' + M;
    }

    if(S < 10){
        S = '0' + S;
    }

    var clock = H + ':' + M + ':' + S + p;
    document.getElementById('MyClockDisplay').textContent = clock;
    setTimeout(clockRunner, 1000);
}

clockRunner();

