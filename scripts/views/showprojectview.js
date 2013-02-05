define(['jquery', 'underscore', 'backbone', 'project', 'addTaskView', 'showTaskView'], function($, _, Backbone, Project, AddTaskView, ShowTaskView){
	return Backbone.View.extend({
		tagName: 'div',
		className: 'show_project_div',
		//How to render it
		template: _.template($('#showProjectTemplate').html() || ''),
		
		//Construct
		initialize: function(){
			
		},

		//Set up all events we wanna listen to
		events: {
			'click #new_task': 'renderAddTask'
		},

		//Function to render Show Project View
		render: function(){
			//Tell AppView to un-render the form if its visible
			Backbone.trigger('project:unrenderform');
			this.$el.html( this.template( this.model.toJSON() ) );

			var that = this;

			this.model.get('tasks').each(function(task){
				var showTaskView = new ShowTaskView( { model: task } );
				showTaskView.render();
				that.$el.find('#task_tabel_body').append(showTaskView.el);
			});

			return this;
		},

		//Function to render Add task view
		renderAddTask: function(e){
			e.preventDefault();
			this.addTaskView = new AddTaskView().render();
			this.$el.find('#new_task_div').empty().append( this.addTaskView.el );
		}
	});
});