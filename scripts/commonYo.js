let clientInfo

let authCookie

let devMode = false

function capitalizeFirstLetter(string) {
    console.log(string)
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function changeUserName(element) {
    element.text(clientInfo.nickName)
}



function traduzirLocation(location, tiny) {

    
    let tradutor = {
        'beach': "Destino de praia",
        'country': "Destino de campo",
        'mountain': "Destino de montanha",
        'city': "Destino de cidade",
        "Destino de cidade": "city",
        "Destino de montanha": "mountain",
        "Destino de campo": "country",
        "Destino de praia": "beach"
    }



    if (tiny != undefined && tradutor.hasOwnProperty(location)) {
        return capitalizeFirstLetter(tradutor[location].split(' ')[2])
    } else {
        return tradutor[location]
    }

}

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
            end = dc.length;
        }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
}




let checkCurrentUser = function (cookieJs) {

    if (sessionStorage.getItem("devMode") == "yes") {
        devMode = true
    }

    let myCookie = cookieJs.get('login_session')

    authCookie = myCookie

    if (myCookie == null) {
        // window.onload(window.location.replace("/home/"))
    } else {
        //console.log(`cliente ja esta logado ${myCookie}`)
        clientInfo = JSON.parse(atob(myCookie.split(".")[1]));
        let currentDate = new Date()


        if (clientInfo.exp < (currentDate.getTime()/1000) | clientInfo.clientType < 2) {
            // window.onload(window.location.replace("/home/"))
        }
    }


    return clientInfo

}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function toHumanDate(x) {
    let date = x
    if (typeof (date) == 'string') {
        date = new Date(date)
    }

    //return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate());

    return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

}

function toIsoDate(x) {
    let date = x
    var day  = date.split("/")[0];
    var month  = date.split("/")[1];
    var year  = date.split("/")[2];

    //return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate());

    return year + '-' + ("0"+month).slice(-2) + '-' + ("0"+day).slice(-2);


}


let starsToPointsPerNight = function (multiplier) {

    const basePoint = 400
    switch (multiplier) {
        case -1:
            return basePoint * (Math.pow(2, 0))
        case 3:
            return basePoint * (Math.pow(2, 1))
        case 4:
            return basePoint * (Math.pow(2, 2))
        case 5:
            return basePoint * (Math.pow(2, 3))
        case 6:
            return basePoint * (Math.pow(2, 4))
        case -2:
            return basePoint * (Math.pow(2, 4)) * 1.5

        default:
            return 0
    }


}