/*
|--------------------------------------------------------------------------
| App View
|--------------------------------------------------------------------------
*/
define(['backbone', 'jquery', 'underscore','projectsView', 'addProjectView'], function(Backbone, $, _, ProjectsView, AddProjectView){

	return Backbone.View.extend({
		initialize: function() {
			
			//Create a new ProjectCollection-view and inject the collection, then render it
			var projectsView = new ProjectsView({ collection: this.collection }).render();
			//Apend it to the AllProjectsTable
			$('#allProjects').append( projectsView.el );

			//Create a new AddProjecView and Inject the collection
			var addProjectView = new AddProjectView({ collection: this.collection });

			//Listen for Edit event
			projectsView.on('project:edit', this.editProject, this);
		},

		editProject: function(project){
			//create a new edit view and bind the model
			var editProjectView = new EditProjectView({ model: project });
			console.log('körs');
			//apend form to the DOM
			$('#main_div').append(editProjectView.el);
		},
	});

});