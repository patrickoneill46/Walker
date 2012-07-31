Ext.define('Ennis.model.Marker', {
	extend: 'Ext.data.Model',

	config:{
		fields: [
			{name: 'lat', type: 'number'},
			{name: 'long', type: 'number'},
			{name: 'name', type: 'String'}
		]
	}
})