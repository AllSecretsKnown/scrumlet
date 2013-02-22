define(['backbone'], function(Backbone){
	return Backbone.RelationalModel.extend({
		//Default values
		defaults: {
			task_name: 'Task Name',
			task_description: 'Task Description',
			task_status: 'TO DO'
		},

		validate: function(attrs) {
			if ( attrs.task_name === '' ) {
				return 'A name is required!';
			}

			if ( attrs.task_description === '' ) {
				return 'A description is required!';
			}
		}
	});
});