define(['backbone', 'jquery', 'underscore', 'project'], function(Backbone, $, _, Project){

	return Backbone.View.extend({
		//Projects will render them selfs as li tags
		tagName: 'tr',
		//With the class of project
		className: 'project', 

		//How to render it
		template: _.template($('#projectTemplate').html()),

		//What should we listen for?
		events: {
			'click a.delete': 'deleteProject'
			//'click a.edit': 'editProject'
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
		},

		//Function to unrender a delete project
		unRender: function(){
			this.remove(); //this.$el.remove();
		},

		//Function to edit Project
		editProject: function(e){
			//This is handled by the router instead
			//Trigger an Event
			//console.log('eventet körs på projectview');
			//Backbone.trigger('project:edit', this.model);
		}	
	});
});