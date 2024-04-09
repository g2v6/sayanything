function displayMessage() {
    var message = document.getElementById("textbox").value;
    // Update message on original page (index.html)
    document.getElementById("message").innerHTML = message;
  
    // Logic to update message on separate page (display.html)
    fetch("display.html")
      .then(response => response.text())
      .then(htmlString => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, "text/html");
        doc.getElementById("message").innerHTML = message;
        window.location.href = "display.html"; // Redirect to display page
      })
      .catch(error => console.error(error));
  }