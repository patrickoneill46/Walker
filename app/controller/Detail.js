Ext.define('Ennis.controller.Detail', {
	extend: 'Ext.app.Controller',

	config:{

		refs: {

		},

		control: {
			'button[action=visted]': {
				tap: 'markVistied',
			}
		}
	},


	markVistied: function (button){
		var vistedId = button.config.id,
			pointsStore = Ext.getStore('Points');
			index = pointsStore.find('id', id),
			point = pointsStore.getAt(index);

		
	}
})