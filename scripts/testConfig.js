require.config({
	deps: ['testSuite'],
	paths: {
		jquery: 'vendor/jquery/dist/jquery',
		underscore: 'vendor/underscore/underscore',
		backbone: 'vendor/backbone/backbone',
		relational: 'vendor/backbone-relational/relational',
		handlebars: 'vendor/handlebars/handlebars',
		localStorage: 'vendor/localstorage/backbone.localstorage',
		status: 'models/status',
		task: 'models/task',
		project: 'models/project',
		statusTest: 'tests/models/statusTest',
		projectTest: 'tests/models/projectTest'
	},
	shim: {
		backbone: {
    		deps: ['underscore', 'jquery' ],
      		exports: 'Backbone'
    	},
    	relational: {
    		deps: ['backbone']
    	},
    	localStorage: {
    		deps: ['backbone']
    	}
	}
});