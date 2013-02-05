define(['backbone', 'underscore', 'status'], function(Backbone, _, Status){
	return Backbone.Collection.extend({
		model: Status,
		localStorage: new Backbone.LocalStorage("statusCollection") // Unique name within your app.
	});
});

