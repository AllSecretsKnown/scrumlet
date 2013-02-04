//##Project collection
//A collection of projects, using Localstorage for persistance
//This collection is used in TEST env.
define(['backbone', 'underscore', 'localStorage', 'project'], function(Backbone, _, LocalStorage, Project){
	return Backbone.Collection.extend({
		model: Project,
		url: '/projects',
		localStorage: new Backbone.LocalStorage("TestCollection")
	});
});