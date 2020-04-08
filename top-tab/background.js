chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ color: "#01abaa" }, function () {
    console.log("This color is turquoise, just like the epic stone.");
  });
});
