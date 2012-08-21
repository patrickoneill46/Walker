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
			pointsList: '#pointslist'
			//route: ''
		},

		control: {
			'button[action=filter]': {
				//tap: 'renderRoute',
				tap: 'route'
			},

			'button[action=nextPoint]': {
				tap: 'nextPoint'
			},

			'button[action=closeDetail]': {
				tap: 'closeDetail'
			},

			pointsList: {
				itemtap: 'showDetail',
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
	},

	route: function(button){
		
		var routeStore = Ext.getStore('Routes'),
			index = routeStore.find('name', button.config.route),
			route = routeStore.getAt(index),
			points = route.data.points,
			pointsStore = Ext.getStore('Points'),
			list = Ext.getCmp('pointslist');

		pointsStore.setSorters({property: (route.data.name+'Index'), direction: 'ASC'});
		list.setItemTpl('<b>{' + route.data.name + 'Index} {name}</b>');

		pointsStore.clearFilter();
		pointsStore.filterBy(function(record){
			//console.log('starting filter')

			if (route.data.points.indexOf(record.data.id) !== -1){
				//console.log('match found')
				return record;
			}
		});			
	},


	showDetail: function (list, index, target,record) {
		console.log(index, 	record);

		var pointsStore = Ext.getStore('Points'),
			index = pointsStore.find('id', record.data.id),
			point = pointsStore.getAt(index);

		var detail = {
			xtype: 'detailpanel',
			point: point
		};
		//var detail = 
		Ext.Viewport.add(detail);
		//Ext.Viewport.add(Ext.create('Ennis.view.Detail', {point: point}));
		Ext.Viewport.animateActiveItem(1, {type: 'slide', direction: 'left'});
	},

	closeDetail: function (button){
		console.log('close');
		var self=this;
		afterFn = this.destroyDetailPanel();
		Ext.Viewport.animateActiveItem(0, {type: 'slide', direction: 'right', after: afterFn});

		//this.destroyDetailPanel();
		//Ext.Viewport.items.items[1].destroy();
		//panel.destroy();
	},

	destroyDetailPanel: function(){
		console.log('destroyingdetailpanel');
		//Ext.Viewport.items.items[1].destroy();
		Ext.Viewport.remove(Ext.getCmp('detailpanel'));
		//Ext.getCmp('detailpanel').destroy();
	}
	
})