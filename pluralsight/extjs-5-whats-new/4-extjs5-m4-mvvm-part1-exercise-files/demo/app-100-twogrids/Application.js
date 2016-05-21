/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('TabletApp.Application', {
    extend: 'Ext.app.Application',
    
    name: 'TabletApp',

    views: [
    ],



//    controllers: [
//        'Root'
//        // TODO: add controllers here
//    ],

    stores: [
        // TODO: add stores here
    ],
    
    launch: function () {
        Ext.create('Ext.container.Viewport',{
            layout: 'border',
            autoShow: 'true',
            items: [
                {
                    region: 'center',
                    xtype: 'app-main'
                }
            ]
        })
    }
});
