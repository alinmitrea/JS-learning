Ext.define('BEER.model.BeerGarden',{
	extend: 'Ext.data.Model',
	
	fields : [ 'name', 'type', 'quantity'],
	
	proxy : {
		type : 'rest',
		url : 'api/beers', // let's check
		reader : {
			type : 'json' //, rootProperty : 'data'
		}
	}
});