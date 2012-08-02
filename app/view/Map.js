//http://maps.googleapis.com/maps/api/directions/json?origin=52.8443831,-8.9827073&destination=52.8446164,-8.9814091&waypoints=52.8443701,-8.9828467&sensor=false

Ext.define('Ennis.view.Map', {
	extend: 'Ext.Panel',
	xtype: 'mapview',
	requires: ['Ext.Map'],

	config: {
		iconCls: 'user',
		title: 'Map',
		layout: 'fit',
		//directServ : new google.maps.DirectionsService(),
		items: [
			{
				xtype: 'titlebar',
				title: 'Route Map',
				items: [
					{
						xtype: 'button',
						align: 'right',
						text: 'Next Point',
						action: 'nextPoint',
						docked: 'top'
					}
				]
			},
			{
   				xtype: 'map',
    			//useCurrentLocation: true,
    			//height: '100%',
    			mapOptions: {
    				center: new google.maps.LatLng(52.8443831, -8.982707300000015),
    				//zoom: 1
    			},
    			id: 'navigationmap',
    			listeners: [
	                /**
	                {
	                    fn: 'onMapMaprender',
	                    event: 'maprender'
	                }
	                **/
	            ],
    			onMapMaprender: function(map, gmap, options) {

    				console.log('rendering map');
    				var self = this;
    				self.getMap().setZoom(17);
    				var directionsRenderer = new google.maps.DirectionsRenderer();
					directionsRenderer.setMap(self.getMap());    
    
		            var neighborhoods = [
		            	new google.maps.LatLng(53.337927,-6.260448),
		            	//new google.maps.LatLng(52.8443831,-8.9827073),
		            	//new google.maps.LatLng(52.8443701, -8.9828467),
		            	//new google.maps.LatLng(52.8445257, -8.9827824),
		            	//new google.maps.LatLng(52.8454264, -8.9816666),
		            	new google.maps.LatLng(52.8461715, -8.9814198),
		            ];

	            	/**
		            var directReq = new google.maps.DirectionsRequest({
		            	avoidHighways: true,
		            	avoidTolls: true,
		            	destination: neighborhoods[4],
		            	origin: neighborhoods[0],
		            });**/
					

					var directReq = {
		            	avoidHighways: false,
		            	avoidTolls: false,
		            	destination: neighborhoods[0],
		            	origin: neighborhoods[1],
		            	travelMode: 'WALKING',
		            	//travelMode: 'DRIVING',
		            };

		  			ds = new google.maps.DirectionsService();
		  			ds.route(directReq, function(response, status) {
	  					//console.log(results, status);
	  					//google.maps.DirectionsRenderer().setMap(self.getMap());
	  					//google.maps.DirectionsRenderer().setDirections(results);
	  					console.log(response);
	  					if (status == google.maps.DirectionsStatus.OK) {
					    	directionsRenderer.setDirections(response);
					  	} else {
				 	    	alert('Error: ' + status);
					  	}
		  			});

		    
		            for (var i = 0; i < neighborhoods.length; i++) {
		                var m = neighborhoods[i];
		    			console.log('rendering' + i);
			                new google.maps.Marker({
		                    position: m,
		                    //map: Ext.getCmp('navigationmap').getMap(),
		                    map: gmap,
		                    draggable: false,
		                    animation: google.maps.Animation.DROP
		                });
		            }
		        }
			}
		]
	},
})