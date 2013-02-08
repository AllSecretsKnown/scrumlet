//Set up a config for Require fitted for the Application, used in PROD env.
require.config({
	deps: ['app'],
	paths: {
		jquery: 'vendor/jquery/dist/jquery',
		underscore: 'vendor/underscore/underscore',
		backbonePure: 'vendor/backbone/backbonePure',
		backbone: 'vendor/backbone/backboneLoader',
		relational: 'vendor/backbone-relational/relational',
		localStorage: 'vendor/localstorage/backbone.localStorage',
		status: 'models/status',
		task: 'models/task',
		project: 'models/project',
		projectCollection: 'collections/projectcollection',
		statusCollection: 'collections/statuscollection',
		taskCollection: 'collections/taskcollection',
		projectView: 'views/project/projectview',
		showProjectView: 'views/project/showprojectview',
		alterProjectView: 'views/project/alterprojectview',
		projectsView: 'views/project/projectsview',
		showTaskView: 'views/task/showtaskview',
		addTaskView: 'views/task/addtaskview',
		appView: 'views/appview',
		router: 'router'
	},
	shim: {
		backbonePure: {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		},
		relational: {
			deps: ['backbonePure', 'underscore']
		},
		localStorage: {
			deps: ['backbonePure', 'underscore']
		}
	}
});