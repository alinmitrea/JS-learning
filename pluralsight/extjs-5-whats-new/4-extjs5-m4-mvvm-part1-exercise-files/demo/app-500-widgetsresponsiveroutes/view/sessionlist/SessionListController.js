Ext.define('TabletApp.view.sessionlist.SessionListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sessionlist-sessionlist',

    onGridStoreRefresh: function (grid) {
        grid.getStore().load();
    }

});
