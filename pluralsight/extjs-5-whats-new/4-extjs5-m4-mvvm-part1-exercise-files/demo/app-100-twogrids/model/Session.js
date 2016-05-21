Ext.define('TabletApp.model.Session', {
    extend: 'TabletApp.model.Base',
    requires: ['TabletApp.model.Base'],

    fields: [
        { name: 'title', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'interestCount', type: 'int' },
        { name: 'interestLevel', type: 'int' },
        { name: 'approved', type: 'bool' },
        { name: 'roomCapacity', type: 'int' }
    ]

});
