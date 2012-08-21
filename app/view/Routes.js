Ext.define('Ennis.view.Routes', {
	extend: 'Ext.Panel',
	xtype: 'routeselection',

	config: {
		title: 'Routes',
		iconCls:'search',
		cls: 'routeselection',
		layout: {
			type: 'vbox'
		},

		items: [
			{
				xtype: 'titlebar',
				title: 'Routes',
				docked: 'top',
				//flex: 1,
				items: [
					{
						xtype: 'button',
						text: 'Show Route',
						action: 'showRoute'
					},
					{
						xtype: 'button',
						text: 'Remove Markers',
						action: 'removeMarkers'
					},
					{
						xtype: 'button',
						text: 'Show Location',
						action: 'showLocation'
					}
				]
			},
			{
				xtype: 'panel',
				id: 'redpanel',
				//style: 'background-color: red',
				style: 'background-color: #EB8383',
				flex: 1,
				items: [
					{
						xtype: 'button',
						//text: '<img src="resources/images/redroute.png" class="routelogo" />',
						icon: 'action',
						cls: 'routebutton',
						id: 'redroutebutton',
						action: 'startRoute',
						width: 342,
						height: 52,
						//ui:'forward',
					}
				]
			},
			{
				xtype: 'panel',
				id: 'whitepanel',
				style: 'background-color: white',
				flex: 1,
				items: [
					{
						xtype: 'button',
						//text: '<img src="resources/images/redroute.png" class="routelogo" />',
						icon: 'action',
						cls: 'routebutton',
						id: 'whiteroutebutton',
						action: 'startRoute',
						width: 342,
						height: 52,
						//ui:'forward',
					}
				]
			},
			{
				xtype: 'panel',
				id: 'yellowpanel',
				style: 'background-color: yellow',
				flex: 1,
				items: [
					{
						xtype: 'button',
						//text: '<img src="resources/images/redroute.png" class="routelogo" />',
						icon: 'action',
						cls: 'routebutton',
						id: 'yellowroutebutton',
						action: 'startRoute',
						width: 342,
						height: 52,
						//ui:'forward',
					}
				]
			},
			{
				xtype: 'panel',
				id: 'bluepanel',
				style: 'background-color: blue',
				flex: 1,
				items: [
					{
						xtype: 'button',
						//text: '<img src="resources/images/redroute.png" class="routelogo" />',
						icon: 'action',
						cls: 'routebutton',
						id: 'blueroutebutton',
						action: 'startRoute',
						width: 342,
						height: 52,
						//ui:'forward',
					}
				]
			}
		]
	}
})