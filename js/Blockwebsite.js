chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var hostname = details.url.split('/', 3)[2];
        return {
            cancel: hostname.indexOf('cola') >= 0
        };
    },
    {
        urls:["https://trollgetslucky.github.io/Home1.1/"]
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
                hostSuffix: 'https://trollgetslucky.github.io/Home1.1/'
            }
        })
    ],
    actions: [
        new chrome.declarativeWebRequest.CancelRequest()
    ]
});
