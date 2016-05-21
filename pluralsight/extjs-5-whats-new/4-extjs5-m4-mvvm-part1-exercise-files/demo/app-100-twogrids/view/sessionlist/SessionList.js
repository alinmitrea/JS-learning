Ext.define("TabletApp.view.sessionlist.SessionList", {
    "extend": "Ext.panel.Panel",
    requires: [
        'TabletApp.view.sessionlist.SessionListModel',
        'TabletApp.view.sessionlist.SessionListController'
    ],
    alias: 'widget.sessionlist',
    "controller": "sessionlist-sessionlist",
    "viewModel": {
        "type": "sessionlist-sessionlist"
    },
    "html": "Hello, World From SessionList!!"

});
