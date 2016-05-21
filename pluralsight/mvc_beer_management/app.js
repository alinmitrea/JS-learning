Ext.Loader.setConfig({
	enabled : true
});

Ext.application({
	name: 'BEER',
	
	requires: ['BEER.view.MainView'],
	
	stores: ['BeerGarden'],
	
	models: ['BeerGarden'],
	
	views: ['BeerGardenView'],
	
	launch : function() {
		Ext.create('BEER.view.MainView');
	}
});

