/*
|--------------------------------------------------------------------------
| App View
|--------------------------------------------------------------------------
*/
define(['backbone', 'jquery', 'underscore', 'project', 'projectsView', 'alterProjectView'], 
	function(Backbone, $, _, Project, ProjectsView, AlterProjectView){

	return Backbone.View.extend({
		initialize: function() {
			
			//Create a new ProjectCollection-view and inject the collection, then render it
			var projectsView = new ProjectsView({ collection: this.collection }).render();
			//Apend it to the AllProjectsTable
			$('#allProjects').append( projectsView.el );

			//Create a new AddProjecView and Inject the collection
			//var addProjectView = new AddProjectView({ collection: this.collection });

			//Listen for Edit event, inject model
			Backbone.on('project:edit', this.alterProject, this );

			//Listen for Add event, inject a new model
			Backbone.on('project:add', this.alterProject, this );
		},

		alterProject: function(id){
			var project;
			var project_id = id.toString();
			var coll = this.collection;

			if (project_id == 'no id') { 
				project = new Project();
			}else{
				project = this.collection.get(project_id);
			}
			//create a new view and bind the model
			var alterProjectView = new AlterProjectView({ model: project, collection: this.collection });
			
			//apend form to the DOM
			$('#alterProjectDiv').empty().append(alterProjectView.render().el);
		}
	});

});