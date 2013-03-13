define(['backbone', 'jquery', 'underscore'], function(Backbone, $, _){

	return Backbone.View.extend({
		className: 'alter_project_div well',
		//el: '#alterProjectTemplate',
		template: _.template($('#alterProjectTemplate').html() || ""),

		initialize: function(){
			// listen to errors on the current project model
			this.listenTo(this.model, 'error', this.renderErrors, this);
		},

		render: function(){
			var html = this.template( this.model.toJSON());

			this.$el.html( html );
			return this;
		},

		//Listen for events
		events: {
			//On form submit, call alterProject
			'submit': 'alterProject',
			'click .cancel': 'unrenderForm'
		},

		//Function to process input
		processInput: function(callBack){
			
			var data_container = {
				id: this.$('#id').val(),
				p_name: this.$('#p_name').val() || '',
				p_description: this.$('#p_description').val() || '',
				p_status: this.$('#p_status').val() || ''
			};

			// Run callBack if model's attributes gets set without validation errors
			// Else the model's error-event will trigger
			if (this.model.set(data_container)){callBack(this)}
		},

		// Function for displaying the current project model errors
		renderErrors: function(model, errors) {
			// Grabs the element that errors will be appended to..
			var formEl = this.$('#errorContainer');

			// ..empty it and then show it
			formEl.html('').show();


			// Iterate through all errors and append them to the container
			// Also decorate the input fields in a cute pink color
			_.each(errors, function(error) {
				this.$("#" + error.name).parent('label').addClass('error');
				formEl.prepend(error.message + "<br />");
			}, this)
		},

		//Function to set things in motion
		alterProject: function(e){
			e.preventDefault();

			this.processInput(this.delegateResponse);
		},

		//Function to delegate response, used as callback when form-input has been fetched
		delegateResponse: function(contex){
			//If ID is NOT UNdefined, update
			if (typeof(contex.model.id) != "undefined") {
				contex.updateProject(contex.model);
			//Else create
			}else{
				contex.addProject(contex.model);
			}
	},

		//Function to update a model
		updateProject: function(model){
			this.collection.update(model, {remove: false});
			
			//Tell the Project View to re-render the project
			this.model.trigger('changed', this);

			Backbone.trigger('show:message', { header: "Success!", text: "Project has been updated."});
			//Tell AppView to un-render the form
			Backbone.trigger('project:unrenderform');
		},

		//Function to create a new model
		addProject: function(model){
			this.collection.create(model, { wait: true });

			Backbone.trigger('show:message', { header: "Success!", text: "Project has been created." });
			//Tell AppView to un-render the form
			Backbone.trigger('project:unrenderform');
		},

		//Clear the form
		clearForm: function(){
			this.$('#id').val('');
			this.$('#p_name').val('');
			this.$('#p_description').val('');
			this.$('label').removeClass('error');
		},

		unrenderForm: function(e){
			e.preventDefault();
			//Tell AppView to un-render the form
			Backbone.trigger('project:unrenderform');
		}

	});
});