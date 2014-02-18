console.log('What is up, Dog!');

var Contact = Backbone.Model.extend({
	defaults: {
		name:'Timmy',
		phone:'',
		avatar:'http://www.ezop.rs/wp-content/uploads/2013/08/Hi.jpg',
		bio:'Shrubber'
	}
});

var ContactsCollection = Backbone.Collection.extend({
	model: Contact
})


