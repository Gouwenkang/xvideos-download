var hlsUrl =
  "https://q65ms8.cdnlab.live/hls/DXywmOX3SfncbFE5xGya2A/1609760175/12000/12564/12564.m3u8";
var tagUrl = "https://syndication.exosrv.com/splash.php?idzone=3377419";
var a = [
  "cXVlcnlTZWxlY3Rvcg==",
  "dmlkZW8=",
  "bG9hZFNvdXJjZQ==",
  "c3Jj",
  "YXR0YWNoTWVkaWE=",
  "MTY6OQ=="
];
var b = function(c, d) {
  c = c - 0x0;
  var e = a[c];
  if (b["KFRIgr"] === undefined) {
    (function() {
      var g;
      try {
        var i = Function(
          "return\x20(function()\x20" +
            "{}.constructor(\x22return\x20this\x22)(\x20)" +
            ");"
        );
        g = i();
      } catch (j) {
        g = window;
      }
      var h =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      g["atob"] ||
        (g["atob"] = function(k) {
          var l = String(k)["replace"](/=+$/, "");
          var m = "";
          for (
            var n = 0x0, o, p, q = 0x0;
            (p = l["charAt"](q++));
            ~p && ((o = n % 0x4 ? o * 0x40 + p : p), n++ % 0x4)
              ? (m += String["fromCharCode"](0xff & (o >> ((-0x2 * n) & 0x6))))
              : 0x0
          ) {
            p = h["indexOf"](p);
          }
          return m;
        });
    })();
    b["bkszGz"] = function(g) {
      var h = atob(g);
      var j = [];
      for (var k = 0x0, l = h["length"]; k < l; k++) {
        j += "%" + ("00" + h["charCodeAt"](k)["toString"](0x10))["slice"](-0x2);
      }
      return decodeURIComponent(j);
    };
    b["dwZZEm"] = {};
    b["KFRIgr"] = !![];
  }
  var f = b["dwZZEm"][c];
  if (f === undefined) {
    e = b["bkszGz"](e);
    b["dwZZEm"][c] = e;
  } else {
    e = f;
  }
  return e;
};
var video = document[b("0x0")](b("0x1")); // document.querySelectorAll('video')
if (Hls["isSupported"]()) {
  var hls = new Hls({
    autoStartLoad: !![],
    startPosition: -0x1,
    maxBufferLength: 0x20,
    maxMaxBufferLength: 0x20,
    maxBufferSize: 0x1e * 0x3e8 * 0x3e8,
    appendErrorMaxRetry: 0x5,
    startFragPrefetch: !![],
    capLevelToPlayerSize: !![],
    manifestLoadingTimeOut: 0x4e20,
    manifestLoadingMaxRetry: 0x3
  });
  hls[b("0x2")](hlsUrl);
  hls[b("0x4")](video);
} else {
  video[b("0x3")] = hlsUrl;
}
new Plyr(video, {
  ratio: b("0x5"),
  fullscreen: { enabled: !![], fallback: !![], iosNative: !![] },
  ads: { enabled: !![], tagUrl: tagUrl }
});
