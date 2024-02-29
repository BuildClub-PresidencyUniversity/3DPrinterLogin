function login() {
    var userId = document.getElementById("userId").value;
    var password = document.getElementById("password").value;
  
    if (userId === "ILAB2" && password === "passmein") {
      document.getElementById("login-container").style.display = "none";
      document.getElementById("printer-container").style.display = "block";
      checkPrinterStatus();
    } else {
      alert("Login failed. Please check your credentials.");
    }
  }
  
  function checkPrinterStatus() {
    var iframe = document.getElementById("printerFrame");
    iframe.src = "http://172.18.18.37:3344";
  
    var offlineMessage = document.getElementById("offline-message");
  
    iframe.onload = function() {
      // If the printer is online, hide the offline message
      offlineMessage.innerHTML = "";
    };
  
    iframe.onerror = function() {
      // If there is an error loading the iframe, show the offline message
      offlineMessage.innerHTML = "Printer is Offline";
    };
  }
  