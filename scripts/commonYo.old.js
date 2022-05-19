function toIsoDate(x) {
    let date = x
    var day  = date.split("/")[0];
    var month  = date.split("/")[1];
    var year  = date.split("/")[2];

    //return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate());

    return year + '-' + ("0"+month).slice(-2) + '-' + ("0"+day).slice(-2);


}