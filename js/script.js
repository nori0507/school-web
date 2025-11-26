// function so that a box pops up when users click the 'Info' button
const Info = () => {
    const popup = document.getElementById("popupBox");
    // if the box is hidden, then show it. if it is showed, then hide it.
    if (popup.style.display === "none") {
        popup.style.display = "block"; 
    } 
    else {
        popup.style.display = "none";  
    }

};


// for the facility page facility boxes
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

  
// function to create an interactive map connected with the Googlemap
async function InteractiveMap() {
    // location for my school
    const location = { lat: 39.732189, lng: -90.2495076 };

    // creating the interactive map
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15, // how much area is shown as a default, 
        center: location, // the pinned (my school) location comes tothe center
    });

    // adding a pin on my school address
    new google.maps.Marker({
    position: location,
    map: map
    });
};




// calendar within the home page
// Using javascript fullcalendar library
// DOMContentLoaded ensures js file runs after html file
document.addEventListener("DOMContentLoaded", () => {
  const todayEl = document.getElementById('today-events');
  //see if the ID exist - other wise donot run, my error was solved after addig this line
  if (todayEl) {
    const todaycalendar = new FullCalendar.Calendar(todayEl, {
      initialView: 'timeGridDay',
      events: [
        // adding actual events
        {title: 'Basketball Game', start: '2025-12-06T17:00:00', end: '2025-12-06T19:30:00'},
        {title: 'Baseball Game', start: '2025-12-07T17:00:00', end: '2025-12-07T19:30:00'},
        {title: 'Baseball Game', start: '2025-12-08T17:00:00', end: '2025-12-08T19:30:00'},
        {title: 'Football Game', start: '2025-12-09T17:00:00', end: '2025-12-09T19:30:00'},
        {title: 'Football Game', start: '2025-12-10T17:00:00', end: '2025-12-10T19:30:00'},
        {title: 'Baseball Game', start: '2025-12-11T17:00:00', end: '2025-12-11T19:30:00'},
        {title: 'Tennis Game', start: '2025-12-12T17:00:00', end: '2025-12-12T19:30:00'},
        {title: 'Basketball Game', start: '2025-12-13T17:00:00', end: '2025-12-13T19:30:00'},
        {title: 'Track Meet', start: '2025-12-14T17:00:00', end: '2025-12-14T19:30:00'}
      ]

    });
    todaycalendar.render();
  }

  const eventsEl = document.getElementById('events');
  if (eventsEl) {
    const monthcalendar = new FullCalendar.Calendar(eventsEl, {
      initialView: 'dayGridMonth',
      events: [
        //adding actual events
        {title: 'Campus Festival', start: '2025-11-15'},
        {title: 'Basketball Game', start: '2025-11-20'},
        {title: 'Drum Concert', start: '2025-11-22'},
        {title: 'Final Exams', start: '2025-12-08', end: '2025-12-13'}
      ]

    });
    monthcalendar.render();
  }
});