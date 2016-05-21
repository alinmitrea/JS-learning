Ext.define("TabletApp.view.sessiondetail.SessionDetail", {
    "extend": "Ext.panel.Panel",
    requires: [
        'TabletApp.view.sessiondetail.SessionDetailController',
        'TabletApp.view.sessiondetail.SessionDetailModel'
    ],
    alias: 'widget.sessiondetail',

    "controller": "sessiondetail-sessiondetail",
    "viewModel": {
        "type": "sessiondetail-sessiondetail"
    },
    "html": "Hello, World From SessionDetail!!"
});
