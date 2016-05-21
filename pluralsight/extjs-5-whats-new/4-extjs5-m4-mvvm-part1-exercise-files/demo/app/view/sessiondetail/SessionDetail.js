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

    reference: 'detailPanel',

    bodyPadding: 20,

    items: [
        {
            xtype: 'fieldset',
            title: 'Session Information',
            padding: 10,
            items: [
                {
                    fieldLabel: 'Toggle Group',
                    items: [
                        {
                            xtype: 'segmentedbutton',
                            defaultBindProperty: 'value',
                            bind: {
                                value: '{selectedSession.interestLevel}'
                            },
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
                            ]
                        }
                    ]
                },
                {
                    xtype: 'checkboxfield',
                    anchor: '100%',
                    fieldLabel: 'Approved',
                    boxLabel: '',
                    bind: {
                        value: '{selectedSession.approved}',
                        disabled: '{!isAdmin}'
                    }
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'Title',

                    bind: {
                        value: '{selectedSession.title}',
                        readOnly: '{!isAdmin}'
                    }
                },
                {
                    xtype: 'textareafield',
                    anchor: '100%',
                    fieldLabel: 'Description',
                    name: 'description',
                    readOnly: true,
                    bind: {
                        value: '{selectedSession.description}'
                    }
                }

            ]
        }
    ]



});
