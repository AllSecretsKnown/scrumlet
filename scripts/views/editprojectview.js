define(['backbone', 'jquery', 'underscore', 'project'], function(Backbone, $, _, Project){

	return Backbone.View.extend({
		template: _.template($('#alterProjectTemplate').html()),

		initialize: function(){
			//If this view is triggered, render
			this.render();
		},

		render: function(){
			var html = this.template( this.model.toJSON() );

			this.$el.html( html );
			return this;
		}

	});
});