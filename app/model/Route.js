Ext.define('Ennis.model.Route', {
	extend: 'Ext.data.Model',

	config: {
		autoLoad: true,
		fields: [
			{name: 'id', type: 'number'},
			{name: 'name', type: 'string'},
			{name: 'desc', type: 'string'}
		],

		idProperty: 'id',

		associations: [
			{
				type: 'hasMany',
				model: 'Ennis.model.Marker',
				associationKey: 'markers',
				name: 'getMarkers',
				autoLoad: true,
			}

		]
	}
})