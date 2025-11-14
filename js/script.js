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




// creating new date and hour object
const now = new Date();
// Get 24-hour format (present)
const currentHour = now.getHours();

// checking if the hours are woring right
console.log("Current hour:", currentHour);
const boxes = document.getElementsByClassName("fac-box");

// iterating each box 
for (let i = 0; i < boxes.length; i++) {
  const box = boxes[i];
  const open = parseInt(box.getAttribute("open-h")); //converting to int datatype
  const close = parseInt(box.getAttribute("close-h"));

  // this is the case when it is whithn the open hours
  if (currentHour >= open && currentHour < close) {
    box.classList.add("open"); // this is the way to applty a class style in css sheet
    box.classList.remove("closed"); // to avoid the overlapping of red and green, detaching the class
  } 
  // this is the case when it is not whithin opening hours
  else {
    box.classList.add("closed");
    box.classList.remove("open");
  }
};









require('dotenv').config;

// Loading Google Maps script
function loadGoogleMaps() {
  //pass resolve when theres no errors, pass reject whn there are errors
  return new Promise(function(resolve, reject) {
    // Check if it's already loaded
    if (window.google && window.google.maps) {
      resolve();
      return;
    }

    // Create the script tag
    const script = document.createElement("script");
    const apiKey = process.env.GOOGLE_MAPS_API_KEY
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&language=en`;
    script.async = true;
    script.defer = true;

    // no errors, resolve promise
    window.initMap = function(){ 
      resolve();
    }



    // whenever get error, reject promise
    script.onerror = function() { 
      reject(new Error("Failed to load API"));
    }

    // Add it to the document
    document.head.appendChild(script);
  });
}

// interactive map, like zoom in!
async function InteractiveMap() {
  // ensure the script is loaded first
  await loadGoogleMaps();

  // location of my school
  const location = { lat: 39.732189, lng: -90.2495076 };

  // create the interactive map
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location,
  });

  // add a pin to my college
  new google.maps.Marker({
    position: location,
    map: map,
  });
}

// run automatically when the page loads
window.addEventListener("load", InteractiveMap);




