chrome.tabs.onCreated.addListener((tab) => {
  console.log("tab created", tab)
})

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log("tab updated", tabId, changeInfo, tab)
})