//http://maps.googleapis.com/maps/api/directions/json?origin=52.8443831,-8.9827073&destination=52.8446164,-8.9814091&waypoints=52.8443701,-8.9828467&sensor=false

Ext.define('Ennis.view.Map', {
	extend: 'Ext.Panel',
	xtype: 'mapview',
	requires: ['Ext.Map'],

	config: {
		iconCls: 'user',
		title: 'Map',
		layout: 'fit',
		items: [
			{
   				xtype: 'map',
    			useCurrentLocation: true,
    			height: '100%',
    			id: 'navigationmap',
    			listeners: [
	                {
	                    fn: 'onMapMaprender',
	                    event: 'maprender'
	                }
	            ],
    			onMapMaprender: function(map, gmap, options) {
    
		            var neighborhoods = [
		            new google.maps.LatLng(53.337927,-6.260448)
		            ];
		    
		    
		            for (var i = 0; i < neighborhoods.length; i++) {
		                var m = neighborhoods[i];
		    			console.log('rendering' + i);
			                new google.maps.Marker({
		                    position: m,
		                    map: Ext.getCmp('navigationmap').getMap(),
		                    draggable: false,
		                    animation: google.maps.Animation.DROP
		                });
		            }
		        }
			}
		]
	},
})