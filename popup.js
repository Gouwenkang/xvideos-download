function sendMessageToContentScript(message, callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message, function(response) {
      if (callback) callback(response);
    });
  });
}
sendMessageToContentScript({ cmd: "test", value: "test" }, function(videoType) {
  if (videoType == null) return;
  var boxEl = document.getElementsByTagName("ul")[0];
  var videoStr = `<li> <label>清晰度：<span> 高清 </span> </label> <button class="button down">下载</button> <button class="button copy">复制</button></li>
                        <li> <label>清晰度：<span> 一般 </span> </label> <button class="button down">下载</button> <button class="button copy">复制</button></li>
        `;
  boxEl.innerHTML = videoStr;
  var dialog = document.getElementsByTagName("dialog")[0];
  var downList = document.querySelectorAll(".down");
  let dialogTextEl = document.getElementsByClassName("dialogText")[0];
  var copyList = document.querySelectorAll(".copy");
  downList.forEach((item, index) => {
    let dialogText = "正在创建下载，请勿重复点击";
    dialogTextEl.innerHTML = dialogText;
    let url = index === 0 ? videoType.videoHigh : videoType.videoLow;
    item.onclick = () => {
      chrome.downloads.download({
        url: url,
        filename: videoType.videoTitle + ".mp4"
      });
      dialog.showModal();
      setTimeout(() => {
        dialog.close();
      }, 2000);
    };
  });

  copyList.forEach((item, index) => {
    item.onclick = () => {
      let dialogText = "已复制链接至剪贴板";
      dialogTextEl.innerHTML = dialogText;
      let url = index === 0 ? videoType.videoHigh : videoType.videoLow;
      var oInput = document.createElement("input");
      oInput.value = url;
      document.body.appendChild(oInput);
      oInput.select();
      document.execCommand("Copy");
      oInput.className = "oInput";
      oInput.style.display = "none";
      dialog.showModal();
      setTimeout(() => {
        dialog.close();
      }, 1500);
    };
  });
});
