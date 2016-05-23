Meteor.startup(function(){
  if (ToDos.find().count()==0){
    console.log("Its empty");
    Router.route('/', function () {
    this.render('Home', {
      data: function () { return Items.findOne({_id: this.params._id}); }
    });
  });
  }
})
