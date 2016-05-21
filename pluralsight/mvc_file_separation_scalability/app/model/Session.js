Ext.define('SE.model.Session',{
	extend: 'Ext.data.Model',
	
	fields : [ 
	    'id', 
	    { name : 'title', sortType : 'asUCText'},
	    'approved',  
	    {   dateFormat: 'c', 
	        name: 'sessionTimeDateTime', 
	        sortType: 'asDate',
            type: 'date'
        },
        {
          convert: function(v, rec) {
            var convertIt = Ext.util.Format.dateRenderer('m/d/Y g:i a'),
                pretty = convertIt(rec.get("sessionTimeDateTime"));
            return pretty;
        },
        name: 'sessionTimePretty',
        type: 'string'
    }],
    proxy : {
		type : 'rest',
		url : 'data_ext/sessions.json', // url: 'http://127.0.0.1:1337/getSessions', works also like this if the server is returning a json
		reader : {
			type : 'json',
			rootProperty : 'data'
		}
	}
});