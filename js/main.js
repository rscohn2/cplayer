// Navigate to URL
function nav() {
    var url = $('#URLId').val();
    console.log('nav to: ' + url);
    window.location.href = url;
    localStorage.url = url;
}

// Navigate to URL when pressing enter
function keydown(e){
        console.log('device: ' + JSON.stringify(device));
    var code = e.keyCode || e.which;
    if(code == 13) { //Enter keycode
       nav();
    }
}

function main() {
    var ua = navigator.userAgent;
    $('#userAgentId').html(ua);
    if (navigator.presentation) {
        $('#crosswalkVersionId p').html('detected');
        var verMatch = ua.match(/Crosswalk\/([0-9]+\.[0-9]+\.[0-9]+\.[0-9]+)/);
        if (verMatch)
            $('#crosswalkVersionId p').html(verMatch[1]);
    }

    // Navigate to url on pressing enter or changing input
    var urlInput = $('#URLId');
    urlInput.bind('change', nav);
    urlInput.bind('keydown', keydown);
    $('#refreshId').click(nav);
    
    // Remember last URL
    console.log('setting val: ' + localStorage.url)
    urlInput.val(localStorage.url);
}

function cordovaDeviceReady() {
    console.log('device: ' + JSON.stringify(device));
    if (device && device.cordova) {
        console.log('setting cordova' + device.cordova);
        $('#cordovaVersionId p').html(device.cordova);
    }
}

document.addEventListener("deviceready",cordovaDeviceReady,false);

function intelXDKDeviceReady() {
   	//hide splash screen
   	intel.xdk.device.hideSplashScreen();
    if (AppMobi) {
        $('#intelxdkVersionId p').html(intel.xdk.jsVersion);
    }
};
document.addEventListener("intel.xdk.device.ready",intelXDKDeviceReady,false);

intel.xdk.jsVersion
$(function() {
    console.log('loaded');
    console.log('user agent' + navigator.userAgent);
    main();
})
