Ext.define('TabletApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'TabletApp',
        isAdmin: true
    },

    stores: {
        sessionListByInterest: {
            model: 'Session',
            autoLoad: true,
            sorters: ['interestCount']

        }
    }

//    formulas: {
//        currentSession: {
//            bind: {
//                bindTo: '{sessionListGrid.selection}',
//                deep: true
//            },
//            get: function (session) {
//                return session;
//            },
//            set: function (session) {
//                session = this.set('currentSession', session);
//            }
//        }
//    }

});