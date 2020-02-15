'use strict';

  chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {urlEquals: 'https://www.japatalk.com/en/reservation_calendar.php'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(request.dates)
    });
