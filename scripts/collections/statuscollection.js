define(['backbone', 'underscore', 'status'], function(Backbone, _, Status){
	return Backbone.Collection.extend({
		//Default values
		defaults: {
			collection: [
				new Status({ status_name: 'TO DO'}),
				new Status({ status_name: 'DOING'}),
				new Status({ status_name: 'DONE'})
			]
		},
		model: Status
		//localStorage: new Backbone.LocalStorage("statusCollection") // Unique name within your app.
	});
});

