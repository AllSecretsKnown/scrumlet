define(['backbone', 'underscore', 'task'], function(Backbone, _, Task){
	return Backbone.Collection.extend({
		model: Task,
		url: '/tasks',
		localStorage: new Backbone.LocalStorage("taskCollection") // Unique name within your app.
	});
});

