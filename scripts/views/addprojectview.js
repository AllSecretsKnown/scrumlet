define(['backbone', 'jquery', 'underscore', 'project'], function(Backbone, $, _, Project){

	return Backbone.View.extend({
		//We have a pre-defined form, use it!
		el: '#alterProjectForm',
		template: _.template($('#alterProjectTemplate').html()),

		//Lets read the values
		initialize: function(){
			//Read the DOM once, use values in add and clear
			this.p_name = $('#p_name'),
			this.p_description = $('#p_description')
		},

		//Listen for events
		events: {
			//On form submit, call addOne
			'submit': 'addProject'
		},

		//create a new Project and append it to the collection, and clear the form
		addProject: function(e){
			e.preventDefault();

			this.collection.create({
				p_name: this.p_name.val(),
				p_description: this.p_description.val()
			}, { wait: true });

			this.clearForm();
		},

		//Clear the form
		clearForm: function(){
			this.p_name.val(''),
			this.p_description.val('')
		}

	});
});