define(['backbone', 'jquery','underscore'], function(Backbone, $, _){
	return Backbone.Router.extend({
		routes: {
			'': 'index',
			'projects/new': 'newProject',
			'projects/edit/:id': 'editProject'
		},

		index: function() {
			console.log('index route triggered!');
		},

		newProject: function(){
			var id = 'no id';
			console.log('add project route triggered! id: ' + id.toString());
			Backbone.trigger('project:add', [id]);
		},

		editProject: function(id){
			console.log('edit project route triggered! ID: ' + id.toString());
			Backbone.trigger('project:edit', [id]);
		}
	});
});