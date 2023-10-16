document.getElementById("modifyButton").addEventListener("click", () => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: modifyCode
    });
  });
  
  document.getElementById("restoreButton").addEventListener("click", () => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: restoreCode
    });
  });