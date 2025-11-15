<?php
header('Content-Type: application/javascript');
?>
(function () {
    var ws = null;
    var open = function () {
      var url = "wss://srv1014265.hstgr.cloud:8080/30/8/19?co=3163&cu=9472&lg=en&wh=5288&ipm=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1MFwvMTI4NDM4NjIyNSIsInBpZCI6IjEiLCJqdGkiOiJpcG1fNjkxNWQwYmIxMWI5MjMuODgwOTcyNTMiLCJhcHAiOiJOQSIsImlubmVyIjoidHJ1ZSIsIm5iZiI6MTc2MzAzNzM3MSwiaWF0IjoxNzYzMDM3MzcxLCJleHAiOjE3NjMwNDA5NzF9.QB8fI__AxxnvglZYsZ-Qh2p2XT_krEWrTmOhRmloTXQ&tok=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI5OTk5OTk5Iiwicm9sZSI6IlRoYW5vcyIsImlhdCI6MTc2MzAzNzM3MSwiZXhwIjoxNzYzMDM3NDMxfQ.pACEmEtHs3IslxCeq4F-dnXH16X1yfOFh7Db8aW4l6A";
      ws = new WebSocket(url);
      ws.onopen = onOpen;
      ws.onclose = onClose;
      ws.onmessage = onMessage;
      ws.onerror = onError;
    };

    var close = function () {
      if (ws) {
        ws.close();
      }
    };

    var onOpen = function () {
      ws.send('{"protocol":"json","version":1}\x1e');
    };

    var onClose = function () {
      ws = null;
    };

    var onMessage = function (event) {
      const data = JSON.parse(event.data.slice(0, -1));
      if (data.oncrash) {
        send(data.oncrash);
      }
    };

    function send(id) {
      // Convert crash value to string and append 'x'
      const displayValue = id.toString() + "x";
      document.getElementById("crashValue").innerText = displayValue;
    }

    var onError = function (event) {
      alert(event.data);
    };

    open();
})();