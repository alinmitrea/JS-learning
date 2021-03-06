Ext.define('TabletApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'TabletApp',
        isAdmin: false
    },

    stores: {
        sessionListByInterest: {
            model: 'Session',
            autoLoad: true,
            sorters: ['interestCount'],
            listeners: {
                load: function (store, records, successful) {
                }
            }

        }
    },

    formulas: {
        currentSession: {
            bind: {
                bindTo: '{sessionListGrid.selection}',
                deep: true
            },
            get: function (session) {
                return session;
            },
            set: function (session) {
                session = this.set('currentSession', session);
            }
        }
    }

});