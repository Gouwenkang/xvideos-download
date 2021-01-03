function getVideo() {
  return new Promise((resolve, reject) => {
    console.log("=============================================");
    const htmlText = document.documentElement.outerHTML;
    let videoHighReg = /setVideoUrlHigh\(\'([^)]*)\'\)/;
    let videolowReg = /setVideoUrlLow\(\'([^)]*)\'\)/;
    let videoTitleReg = /setVideoTitle\(\'([^)]*)\'\)/;
    const result = {
      videoHigh: htmlText.match(videoHighReg)[1],
      videoLow: htmlText.match(videolowReg)[1],
      videoTitle: htmlText.match(videoTitleReg)[1]
    };
    resolve(result);
  });
}

getVideo().then(res => {
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.cmd == "test") sendResponse(res);
  });
});
