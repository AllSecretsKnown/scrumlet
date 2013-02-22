//##Project collection
//A collection of projects, using Localstorage for persistance
//This collection is used in PROD env.
define(['backbone', 'project'], function(Backbone, Project){
	return Backbone.Collection.extend({
		model: Project,
		url: '/projects',
		localStorage: new Backbone.LocalStorage(window.Jasmine ? "TestCollection" : "ProjectsCollection")
	});
});
	
