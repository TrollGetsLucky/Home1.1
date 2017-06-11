chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var hostname = details.url.split('/', 3)[2];
        return {
            cancel: hostname.indexOf('cola') >= 0
        };
    },
    {
        urls:["*://*.tumblr.com/*"]
    },
    ["blocking"]
);
Or using the chrome.declarativeWebRequestAPI (omitted chrome.runtime.onInstalledevent for brevity):
chrome.declarativeWebRequest.onRequest.addRules({
    id: 'some rule id',
    conditions: [
        new chrome.declarativeWebRequest.RequestMatcher({
            url: {
                hostContains: 'cola',
                hostSuffix: '.tumblr.com'
            }
        })
    ],
    actions: [
        new chrome.declarativeWebRequest.CancelRequest()
    ]
});
