Ext.define('Ennis.store.Legs', {
	extend: 'Ext.data.Store',
	requires: ['Ennis.model.Leg'],

	config: {
		model: 'Ennis.model.Leg',
		autoLoad: true,
		autoSync: true,
		
	}
})