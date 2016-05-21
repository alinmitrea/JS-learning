Ext.define('BEER.store.BeerGarden',{
	extend: 'Ext.data.Store',
	model: 'BEER.model.BeerGarden',
	
	autoLoad: true,
	autoSync: true
});