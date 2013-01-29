define(['backbone', 'jquery', 'underscore', 'project'], function(Backbone, $, _, Project){

	return Backbone.View.extend({
		//el: '#alterProjectTemplate',
		template: _.template($('#alterProjectTemplate').html() || ""),


		initialize: function(){
			
		},

		render: function(){
			console.log(this.model.toJSON());
			var html = this.template( this.model.toJSON() );

			this.$el.html( html );
			return this;
		},

		//Listen for events
		events: {
			//On form submit, call alterProject
			'submit': 'extractValues'
		},

		extractValues: function(e){
			e.preventDefault();

			var data_container = {
				id: this.$('#id').val(),
				p_name: this.$('#p_name').val(),
				p_description: this.$('#p_description').val()
			};

			//If ID is NOT UNdefined, update
			if (typeof(data_container.id) != "undefined") {
				this.updateProject(data_container);
			//Else create
			}else{
				this.addProject(data_container);
			}

			this.clearForm();
			this.removeForm();

		},

		//Function to update a model
		updateProject: function(data_container){
			this.model.set('p_name', data_container.p_name);
			this.model.set('p_description', data_container.p_description);
			this.model.save();
		},

		//Function to create a new model
		addProject: function(data_container){
			this.collection.create(data_container, { wait: true });
		},

		//Clear the form
		clearForm: function(){
			this.$('#id').val('');
			this.$('#p_name').val('');
			this.$('#p_description').val('');
		},

		removeForm: function(){
			this.$el.html('');
		}

	});
});