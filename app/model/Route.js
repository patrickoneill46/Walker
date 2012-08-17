Ext.define('Ennis.model.Route', {
	extend: 'Ext.data.Model',

	config: {
		autoLoad: true,
		fields: [
			{name: 'id', type: 'number'},
			{name: 'name', type: 'string'},
			{name: 'length', type: 'string'},
			{name: 'desc', type: 'string'},
			{name: 'points', type: 'auto'}
		],

		idProperty: 'id',
	}
})