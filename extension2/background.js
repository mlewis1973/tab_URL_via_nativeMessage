chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        // Get current url
        url = tabs[0].url;

        alert(url);

        var hostName = "com.google.chrome.host.test2";
        port = chrome.runtime.connectNative(hostName);
        message = { "url": url};
        port.postMessage(message);
        //port.postMessage(url);
        port.disconnect();
    });
});
