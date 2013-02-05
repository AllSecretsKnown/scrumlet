define(['backbone', 'underscore', 'status', 'task'], function(Backbone, _, Status, Task){
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
			Backbone.on('add:task', this.addTask, this);
		},

		addTask: function(task){
			//console.log(task);
			this.get('tasks').add(task);
			console.log(this.get('tasks').toJSON());
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

