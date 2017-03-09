        function initialize() {
            var mapOptions = {
                center: new google.maps.LatLng(40.691205, -73.980766),
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.HYBRID,
                scrollwheel: false,
                draggable: true,
                panControl: true,
                zoomControl: true,
                mapTypeControl: true,
                scaleControl: true,
                streetViewControl: true,
                overviewMapControl: true,
                rotateControl: true,
};

            var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);


            var image = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
             var beachMarker = new google.maps.Marker({
               position: {lat: 40.691205, lng: -73.980766},
               map: map,
               icon: image
             });

             var image = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
              var beachMarker = new google.maps.Marker({
                position: {lat: 40.690635, lng: -73.984125},
                map: map,
                icon: image
              });
              var image = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
               var beachMarker = new google.maps.Marker({
                 position: {lat: 40.690155 , lng: -73.982001 },
                 map: map,
                 icon: image
               });

               $(function(){
                   $("button").click(function(){
                       var location = $(this).text()
                       console.log("click", location)
                       // Turn off currently active button
                       $("button.active").toggleClass("active")
                       // Turn on for clicked element
                       $(this).toggleClass("active")
                       if(location == "Location1") {
                          console.log("location1 is clicked")
                           map.setCenter({lat: 40.691205, lng: -73.980766 })
                           map.setZoom(18)
                       }
                       if(location == "Location2") {
                           map.setCenter({lat: 40.690635, lng: -73.984125 })
                           map.setZoom(9)
                       }
                       if(location == "Location3") {
                           map.setCenter({lat: 40.690155, lng: -73.982001 })
                           map.setZoom(11)
                       }
                   })
               })





           }


           google.maps.event.addDomListener(window, 'load', initialize);

