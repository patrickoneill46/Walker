Ext.define('Ennis.model.Point', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			{name: 'id', type: 'number'},
			{name: 'lat', type: 'number'},
			{name: 'long', type: 'number'},
			{name: 'name', type: 'String'},
			{name: 'desc', type: 'String'},
			{name: 'img', type: 'String'},
			{name: 'redIndex', type: 'number'},
			{name: 'whiteIndex', type: 'number'},
			{name: 'yellowIndex', type: 'number'},
			{name: 'blueIndex', type:'number'},
			{name: 'visited', type: 'boolean'}
		],

		idProperty: 'id',
	}
})