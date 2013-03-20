define(['jquery', 'underscore', 'backbone', 'task'], function($, _, Backbone, Task){
	return Backbone.View.extend({
		className: 'well',
		template: _.template( $('#addTaskTemplate').html() || '' ),

		//Construct
		initialize: function(opts){
			// If no task is provided at initialization, create one.
			this.task = opts && opts.task || new Task();

			this.listenTo(this.task, 'error', this.renderErrors, this);
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

		// Function for displaying the current project model errors
		renderErrors: function(model, errors) {
			// Grabs the element that errors will be appended to..
			var formEl = this.$('#errorContainer');

			// ..empty it and then show it
			formEl.html('').show();

			// Iterate through all errors and append them to the container
			// Also decorate the input fields in a cute pink color
			_.each(errors, function(error) {
				this.$("#" + error.name).parent('label').addClass('error');
				formEl.prepend(error.message + "<br />");
			}, this)
		},

		//Function to unrender from DOM
		unrender: function(e){
			e.preventDefault();
			this.$el.remove();
		},

		//Function to process input from form
		processInput: function(e){
			e.preventDefault();

			formInput = {
				task_name: this.$('#task_name').val() || '',
				task_description: this.$('#task_description').val() || '',
				task_status: this.$('#task_status').val() || ''
			}

			// Run callBack if model's attributes gets set without validation errors
			// Else the model's error-event will trigger
			if (this.task.set(formInput)){this.saveTask(this.task);}
		},

		//Function to save a new task
		//Takes a task as param, makes it testable
		saveTask: function(task){
			this.model.trigger('add:task', task);
			Backbone.trigger('show:message', { header: "Success!", text: "Task was saved." })
		}
	});
});