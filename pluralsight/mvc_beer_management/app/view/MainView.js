Ext.define('BEER.view.MainView',{
	extend: 'Ext.container.Viewport',
	layout: 'fit',
	margin: '100',
	items: [{
		xtype: 'panel',
		resizable : false,
        layout : 'border',
        collapsed : false,
        items: [{
        	xtype: 'container',
        	region: 'center',
        	layout: {
        		type: 'vbox',
        		align: 'stretch'
        	},
        	items: [{
        		html: 'ALIN'
        	},
        	{
        		xtype: 'beergardengrid'
        	}]
          }
        ]
	   }
	]
});