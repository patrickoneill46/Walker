Ext.define('Ennis.store.Routes', {
	extend: 'Ext.data.Store',

	config: {
		
		model: 'Ennis.model.Route',
		autoLoad: true,
		proxy: {
			type: 'ajax',
            url: 'app/data/data.json',
            reader: {
                type: 'json',
                rootProperty: 'items',
                idProperty: 'id'
            }
		}
	}
});