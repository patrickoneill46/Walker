Ext.define('Ennis.store.Points', {
	extend: 'Ext.data.Store',
	requires: ['Ennis.model.Point'],

	config: {
		model: 'Ennis.model.Point',

		autoLoad: true,
		proxy: {
			type: 'ajax',
            url: 'app/data/markers.json',
            reader: {
                type: 'json',
                rootProperty: 'items',
                idProperty: 'id'
            }
		}
	},

	getRoute: function (route){
		var self = this;
		Pointstore = self;
		console.log(self);
		//return 'hello';

		self.filterBy(function (record, id){
			console.log('starting filter');
			for(var i = 0; i < record.data.routes.length; i++) {
				console.log(record.data.routes[0]);

			}
			return true;
		});
	}
})