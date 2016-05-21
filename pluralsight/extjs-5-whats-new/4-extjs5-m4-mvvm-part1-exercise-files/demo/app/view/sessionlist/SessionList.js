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
                    handler: function (button) {
                        var grid = button.up().up();
                        grid.fireEvent('refreshdata', grid);
                    }
                }
            ]
        }
    ],

    bind: {
        store: '{sessionListByInterest}',
        selection: '{selectedSession}'
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
            text: 'Interest Level',
            dataIndex: 'interestLevel'
        },

        {
            text: 'Interest',
            xtype: 'widgetcolumn',
            width: 300,
            dataIndex: 'interestLevel',
            widget: {
                xtype: 'segmentedbutton',
                defaultBindProperty: 'value',
                items: [
                    {
                        name: 'interestLevel',
                        inputValue: 0,
                        text: 'Not Interested'
                    },
                    {
                        name: 'interestLevel',
                        inputValue: 1,
                        text: 'Interested'

                    },
                    {
                        name: 'interestLevel',
                        inputValue: 2,
                        text: 'Attending'
                    }
                ],
                listeners: {
                    toggle: function(segmentedButton,value) {
                        var rec = segmentedButton.getWidgetRecord();
                        if (rec) {
                            rec.set('interestLevel', segmentedButton.getValue());
                        }

                    }
                }
            }



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
//        {
//            text: 'Slider',
//            xtype: 'widgetcolumn',
//            width: 120,
//            dataIndex: 'interestLevel',
//            widget: {
//                xtype: 'sliderwidget',
//                minValue: 0,
//                maxValue: 2,
//                decimalPrecision: 0,
//                listeners: {
//                    change: function (slider, value) {
//
//
//                        // If the widget has been decorated by the WidgetColumn with context-returning methods
//                        // then extract data and update its context record.
//                        //debugger;
//                        if (slider.getWidgetRecord) {
//
//                            var rec = slider.getWidgetRecord();
//                            if (rec) {
//                                rec.set('interestLevel', value);
//                            }
//                        }
//                    }
//                }
//            }
//        },

    ]



});
