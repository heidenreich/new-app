
var ListView = Backbone.View.extend({
	className: 'list-item',

	createTemplate: _.template($('#list-item-template').text()),

	events: {
		"click": "setJumbotronItem"
	},

	initialize: function(){

		$('.js-contact-list').prepend(this.el);

		this.render()

	},

	render: function(){

		var renderedTemplate = this.createTemplate(this.model.attributes);

		this.$el.html(renderedTemplate)

	},

	setJumbotronItem: function (){

		new MainView({model: this.model}) 

		console.log(this.model.attributes)
	}

});

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



