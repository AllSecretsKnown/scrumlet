define(['backbone'], function(Backbone){
	return Backbone.Router.extend({
		//Set up all Application routes
		routes: {
			'': 'index',
			'projects': 'index',
			'project/:id': 'showProject',
			'projects/new': 'newProject',
			'project/edit/:id': 'editProject'
		},

		//Main route, "index" page
		index: function() {
			console.log('Index route triggered!');
			Backbone.trigger('project:index');
		},

		//Show project by ID
		showProject: function(id){
			console.log('Show project route triggered! ID: ' + id.toString());
			Backbone.trigger('project:show', [id]);
		},

		//Get the Add project View
		newProject: function(){
			var id = 'no id';
			console.log('Add project route triggered! id: ' + id.toString());
			Backbone.trigger('project:add', [id]);
		},

		//Get the Edit project View
		editProject: function(id){
			console.log('Edit project route triggered! ID: ' + id.toString());
			Backbone.trigger('project:edit', [id]);
		}
	});
});