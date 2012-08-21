Ext.define('Ennis.view.Detail', {
	extend: 'Ext.Panel',
	xtype: 'detailpanel',
	requires: ['Ext.Img'],

	config: {
		iconCls: 'user',
		fullscreen: true,
		id: 'detailpanel',
		point: {},
		layout: 'vbox',
		items: [
			{
				xtype: 'titlebar',
				title: undefined,
				//tite: this.point,
				id: 'detailtitle',
				cls: 'detailTitle',
				items: [
					{
						xtype: 'button',
						action: 'closeDetail',
						text: 'close',
					}
				]
			},
			{
				xtype: 'image',
				id: 'detailImage',
				src: 'resources/images/oconnellmonument.jpg',
				flex: 1,
			},
			{
				xtype: 'panel',
				id: 'detaildesc',
				html: undefined,
				flex: 1
			},
			{
				xtype: 'button',
				text: 'Visted',
				action: 'visited',
				height: 60,
				width: 100,
			}
		],
	},

	initialize: function(component, options){

		console.log(Ext.getCmp('detailtitle'));
		var point = this.getPoint();
		Ext.getCmp('detailtitle').setTitle(point.data.name);
		Ext.getCmp('detaildesc').setHtml(point.data.desc);
	},

	hide: function (){
		//console.log('hello i am hidden');
		//console.log(this);
	}
});