Ext.define('TabletApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    routes: {

        'detailpage/:hideOrShow': {
            action: 'onDetailPageHideOrShow'
        }
    },

    onDetailPageHideOrShow: function (hideOrShow) {

        var detailPanel = this.getView().lookupReference('detailPanel');

        if (hideOrShow == 'hide') {
            detailPanel.hide();
        } else {
            detailPanel.show();
        }


    }





});
