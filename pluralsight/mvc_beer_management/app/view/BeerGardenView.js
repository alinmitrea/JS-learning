Ext.define('BEER.view.BeerGardenView',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.beergardengrid',
	store: 'BeerGarden',
	columns: [{
		xtype: 'gridcolumn',
		dataIndex: 'name',
		text: 'Beer Name'
	},{
		xtype: 'gridcolumn',
		dataIndex: 'type',
		text: 'Type'
	},{
		xtype: 'gridcolumn',
		dataIndex: 'quantity',
		text: 'Quantity'
	}]
});