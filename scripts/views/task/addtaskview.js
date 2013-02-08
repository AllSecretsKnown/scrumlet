define(['jquery', 'underscore', 'backbone', 'task'], function($, _, Backbone, Task){
	return Backbone.View.extend({
		className: 'well',
		template: _.template( $('#addTaskTemplate').html() || '' ),

		//Construct
		initialize: function(){
			this.task = new Task();
		},
		
		//Function to Render View
		render: function(){
			this.$el.html( this.template( this.task.toJSON() ) );
			return this;
		},

		//Set up event listeners
		events: {
			'click #save_task': 'processInput',
			'click #cancel_task': 'unrender'
		},

		//Function to unrender from DOM
		unrender: function(e){
			e.preventDefault();
			this.$el.remove();
		},

		//Function to process input from form
		processInput: function(e){
			e.preventDefault();

			//Extract input and populate the model
			this.task.set('task_name', this.$('#task_name').val());
			this.task.set('task_description', this.$('#task_description').val());
			this.task.set('task_status', this.$('#task_status').val());

			//Call save task, send the task on by to save
			this.saveTask(this.task);
		},

		//Function to save a new task
		//Takes a task as param, makes it testable
		saveTask: function(task){
			this.model.trigger('add:task', task);
		}
	});
});