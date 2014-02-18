var MainView = Backbone.View.extend({
	className: 'jumbotron-item',

	jumboTemplate: _.template($('#jumbotron-item-template').text()),

	initialize: function(){

		$('.js-jumbotron-contact-item').html(this.el);

		this.render()

	},

	render: function(){

		var renderedJumboTemplate = this.jumboTemplate(this.model.attributes);

		this.$el.html(renderedJumboTemplate)
	}
})
