define(['backbone', 'underscore', 'status'], function(Backbone, _, Status){
	return Backbone.Collection.extend({
		model: Status,
		url: '/statuses',
		localStorage: new Backbone.LocalStorage("statusCollection") // Unique name within your app.
	});
});

