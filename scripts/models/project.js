define(['backbone', 'status', 'task'], function(Backbone, Status, Task){
	return Backbone.RelationalModel.extend({
		//Default values
		defaults: {
			p_name: 'Project name',
			p_description: 'Project description',
			p_status: 'TO DO'
		},

		url: '/project',

		//Constructor
		initialize: function(){
			this.on('add:task', this.addTask, this);
		},

		//Function to add a task to the tasks-collection
		//Will trigger change on project model
		addTask: function(task){
			this.get('tasks').add(task);
			this.save();
			//this.trigger('change');
		},

		// Validate when created or updated
		validate: function(attrs) {
			if ( attrs.p_name === '' ) {
				return 'A name is required!';
			}

			if ( attrs.p_description === '' ) {
				return 'A description is required!';
			}
		},

		//Related objects
		relations: [{
			type: Backbone.HasMany,
			key: "tasks",
			relatedModel: Task,
			reverseRelation: {
                key: 'project'
            }
		}]
	});
});

