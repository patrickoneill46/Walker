Ext.define('Ennis.model.Leg', {
	extend: 'Ext.data.Model',

	config: {

		fields: [
			{
				name: 'id',
				type: 'number',
			},
			{
				name: 'start',
				type: 'number'
			},
			{
				name: 'end',
				type: 'number'
			},
			{
				name: 'startPoint',
				type: 'String',
			},
			{
				name: 'endPoint',
				type: 'String',
			},
			{
				name: 'directions',
				type: 'auto'
			},
			{
				name: 'walk',
				type: 'String'
			}
		]
	}
})