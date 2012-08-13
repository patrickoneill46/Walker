Ext.define('Ennis.controller.Router', {
	extend: 'Ext.app.Controller',

	config: {

		currentRoute: {},
		markers: [],
		responses: [],
		visitedPoints: [],
		currentPoint: 0,
		lastPoint: {},
		nextPoint: {},

		refs: {
			map: '#navigationmap',
			mapPanel: 'mapview',
			mapInfo: 'mapinfo',
			//route: ''
		},

		control: {
			'button[action=startRoute]': {
				//tap: 'renderRoute',
				tap: 'startRoute'
			},

			'button[action=nextPoint]': {
				tap: 'nextPoint'
			}
		},

	},

	startRoute: function (button){
		var self = this,
			store = Ext.getStore('Routes'),//var route = store.getAt(index);	
			route = store.getAt(0),///hardcoding for the first route, will add the other 4 later
			map = self.getMap().getMap(),
			directionsRenderer = new google.maps.DirectionsRenderer(),
			startIndex = self.getCurrentPoint(),
			endIndex = startIndex + 1;

		console.log(startIndex);

		self.setCurrentRoute(route);
		self.setNextPoint(endIndex);

		directionsRenderer.setMap(map);
		markers = route.getMarkers().data.items;
		

		var origin = new google.maps.LatLng(markers[startIndex].data.lat, markers[startIndex].data.long);
		var destination = new google.maps.LatLng(markers[endIndex].data.lat, markers[endIndex].data.long);

		var request = {
			origin: origin,
			destination: destination,
			travelMode: 'WALKING',
		};

		/**
		var mOpt = {
			animation: null,
			clickable: true,
			draggable: false,
			map: map,
			position: new google.maps.LatLng(52.8437480, -8.9841771),
			icon: new google.maps.MarkerImage('resources/images/ennis.png')
		};
		customMarker = new google.maps.Marker(mOpt);

		infoOpts = {
			content: '<div>This is where the short narrative <br />' +
				'will <b>appear</b></div>'
		};
		infoWin = new google.maps.InfoWindow(infoOpts);
		**/


		markers.forEach(function(marker,index){


			var mOpt = {
				animation: 'BOUNCE',
				clickable: true,
				draggable: false,
				map: map,
				position: new google.maps.LatLng(marker.data.lat, marker.data.long),
				icon: new google.maps.MarkerImage('resources/images/ennis.png')
			};
			
			var infoOpts = {
				content: '<div class="markerInfo">'+ marker.data.desc + '</div>',
				pane: 'floatPane'
			};
			var infoWin = new google.maps.InfoWindow(infoOpts);

			var customMarker = new google.maps.Marker(mOpt);

			google.maps.event.addListener(customMarker, 'click', function() {
				infoWin.open(map,customMarker);
			});

			google.maps.event.addListener(infoWin, 'click', function (){
				console.log('closing window');
				infoWin.close();
			});
		});

	 	

		ds = new google.maps.DirectionsService();
		ds.route(request, function(response, status) {

			console.log(response);
			if (status == google.maps.DirectionsStatus.OK) {
	    	directionsRenderer.setDirections(response);
		  	} else {
	 	    	alert('Error: ' + status);
		  	}

		  	self.createLeg(markers[self.getCurrentPoint()], markers[self.getNextPoint()],response);
		});	
	},

	nextPoint: function() {

		var self = this,
			directionsRenderer = new google.maps.DirectionsRenderer(),
			startIndex = self.getCurrentPoint()+1,
			map = self.getMap().getMap(),
			endIndex = startIndex + 1;
			markers = self.getCurrentRoute().getMarkers().data.items;

		self.setLastPoint(startIndex);
		
		self.setCurrentPoint(startIndex);
		self.setNextPoint(endIndex);


		var origin = new google.maps.LatLng(markers[startIndex].data.lat, markers[startIndex].data.long);
		var destination = new google.maps.LatLng(markers[endIndex].data.lat, markers[endIndex].data.long);

		var request = {
			origin: origin,
			destination: destination,
			travelMode: 'WALKING',	
		};

		directionsRenderer.setMap(map);

		ds.route(request, function(response, status) {

			//console.log(response);
			if (status == google.maps.DirectionsStatus.OK) {
	    	directionsRenderer.setDirections(response);
		  	} else {
	 	    	alert('Error: ' + status);
		  	}
		  	self.createLeg(markers[self.getCurrentPoint()], markers[self.getNextPoint()],response);
		});

	},

	previousPoint: function (){

	},

	createLeg: function (start, end, response){

		var store = Ext.getStore('Legs');
		var self = this;

		var leg = Ext.create('Ennis.model.Leg', {
				id: 'red-'+start.data.id,
				start: self.getCurrentPoint(),
				end: self.getNextPoint(),
		  		directions: response.routes[0].legs[0].steps,
		  		startPoint: start.data.name,
		  	
		  		endPoint: end.data.name,
		  		route: 'Red',
		});
		var store = Ext.getStore('Legs');
		store.add(leg);
	},

	loadRoute: function(index){
		var self = this,
			store = Ext.getStore('Routes');
	},

	routeToStartPoint: function (route){


	},

	checkDistanceToWayPoint: function (waypoint) {

		//if distance between device and waypoint is less than x-meters, then return true and set current point



	}
	
})