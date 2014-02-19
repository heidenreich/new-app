
$(document).ready(function(){

	window.contacts = new ContactsCollection();

	contacts.each(function(contact){

		new ListView({model:contact});

		new MainView( {model: contacts.first()} );

	});

	contacts.fetch({
    success: function(){
      contacts.each(function(contact){
        new ListView({model: contact});
      })
      
    },
    error: function(){
      console.log('that was bad')
    }
  })

});


$('.new-bear-btn').click(function(){

	var bubba = new Contact()


	if($('.name').val()) {bubba.set({name: $('.name').val()})}
	if($('.phone').val()) {bubba.set({phone: $('.phone').val()})}
	if($('.bio').val()) {bubba.set({bio: $('.bio').val()})}
	if($('.avatar').val()) {bubba.set({avatar: $('.avatar').val()})}


	// add the object literal into the collection.
	// this will
	// 1.) run the object literal throught the collection's model contructor
	// 2.) add the new model to the collection's model array
	// 3.) fire any related events on the collection
	// 4.) this method will return a reference to the freshly created model
	var freshModel = contacts.add(bubba);

	// now, we can pass it into a ListView to be rendered
	new ListView({model: freshModel});

	// Also, we can go ahead and .save() the new model to the server
	freshModel.save()
});



window.deleteFunction = function(){
contacts.each(function(dataStuff){
console.log(dataStuff)
$.ajax({
type: 'delete',
url: 'http://0.0.0.0:3000/collections/contacts/'+dataStuff.get("_id")
})

})
}

$('.delete-btn').click(function(){
deleteFunction()
})


