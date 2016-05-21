/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('TabletApp.Application', {
    extend: 'Ext.app.Application',
    requires: ['*'],
    name: 'TabletApp',

    views: [
    ],

    models: [
        'Session'
    ],

    stores: [

    ],
    
    launch: function () {
        Ext.create('Ext.container.Viewport',{
            layout: 'fit',
            autoShow: 'true',
            items: [
                {
                    xtype: 'app-main'
                }
            ]
        })
    }
});
