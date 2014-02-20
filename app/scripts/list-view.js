
var ListView = Backbone.View.extend({
	className: 'list-item',

	createTemplate: _.template($('#list-item-template').text()),

	events: {
		"click": "setJumbotronItem",
		'click .edit-btn': 'editContact'
	},

	initialize: function(){

		$('.js-contact-list').prepend(this.el);

		this.render();

		this.listenTo(this.model, 'change', this.render);

	},

	render: function(){

		var renderedTemplate = this.createTemplate(this.model.attributes);

		this.$el.html(renderedTemplate);

	},

	setJumbotronItem: function (){

		new MainView({model: this.model});

		document.body.scrollTop = document.documentElement.scrollTop = 0;

		console.log(this.model.attributes);
	},



});

  

