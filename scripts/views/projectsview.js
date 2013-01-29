define(['backbone', 'jquery','underscore', 'project', 'projectView'], function(Backbone, $, _, Project, ProjectView){
	//Project View
	return Backbone.View.extend({
		//Projects will render inside an ul
		tagName: 'tbody',
		//With the class of project
		className: 'projects', 

		//Constructor
		initialize: function(){
			//Apend new projects when they are created
			//Add one will add one, not rerender the entire collection
			this.collection.on('add', this.addOne, this);
		},

		//The way to fill our tag element (el) with project data
		render: function() {
			this.collection.each( this.addOne, this );
			//return this for method chaining
			return this;
		},

		addOne: function(project) {
			//Create a new child view
			var projectView = new ProjectView({ model: project });
			//Render the new projectView and append it to this collections Element
			this.$el.append( projectView.render().el );	
		}
	});
});