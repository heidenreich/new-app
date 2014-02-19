console.log('What is up, Dog!');

var Contact = Backbone.Model.extend({
	defaults: {
		name:'Timmy',
		phone:'555-555-5555',
		avatar:'http://www.ezop.rs/wp-content/uploads/2013/08/Hi.jpg',
		bio:'Shrubber'
	}
});

var ContactsCollection = Backbone.Collection.extend({
	model: Contact,

	url: 'http://0.0.0.0:3000/collections/contacts'
});


