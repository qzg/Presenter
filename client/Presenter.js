if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to Presenter.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

  Template.social_login.events({
    'click #facebook' : function () {
      alert("facebook clicked");
    },
    'click #google' : function () {
      alert("google clicked");
    },
    'click #twitter' : function () {
      alert("twitter clicked");
    }
  });

  Template.join_presentation.events({
    'click #join' : function () {
      alert("request to join");
    }
  });

  Meteor.startup(function() {
    console.log("This is the client");
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
