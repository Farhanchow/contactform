        function initialize() {
            var mapOptions = {
                center: new google.maps.LatLng(40.691205, -73.980766),
                zoom: 18,
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


            var image = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
             var beachMarker = new google.maps.Marker({
               position: {lat: 40.691205, lng: -73.980766},
               map: map,
               icon: image
             });
           }



           google.maps.event.addDomListener(window, 'load', initialize);
