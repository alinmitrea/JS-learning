Ext.define('TabletApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'TabletApp'
    },

    stores: {
        sessionListByInterest: {
            model: 'Session',
            autoLoad: true,
            sorters: ['interestCount']
        }
    }
});