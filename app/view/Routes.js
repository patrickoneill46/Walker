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
				//flex: 1
			},
			{
				xtype: 'panel',
				id: 'redpanel',
				//style: 'background-color: red',
				style: 'background-color: #EB8383; opacity: 0.5;',
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
				style: 'background-color: white; opacity: 0.5',
				flex: 1
			},
			{
				xtype: 'panel',
				id: 'yellowpanel',
				style: 'background-color: yellow; opacity: 0.5',
				flex: 1
			}
		]
	}
})