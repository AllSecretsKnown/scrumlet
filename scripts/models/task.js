define(['backbone'], function(Backbone){
	return Backbone.RelationalModel.extend({
		//Default values
		defaults: {
			task_name: 'Task Name',
			task_description: 'Task Description',
			task_status: 'TO DO'
		},

		validate: function(attrs) {
			var errors = [];

			if ( !attrs.task_name ) {
				errors.push({ name: 'task_name', message: 'A name is required!' }) ;
			}

			if ( !attrs.task_description ) {
				errors.push({ name: 'task_description', message: 'A description is required!' }) ;
			}

			return errors.length > 0 ? errors : false;
		}
	});
});