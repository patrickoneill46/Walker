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
				xtype: 'titlebar',
				title: 'Route Map',
				docked: 'top',
				items: [
					{
						xtype: 'button',
						align: 'left',
						text: 'Previous Point',
						action: 'lastPoint',
					},
					{
						xtype: 'button',
						align: 'right',
						text: 'Next Point',
						action: 'nextPoint',
					}
				]
			},
			{
   				xtype: 'map',
    			mapOptions: {
    				center: new google.maps.LatLng(52.8443831, -8.982707300000015),
    				zoom: 17
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
		        }
			}
		]
	},
})