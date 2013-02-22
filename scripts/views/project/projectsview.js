define(['backbone', 'jquery', 'project', 'projectView'], function(Backbone, $, Project, ProjectView){
	//ProjectListView
	return Backbone.View.extend({
		//Projects will render inside an tbody
		tagName: 'tbody',
		//With the class of project
		className: 'projects',

		//Initialize, set up eventlisteners
		initialize: function(){
			//Apend new projects when they are created
			//Add one will add one, not re-render the entire collection
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
			this.$el.prepend( projectView.render().el );
		}
	});
});