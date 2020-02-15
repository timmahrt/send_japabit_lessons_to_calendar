  let getDates = document.getElementById('addToCalendar');

  getDates.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'getDatesFromCalendar();'});
    });
  };
