Ext.define('Ennis.view.Directions', {
	extend: 'Ext.Panel',
	xtype: 'directionspanel',
	requires: ['Ennis.store.Legs', 'Ext.dataview.List'],

	config: {

		layout: 'fit',
		height: '100%',
		iconCls: 'user',
		title:'Directions',
		items: [
			{
				xtype: 'titlebar',
				title: 'Directions',
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
				xtype: 'list',
				id: 'listdirections',
			 	store: 'Legs',
			    itemTpl: '<tpl for=".">' +
			    			'<div>From: <b>{startPoint}</b> to <b>{endPoint}</b></div>' +
		    				'<tpl for="directions">' +
		    					'<div>{instructions}</div>' +
		    				'</tpl>'+
			    		'</tpl>'
			}
		]
	}
})