Ext.define('Ennis.view.Points', {
	extend: 'Ext.Panel',
	requires: ['Ext.List', 'Ennis.store.Points', 'Ennis.view.Detail', 'Ext.plugin.ListPaging'],
	xtype: 'pointsview',

	config: {

		iconCls: 'user',
		title: 'Points',
		layout: 'fit',
		height: '100%',

		items: [
			{
				xtype: 'titlebar',
				title: 'Points',
				docked: 'top',
			},
			{
				xtype: 'toolbar',
				docked: 'top',
				layout: {
					align: 'middle',
					type: 'hbox',
					pack: 'center',
				},
				items: [
					{
						xtype: 'segmentedbutton',
						align: 'middle',
						items: [
							{
								xtype: 'button',
								action: 'filter',
								route: 'red',
								text: 'Red',
							},
							{
								xtype: 'button',
								action: 'filter',
								route: 'white',
								text: 'White'
							},
							{
								xtype: 'button',
								action: 'filter',
								route: 'yellow',
								text: 'Yellow'
							},
							{
								xtype: 'button',
								action: 'filter',
								route: 'blue',
								text: 'Blue'
							}
						]
					}
				]
			},
			{
				xtype: 'list',
				id: 'pointslist',
				store: 'Points',
				itemTpl: '<b>{id}. {name}</b>',
				plugins: [
			        {
			            xclass: 'Ext.plugin.ListPaging',
			            autoPaging: true
			        }
			    ],
				//height: '100%',
			}
		]

	}
})