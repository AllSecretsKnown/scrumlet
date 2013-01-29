define(['backbone', 'jquery', 'underscore', 'handlebars', 'project'], function(Backbone, $, _, Handlebars, Project){

	return Backbone.View.extend({
		//el: '#alterProjectTemplate',
		template: _.template($('#alterProjectTemplate').html()),

		initialize: function(){
			//If this view is triggered, render
			this.render();
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
			'submit': 'alterProject'
		},

		//create or update Project and append it to the collection, and clear the form
		alterProject: function(e){
			e.preventDefault();
			
			var p_id = $('#id').val();

			//If ID is not undefined, update
			if (typeof(p_id) != "undefined") {
				this.collection.update({
					id: p_id,
					p_name: $('#p_name').val(),
					p_description: $('#p_description').val()
				}, { wait: true });

			//Else create
			}else{
				this.collection.create({
					p_name: $('#p_name').val(),
					p_description: $('#p_description').val()
				}, { wait: true });
			};

			console.log(this.collection.toJSON());
			this.clearForm();
		},

		//Clear the form
		clearForm: function(){
			$('#p_name').val(''),
			$('#p_description').val('')
		}

	});
});