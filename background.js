chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "modifyCode") {
      // Send content to ChatGPT API and receive modified code
      // Modify code here
      sendResponse({ modifiedCode: modifiedCode });
    }
  });