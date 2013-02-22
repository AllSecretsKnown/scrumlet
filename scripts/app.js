/*
|--------------------------------------------------------------------------
| Application Bootstrap
| It will kickstart the app and render application view with an injected collection
|--------------------------------------------------------------------------
*/
require(['backbone', 'projectCollection', 'router', 'appView'], function(Backbone, ProjectCollection, Router, AppView){
	

	//##Here is were the application actuall starts
	//by instantiating a new Router
	var router = new Router();
	//And Starting Backbone History to enable Routing
	Backbone.history.start();

	//instantiate a new ProjectCollection and fetch all projects
    var projectCollection = new ProjectCollection( );
	projectCollection.fetch().then(function(){
		
		//Inject the collection of Projects into our AppView
		var appView = new AppView({ collection: projectCollection });
	});
});
