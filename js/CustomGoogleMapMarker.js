function CustomMarker(latlng, map, args) {
  this.latlng = latlng;
  this.args = args;
  this.setMap(map);
}

CustomMarker.prototype = new google.maps.OverlayView();

CustomMarker.prototype.draw = function initMap() {
  const myLatLng = { lat: 37.50425632643457, lng: 127.0514927268307 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: myLatLng,
    draggable: true,
    scrollwheel: true,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER,
    },
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    rotateControl: true,
    fullscreenControl: false,
    styles: [],
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
  const contentString =
    "헬스앤모어 주식회사<br/><br/>서울특별시 강남구 테헤란로64길 13,<br/>204호(대치동, 풍림 아이원레몬)<br/><br/>대표번호 : 02)555-1175";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
};
/*CustomMarker.prototype.draw = function() {
	
	var self = this;
	
	var div = this.div;
	
	if (!div) {
	
		div = this.div = document.createElement('div');
		div.className = 'marker';
		div_inner = this.div = document.createElement('div');
		div_inner.className = 'marker_inner';
		div_center = this.div = document.createElement('div');
		div_center.className = 'marker_center';
		div_inner.appendChild(div_center);
		div.appendChild(div_inner);

		var divTween = TweenMax.to(div, 1, {scale:0.8, ease: Power2.easeInOut, yoyo:true, repeat:-1});
		
		// div.style.position = 'absolute';
		// div.style.cursor = 'pointer';
		// div.style.width = '20px';
		// div.style.height = '20px';
		// div.style.background = 'blue';
		
		if (typeof(self.args.marker_id) !== 'undefined') {
			div.dataset.marker_id = self.args.marker_id;
		}
		
		google.maps.event.addDomListener(div, "click", function(event) {
						
			google.maps.event.trigger(self, "click");
		});
		
		var panes = this.getPanes();
		panes.overlayImage.appendChild(div);
	}
	
	var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
	
	if (point) {
		div.style.left = (point.x - 10) + 'px';
		div.style.top = (point.y - 20) + 'px';
	}
};*/

CustomMarker.prototype.remove = function () {
  if (this.div) {
    this.div.parentNode.removeChild(this.div);
    this.div = null;
  }
};

CustomMarker.prototype.getPosition = function () {
  return this.latlng;
};
