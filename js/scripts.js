const createCORSRequest = (method, url) => {
    let xhr = new XMLHttpRequest();
    if ('withCredentials' in xhr) {
        // Kiểm tra XMLHttpRequest object có thuộc tính
        // withCredentials hay không
        // Thuộc tính này chỉ có ở XMLHttpRequest2
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != 'undefined') {
        // Kiểm tra XDomainRequest
        // Đây là đối tượng chỉ có ở IE và
        // là cách để IE thực hiện truy vấn CORS
        xhr = new XDomainRequest();
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}

const request = createCORSRequest('GET',
    'https://dc.vietstock.vn/api/CMSNews/GetTopViewedindex?topCount=5');
if (!request) {
    throw new Error('CORS is not supported');
}

request.onload = () => {
    var data = JSON.parse(request.responseText);
    console.log(data);
    if (data[0]['ColorId'] == -1) {
        document.getElementById('stock-box-1').innerHTML = " \
            <i class='mdi mdi-arrow-down-drop-circle-outline' style='color: red;'></i> \
            <span>" + data[0]['IndexName'] + "</span>" + " \
            <img src='" + data[0]['UrlImage'] + "' alt=''> \
            <div class='info-bar'> \
                <span style='font-weight: bold;'>" + data[0]['LastPrice'] + "</span> \
                <span style='color: red;'>" + data[0]['Change'] + "</span> \
                <span style='color: red;'>" + data[0]['PerChange'] + "%</span>"
    } else {
        document.getElementById('stock-box-1').innerHTML = " \
            <i class='mdi mdi-arrow-up-drop-circle-outline' style='color: greenyellow;'></i> \
            <span>" + data[0]['IndexName'] + "</span>" + " \
            <img src='" + data[0]['UrlImage'] + "' alt=''> \
            <div class='info-bar'> \
                <span style='font-weight: bold;'>" + data[0]['LastPrice'] + "</span> \
                <span style='color: greenyellow;'>" + data[0]['Change'] + "</span> \
                <span style='color: greenyellow;'>" + data[0]['PerChange'] + "%</span>"
    }

    if (data[1]['ColorId'] == -1) {
        document.getElementById('stock-box-2').innerHTML = " \
            <i class='mdi mdi-arrow-down-drop-circle-outline' style='color: red;'></i> \
            <span>" + data[1]['IndexName'] + "</span>" + " \
            <img src='" + data[1]['UrlImage'] + "' alt=''> \
            <div class='info-bar'> \
                <span style='font-weight: bold;'>" + data[1]['LastPrice'] + "</span> \
                <span style='color: red;'>" + data[1]['Change'] + "</span> \
                <span style='color: red;'>" + data[1]['PerChange'] + "%</span>"
    } else {
        document.getElementById('stock-box-2').innerHTML = " \
            <i class='mdi mdi-arrow-up-drop-circle-outline' style='color: greenyellow;'></i> \
            <span>" + data[1]['IndexName'] + "</span>" + " \
            <img src='" + data[1]['UrlImage'] + "' alt=''> \
            <div class='info-bar'> \
                <span style='font-weight: bold;'>" + data[1]['LastPrice'] + "</span> \
                <span style='color: greenyellow;'>" + data[1]['Change'] + "</span> \
                <span style='color: greenyellow;'>" + data[1]['PerChange'] + "%</span>"
    }

    if (data[2]['ColorId'] == -1) {
        document.getElementById('stock-box-3').innerHTML = " \
            <i class='mdi mdi-arrow-down-drop-circle-outline' style='color: red;'></i> \
            <span>" + data[2]['IndexName'] + "</span>" + " \
            <img src='" + data[2]['UrlImage'] + "' alt=''> \
            <div class='info-bar'> \
                <span style='font-weight: bold;'>" + data[2]['LastPrice'] + "</span> \
                <span style='color: red;'>" + data[2]['Change'] + "</span> \
                <span style='color: red;'>" + data[2]['PerChange'] + "%</span>"
    } else {
        document.getElementById('stock-box-3').innerHTML = " \
            <i class='mdi mdi-arrow-up-drop-circle-outline' style='color: greenyellow;'></i> \
            <span>" + data[2]['IndexName'] + "</span>" + " \
            <img src='" + data[2]['UrlImage'] + "' alt=''> \
            <div class='info-bar'> \
                <span style='font-weight: bold;'>" + data[2]['LastPrice'] + "</span> \
                <span style='color: greenyellow;'>" + data[2]['Change'] + "</span> \
                <span style='color: greenyellow;'>" + data[2]['PerChange'] + "%</span>"
    }

    if (data[3]['ColorId'] == -1) {
        document.getElementById('stock-box-4').innerHTML = " \
            <i class='mdi mdi-arrow-down-drop-circle-outline' style='color: red;'></i> \
            <span>" + data[3]['IndexName'] + "</span>" + " \
            <img src='" + data[3]['UrlImage'] + "' alt=''> \
            <div class='info-bar'> \
                <span style='font-weight: bold;'>" + data[3]['LastPrice'] + "</span> \
                <span style='color: red;'>" + data[3]['Change'] + "</span> \
                <span style='color: red;'>" + data[3]['PerChange'] + "%</span>"
    } else {
        document.getElementById('stock-box-4').innerHTML = " \
            <i class='mdi mdi-arrow-up-drop-circle-outline' style='color: greenyellow;'></i> \
            <span>" + data[3]['IndexName'] + "</span>" + " \
            <img src='" + data[3]['UrlImage'] + "' alt=''> \
            <div class='info-bar'> \
                <span style='font-weight: bold;'>" + data[3]['LastPrice'] + "</span> \
                <span style='color: greenyellow;'>" + data[3]['Change'] + "</span> \
                <span style='color: greenyellow;'>" + data[3]['PerChange'] + "%</span>"
    }

    if (data[4]['ColorId'] == -1) {
        document.getElementById('stock-box-5').innerHTML = " \
            <i class='mdi mdi-arrow-down-drop-circle-outline' style='color: red;'></i> \
            <span>" + data[4]['IndexName'] + "</span>" + " \
            <img src='" + data[4]['UrlImage'] + "' alt=''> \
            <div class='info-bar'> \
                <span style='font-weight: bold;'>" + data[4]['LastPrice'] + "</span> \
                <span style='color: red;'>" + data[4]['Change'] + "</span> \
                <span style='color: red;'>" + data[4]['PerChange'] + "%</span>"
    } else {
        document.getElementById('stock-box-5').innerHTML = " \
            <i class='mdi mdi-arrow-up-drop-circle-outline' style='color: greenyellow;'></i> \
            <span>" + data[4]['IndexName'] + "</span>" + " \
            <img src='" + data[4]['UrlImage'] + "' alt=''> \
            <div class='info-bar'> \
                <span style='font-weight: bold;'>" + data[4]['LastPrice'] + "</span> \
                <span style='color: greenyellow;'>" + data[4]['Change'] + "</span> \
                <span style='color: greenyellow;'>" + data[4]['PerChange'] + "%</span>"
    }
}
request.onerror = () => {
    console.log('Error');
    document.getElementById('stock-frame').innerHTML = '';
}

request.send();

// var xhttp = createCORSRequest('GET', 'https://api.vietstock.vn/search/stock?q=sd&limit=10&languageID=1');
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         var data = JSON.parse(this.responseText);
//         console.log(data);
//     }
// };
// xhttp.open("GET", "https://api.vietstock.vn/search/stock?q=sd&limit=10&languageID=1", true);
// xhttp.withCredentials = true;
// xhttp.setRequestHeader("Content-Type", "application/json");
// xhttp.setRequestHeader("")
// xhttp.send({
//     'request': "authentication token"
// });