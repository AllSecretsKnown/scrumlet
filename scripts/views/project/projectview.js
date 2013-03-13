define(['backbone', 'jquery', 'underscore'], function(Backbone, $, _){
	//Project View when rendered within Project List View
	return Backbone.View.extend({
		//Projects will render them selfs as li tags
		tagName: 'tr',
		//With the class of project
		className: 'project',

		//How to render it
		template: _.template($('#projectTemplate').html()),

		//What should we listen for?
		events: {
			'click a.delete': 'deleteProject',
			'click a.show': 'showProject'
			//,'click a.edit': 'editProject'
		},

		//Constructor
		initialize: function(){
			//When destroy event is triggered, unrender this project
			this.model.on('destroy', this.unRender, this);
			this.model.on('changed', this.render, this);
		},

		//The way to fill our tag element (el) with project data
		render: function(){
			this.$el.html( this.template( this.model.toJSON() ) );
			return this;
		},

		//Function to delete a project
		deleteProject: function(){
			//Destroy the model, wil trigger destroy event
			this.model.destroy();
			Backbone.trigger('show:message', { header: "Success!", text: "Project has been deleted." });
		},

		//Function to unrender a delete project
		unRender: function(){
			this.remove(); //this.$el.remove();
		},

		//Function to edit Project
		editProject: function(e){
			//e.preventDefault();
			//Backbone.trigger('project:edit', this.model);
		},

		showProject: function(e){
			//e.preventDefault();
			//Backbone.trigger('project:show', this.model);
		}
	});
});