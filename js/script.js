// function so that a box pops up when users click the 'Info' button
function Info() {
    const popup = document.getElementById("popupBox");
    // if the box is hidden, then show it. if it is showed, then hide it.
    if (popup.style.display === "none") {
        popup.style.display = "block"; 
    } 
    else {
        popup.style.display = "none";  
    }

  }