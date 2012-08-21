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
		console.log('filtering points');	
		//points is an array of unique id's of points that make up a walk
		self.filterBy(function(record,id){
			if(!points.indexOf(id) > -1){
				return true
				console.log(true, points.indexOf(id))
			}else{
				console.log(false);
			}
		});
	}
});