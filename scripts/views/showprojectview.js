define(['jquery', 'underscore', 'backbone', 'project'], function($, _, Backbone, Project){
	return Backbone.View.extend({
		tagName: 'div',
		className: 'show_project_div',
		//How to render it
		template: _.template($('#showProjectTemplate').html()),
		
		initialize: function(){

		},

		render: function(){
			//Tell AppView to un-render the form if its visible
			Backbone.trigger('project:altered');
			this.$el.html( this.template( this.model.toJSON() ) );
			return this;
		}
	});
});