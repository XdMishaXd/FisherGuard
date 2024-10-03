chrome.tabs.onUpdated.addListener((_tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.active) {
        if(!tab.url.includes('chrome')) {
            chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
                console.log("Полученная переменная из popup.js:", request.variable);
                sendResponse({data: "Переменная получена"});
                if(request.variable == true){
                    console.log('URL: ' + tab.url);
                }
            });
            
        }
    }
});