console.log("What is up, Dog!");var Contact=Backbone.Model.extend({defaults:{name:"Timmy",phone:"555-555-5555",avatar:"http://www.ezop.rs/wp-content/uploads/2013/08/Hi.jpg",bio:"Shrubber"}}),ContactsCollection=Backbone.Collection.extend({model:Contact,url:"http://0.0.0.0:3000/collections/contacts"}),ListView=Backbone.View.extend({className:"list-item",createTemplate:_.template($("#list-item-template").text()),events:{click:"setJumbotronItem","click .edit-btn":"editContact"},initialize:function(){$(".js-contact-list").prepend(this.el),this.render(),this.listenTo(this.model,"change",this.render)},render:function(){var a=this.createTemplate(this.model.attributes);this.$el.html(a)},setJumbotronItem:function(){new MainView({model:this.model}),document.body.scrollTop=document.documentElement.scrollTop=0,console.log(this.model.attributes)}});$(document).ready(function(){window.contacts=new ContactsCollection,contacts.each(function(a){new ListView({model:a}),new MainView({model:contacts.first()})}),contacts.fetch({success:function(){contacts.each(function(a){new ListView({model:a})})},error:function(){console.log("that was bad")}})}),$(".new-bear-btn").click(function(){var a=new Contact;$(".name").val()&&a.set({name:$(".name").val()}),$(".phone").val()&&a.set({phone:$(".phone").val()}),$(".bio").val()&&a.set({bio:$(".bio").val()}),$(".avatar").val()&&a.set({avatar:$(".avatar").val()});var b=contacts.add(a);new ListView({model:b}),b.save()}),window.deleteFunction=function(){contacts.each(function(a){console.log(a),$.ajax({type:"delete",url:"http://0.0.0.0:3000/collections/contacts/"+a.get("_id")})})},$(".delete-btn").click(function(){deleteFunction()});var MainView=Backbone.View.extend({className:"jumbotron-item",jumboTemplate:_.template($("#jumbotron-item-template").text()),initialize:function(){$(".js-jumbotron-contact-item").html(this.el),this.render()},render:function(){var a=this.jumboTemplate(this.model.attributes);this.$el.html(a)}});