Ext.define('Ennis.store.Routes', {
	extend: 'Ext.data.Store',
	requires: 'Ennis.model.Route',

	config: {

		model: 'Ennis.model.Route',
		
		data: [
			{
				id: 1,
				name: 'red',
				length: '1.5km (35 minutes)',
				points: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0]
			},
			{
				id: 2,
				name: 'white',
				length: '2.5km (40 minutes)',
				points: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,27,28,29,30,31,32,33,34,35,36,37,17,18,19,20,21,22,23,24,25,26,0]
				
			},
			{
				id: 3,
				name: 'yellow',
				length: '2.75km (50 minutes)',
				points: [0,5,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,8,7,6,5,4,3,2,1,0]
			},
			{
				id: 4,
				name: 'blue',
				length: '3.0km (60 minutes)',
				points: [0,2,25,24,23,22,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,0]
			}
		]
	}
});