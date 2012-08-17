Ext.define('Ennis.store.Points', {
	extend: 'Ext.data.Store',
	requires: ['Ennis.model.Point'],

	config: {
		model: 'Ennis.model.Point',
		autoLoad: true,
		proxy: {
			type: 'ajax',
            url: 'app/data/points.json',
            reader: {
                type: 'json',
                rootProperty: 'items',
                idProperty: 'id'
            }
		}
	},

	getRoute: function(points){

		var self = this;
		//points is an array of unique id's of points that make up a walk
		
	}

});