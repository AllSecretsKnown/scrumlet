define(['backbone', 'underscore', 'status', 'task'], function(Backbone, _, Status, Task){
	return Backbone.RelationalModel.extend({
		//Default values
		defaults: {
			p_name: 'Project name',
			p_description: 'Project description',
			status: new Status({ status_name: 'TO DO'})
		},

		url: '/project',

		//Constructor
		initialize: function(){
			
		},

		//Events
		events: {
			'add:tasks': 'this.addTask'
		},

		addTask: function(){
			
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
		},{
			type: Backbone.HasOne,
			key: "status",
			relatedModel: Status,
			reverseRelation: {
                key: 'projects'
            }
		}]
	});
});

