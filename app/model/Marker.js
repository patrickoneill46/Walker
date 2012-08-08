Ext.define('Ennis.model.Marker', {
	extend: 'Ext.data.Model',

	config:{
		fields: [
			{name: 'id', type: 'number'},
			{name: 'lat', type: 'number'},
			{name: 'long', type: 'number'},
			{name: 'name', type: 'String'},
			{name: 'desc', type: 'String'},
			{name: 'img', type: 'String'}
		],

		idProperty: 'id',

		belongsTo: 'Ennis.model.Route',

	}
})