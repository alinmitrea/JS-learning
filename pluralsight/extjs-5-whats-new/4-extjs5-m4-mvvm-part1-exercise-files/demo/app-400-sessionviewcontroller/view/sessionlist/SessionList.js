Ext.define("TabletApp.view.sessionlist.SessionList", {
    "extend": "Ext.grid.Panel",
    requires: [
        'TabletApp.view.sessionlist.SessionListController'
    ],
    alias: 'widget.sessionlist',
    "controller": "sessionlist-sessionlist",

    listeners: {
        refreshdata: 'onGridStoreRefresh',
        scope: 'controller'
    },

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    text: 'refresh',
                    handler: function(button) {
                        var grid = button.up().up();
                        grid.fireEvent('refreshdata',grid);
                    }
                }
            ]
        }
    ],


    bind: {
        store: '{sessionListByInterest}'
    },

    reference: 'sessionListGrid',

    columns: [
        {
            header: 'Id',
            dataIndex: 'id'
        },
        {
            header: 'Approved',
            dataIndex: 'approved'
        },
        {
            header: 'Interest Level',
            dataIndex: 'interestLevel',
            hidden: true
        },
        {
            header: 'Interest Level',
            width: '200',
            renderer: function (value, metaData, record, row, col, store, gridView) {
                var level = record.get("interestLevel");
                if (level === 0) {
                    return "Not Interested"
                } else if (level === 1) {
                    return "Interested"
                } else {
                    return "Attending"
                }
            }
        },
        {
            header: 'Interest Count',
            dataIndex: 'interestCount'
        },
        {
            header: 'Title',
            dataIndex: 'title',
            flex: 1
        }

    ]



});
