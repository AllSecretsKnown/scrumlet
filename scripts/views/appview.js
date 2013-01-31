/*
|--------------------------------------------------------------------------
| App View
| Responsible for keeping it all together!
| App Controller?
|--------------------------------------------------------------------------
*/
define(['backbone', 'jquery', 'underscore', 'project', 'projectsView', 'alterProjectView', 'showProjectView'],
	function(Backbone, $, _, Project, ProjectsView, AlterProjectView, ShowProjectView){

	return Backbone.View.extend({
		//Initialize the AppView, set up event listeners
		initialize: function() {
			
			//Listen for index route
			Backbone.on('project:index', this.showIndex, this );

			//Listen for Show Project event, inject ID
			Backbone.on('project:show', this.showSingleProject, this );

			//Listen for Edit Project event, inject ID
			Backbone.on('project:edit', this.alterProject, this );

			//Listen for Add Project event, inject a Empty ID
			Backbone.on('project:add', this.alterProject, this );

			//Listen for Project saved event, remove form
			//TODO: Show Feedback to user
			Backbone.on('project:altered', this.clearForm, this );
		},

		//Show main page
		showIndex: function(){
			//Create a new ProjectCollection-view and inject the collection, then render it
			var projectsView = new ProjectsView({ collection: this.collection }).render();

			//Get an empty table and fill it!
			var table = $('#allProjectsTable').clone();
			table.append( projectsView.$el );
			table.removeAttr('id');

			//Apend it to the AllProjectsTable
			$('#main_div').empty().append( table.show() );
		},

		//Function to render showProjectView, inject the model
		showSingleProject: function(id){
			var project_id = id.toString();
			var project = this.collection.get(project_id);
			var showProjectView = new ShowProjectView({ model: project }).render();

			$('#main_div').empty().append( showProjectView.el );
		},

		//Function to add or edit Project
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
			
			//Remove existing form befor rendering a new
			this.clearForm();
			//Get back to index page
			this.showIndex();
			//apend form to the DOM
			$('#main_div').prepend(alterProjectView.render().el);
		},

		//Function to clear form
		clearForm: function(){
			$('.alter_project_div').remove();
		}
	});

});