/*
|--------------------------------------------------------------------------
| Application Bootstrap
| It will kickstart the app and render application view with an injected collections
|--------------------------------------------------------------------------
*/
require(['backbone', 'projectCollection', 'router', 'appView'], function(Backbone, ProjectCollection, Router, AppView){
	

	//Here is were the acctuall application starts
	//Instatiate a new Router
	var router = new Router();
	//Start Backbone History to enable Routing
	Backbone.history.start();

	//Instantiate a new ProjectCollection and fetch all projects
    var projectCollection = new ProjectCollection();
	projectCollection.fetch().then(function(){
		
		//Inject the collection of Projects into our AppView
		var appView = new AppView({ collection: projectCollection });

		//On Application start we make sure that the index route is triggered
		router.navigate('projects', { trigger: true });
	});
});
