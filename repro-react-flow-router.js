if (Meteor.isClient) {
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

FlowRouter.route('/', {
  action: function() {
    React.render(
      React.createElement(HomeScreen, null),
      document.getElementById('container')
    );
  },

  name: 'home'
});

FlowRouter.route('/stuff', {
  action: function() {
    React.render(
      React.createElement(StuffScreen, null),
      document.getElementById('container')
    );
  },

  name: 'stuff'
});
