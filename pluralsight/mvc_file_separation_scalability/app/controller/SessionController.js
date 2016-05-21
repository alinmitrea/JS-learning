Ext.define('SE.controller.SessionController', {
	extend: 'Ext.app.Controller',
	
	stores: [
	    'Sessions', 'Presenters', 'SessionPresenters'
	],
	
	refs: [
	       {
	           ref: 'details',
	           selector: 'detailspanel'
	       },
	       {
	           ref: 'presenters',
	           selector: 'presenters'
	       },
	       {
	           ref: 'sessions',
	           selector: 'sessiongridpanel'
	       }
	],
	
	init: function(){
		this.control({
			"sessiongridpanel" : {
				itemdblclick: this.onItemdblclick,
				select: this.onSelect
			}
		});
	},
	
	onItemdblclick: function(gridpanel, record, item, e) {
		var formWindow = Ext.create('SE.view.SessionForm');
		var form = formWindow.down('form');
		form.loadRecord(record);
		formWindow.show();
	},
	
	onSelect: function(rowmodel, record, index, eOpts){
		Ext.suspendLayouts();
		var sessionId = record.get("id");
		
		var presenterIds = [];
		
		var spStore = this.getSessionPresentersStore();
		spStore.each(function(rec){
			if (rec.get("sessionId") === sessionId){
				presenterIds.push(rec.get("presenterId"));
			}
		});
		
		this.getPresentersStore().clearFilter();
        this.getPresentersStore().filterBy(function(rec) {
            var foundMatch = false;
            for (var i = 0; i < presenterIds.length; i++) {
                if (rec.get("id") === presenterIds[i]) {
                    foundMatch = true;
                }
            }
            return foundMatch;
        });
        
        // fill in details on right side
        var sessions = record.getData();
        sessions.presenters = [];
        this.getPresentersStore().each(function(presenterRecord){
        	sessions.presenters.push(presenterRecord.getData());
        });
        
        var detailsPanel = this.getDetails();
        
        detailsPanel.update(sessions);
        
        Ext.resumeLayouts();
	}
});