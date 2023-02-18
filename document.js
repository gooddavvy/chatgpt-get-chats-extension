chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'getDocument') {
        sendResponse({ document: document });
    }
});
