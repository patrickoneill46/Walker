Ext.define('Ennis.controller.Map', {
	
	extend: 'Ext.app.Controller',

	config: {

		currentRoute: null,
		currentPoint: null,
		routePointIDs: [],
		markers: [],
		points: [],

		refs: {
			map: '#navigationmap',
			main: '#mainpanel',
			mapPanel : '#mappanel'
		},

		control: {
			'button[action=showRoute]': {
				//tap: 'renderRoute',
				tap: 'showRoute'
			},
			'button[action=removeMarkers]': {
				//tap: 'renderRoute',
				tap: 'removeMarkers'
			},
			'button[action=showLocation]': {
				//tap: 'renderRoute',
				tap: 'showLocation'
			}
		},
	},

	showLocation: function (){
		if (navigator.geolocation) {
	      	navigator.geolocation.getCurrentPosition(success, error);
	    } else {
	      	alert('geolocation not supported');
	    }

	    function success(position) {
	      	alert(position.coords.latitude + ', ' + position.coords.longitude);
	    }

	    function error(msg) {
	      	alert('error: ' + msg);
	    }
	},

	showRoute: function() {
		console.log('showRoute function...');
		var self = this,
			store = Ext.getStore('Points'),
			map = self.getMap().getMap();


		//console.log(self.getMain(), self.getMapPanel());

		self.setPoints(store.data.items); //populate the marker array object
		self.getMain().animateActiveItem(self.getMapPanel(), {type: 'slide', direction: 'left'});//show the Map view

		//show the Markers on the Map
		console.log(self.getPoints());
		self.getPoints().forEach(function(point,index){

			//console.log(marker);
			var mOpt = {
				animation: 'BOUNCE',
				clickable: true,
				draggable: false,
				map: map,
				position: new google.maps.LatLng(point.data.lat, point.data.long),
				icon: new google.maps.MarkerImage('resources/images/ennis.png')
			};
			
			
			//var infoWin = new google.maps.InfoWindow(infoOpts);

			var customMarker = new google.maps.Marker(mOpt);
			self.getMarkers().push(customMarker);

			//customMarker.infoWin = new google.maps.InfoWindow(infoOpts);

			google.maps.event.addListener(customMarker, 'click', function() {
				//infoWin.open(map,customMarker);
				var infoOpts = {
					content: '<div class="markerInfo">'+ marker.data.desc + '</div>',
					//pane: 'floatPane'
				};

				if (typeof infoWin === 'undefined') {
					infoWin = new google.maps.InfoWindow(infoOpts);
					infoWin.open(map,customMarker);
					return;
				}
				
				infoWin.close();
				infoWin.setContent('<div class="markerInfo">'+ marker.data.desc + '</div>');
				infoWin.open(map, customMarker);
				return;
			});

			/**
			google.maps.event.addListener(marker.infoWin, 'click', function (){
				console.log('closing window');
				marker.infoWin.close();
			});
			**/
			//console.log(self.getMarkers());
		});

	},

	removeMarkers: function(){
		var self = this,
			map = self.getMap().getMap(),
			markers = self.getMarkers();
		if (markers.length > 0) {
		    for (var i = 0; i < self.getMarkers().length; i++ ) {
		      	markers[i].setMap(null);
		    }
	  	}
	},

	markVisited: function(marker){

	},

	nextPoint: function(route){

	},

	previousPoint: function(route){

	},

	routeToCurrentPoint: function(point){

	}

});