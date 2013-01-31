define(['backbone', 'underscore', 'status'], function(Backbone, _, Status){
	return Backbone.RelationalModel.extend({
		//Default values
		defaults: {
			task_name: 'Task Name',
			task_description: 'Task Description',
			status: new Status()
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