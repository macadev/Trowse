// Map keys are ordered. "Object" does not provide this.
const tabChains = new Map()

chrome.tabs.onCreated.addListener((tab) => {
  console.log("tab created", tab)
  tabChains.set(tab.id, [])
})

chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
  console.log("tab removed", tabId, removeInfo)
  tabChains.get(tabId).push({ status: "EOL" })
})

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log("tab updated", tabId, changeInfo, tab)

  if (changeInfo.status === "complete") {
    tabChains.get(tabId).push({
      timestamp: new Date().getUTCMilliseconds(),
      url: tab.url
    })
    console.log("updated history", tabChains)
  }

})