/*
|--------------------------------------------------------------------------
| Application Bootstrap
| It will kickstart the app and render application view with an injected collections
|--------------------------------------------------------------------------
*/
require(['backbone', 'projectCollection', 'router', 'appView'], function(Backbone, ProjectCollection, Router, AppView){
	
    //Here is were the acctuall application starts
	var router = new Router();
	Backbone.history.start();

	var projectCollection = new ProjectCollection();
	projectCollection.fetch().then(function(){
		//Inject the collection of Projects into our AppView
		new AppView({ collection: projectCollection });
	});
});
