define(['backbone', 'jquery', 'underscore', 'project'], function(Backbone, $, _, Project){

	return Backbone.View.extend({
		//el: '#alterProjectTemplate',
		template: _.template($('#alterProjectTemplate').html() || ""),


		initialize: function(){
			
		},

		render: function(){
			var html = this.template( this.model.toJSON() );

			this.$el.html( html );
			return this;
		},

		//Listen for events
		events: {
			//On form submit, call alterProject
			'submit': 'alterProject'
		},

		//Function to process input
		processInput: function(callBack){
			
			var data_container = {
				id: this.$('#id').val(),
				p_name: this.$('#p_name').val() || '',
				p_description: this.$('#p_description').val() || ''
			};
			this.clearForm();
			callBack(data_container, this);

		},

		//Function to set things in motion
		alterProject: function(e){
			e.preventDefault();

			this.processInput(this.delegateResponse);
		},

		//Function to delegate response, used as callback when form-input has been fetched
		delegateResponse: function(data_container, contex){
			//If ID is NOT UNdefined, update
			if (typeof(data_container.id) != "undefined") {
				contex.updateProject(data_container);
			//Else create
			}else{
				contex.addProject(data_container);
			}
		},

		//Function to update a model
		updateProject: function(data_container){
			this.model.set('p_name', data_container.p_name);
			this.model.set('p_description', data_container.p_description);
			this.model.save();
			//Tell the Project View to re-render the project
			this.model.trigger('changed', this);
			//Tell AppView to un-render the form
			Backbone.trigger('project:altered');
		},

		//Function to create a new model
		addProject: function(data_container){
			this.collection.create(data_container, { wait: true });
			//Tell AppView to un-render the form
			Backbone.trigger('project:altered');
		},

		//Clear the form
		clearForm: function(){
			this.$('#id').val('');
			this.$('#p_name').val('');
			this.$('#p_description').val('');
		}

	});
});