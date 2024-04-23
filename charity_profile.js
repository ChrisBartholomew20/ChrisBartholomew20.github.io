$(document).ready(function() {


    $("#volunteer-button").click(function() {
      $("#volunteer-form").toggle();
    });
    
    $("#additional-info").hover(function() {
            $(this).append($("<p>No Kid Hungry is located in Columbus, Ohio. Help ensure that every child can focus on making precious summer memories, rather than worrying about their next meal. Your donation will be TRIPLED by the Brighter Futures Fund!!</p>"));
        }, function() {
            $(this).find("p").last().remove();
        });


      
});




let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 39.9612, lng: -82.9988 },
    zoom: 10,
  });
}

initMap();