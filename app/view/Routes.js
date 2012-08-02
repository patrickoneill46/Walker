Ext.define('Ennis.view.Routes', {
	extend: 'Ext.Panel',
	xtype: 'routeselection',

	config: {
		title: 'Routes',
		iconCls:'search',
		layout: {
			type: 'vbox'
		},

		items: [
			{
				xtype: 'titlebar',
				title: 'Routes',
				docked: 'top',
				//flex: 1
			},
			{
				xtype: 'panel',
				id: 'redpanel',
				style: 'background-color: red',
				flex: 1,
				items: [
					{
						xtype: 'button',
						text: 'Start Red Route',
						icon: 'action',
						action: 'startRoute',
					}
				]
			},
			{
				xtype: 'panel',
				id: 'whitepanel',
				style: 'background-color: white',
				flex: 1
			},
			{
				xtype: 'panel',
				id: 'yellowpanel',
				style: 'background-color: yellow',
				flex: 1
			}
		]
	}
})