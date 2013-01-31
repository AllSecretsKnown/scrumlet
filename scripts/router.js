define(['backbone'], function(Backbone){
	return Backbone.Router.extend({
		routes: {
			'': 'index',
			'projects': 'index',
			'project/:id': 'showProject',
			'projects/new': 'newProject',
			'project/edit/:id': 'editProject'
		},

		index: function() {
			console.log('Index route triggered!');
			Backbone.trigger('project:index');
		},

		showProject: function(id){
			console.log('Show project route triggered! ID: ' + id.toString());
			Backbone.trigger('project:show', [id]);
		},

		newProject: function(){
			var id = 'no id';
			console.log('Add project route triggered! id: ' + id.toString());
			Backbone.trigger('project:add', [id]);
		},

		editProject: function(id){
			console.log('Edit project route triggered! ID: ' + id.toString());
			Backbone.trigger('project:edit', [id]);
		}
	});
});