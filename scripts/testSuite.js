require.config({
  paths: {
    jquery: 'vendor/jquery/dist/jquery',
    underscore: 'vendor/underscore/underscore',
    backbonePure: 'vendor/backbone/backbonePure',
    backbone: 'vendor/backbone/backboneLoader',
    relational: 'vendor/backbone-relational/relational',
    localStorage: 'vendor/localstorage/backbone.localStorage',  
    status: 'models/status',
    task: 'models/task',
    project: 'models/project',
    project: 'models/project',
    statusTest: 'tests/models/statusTest',
    projectTest: 'tests/models/projectTest',
    taskTest: 'tests/models/taskTest'
  },
  shim: {
    backbonePure: {
        deps: ['jquery', 'underscore'],
          exports: 'Backbone'
      },
      relational: {
        deps: ['backbonePure', 'underscore']
      },
      localStorage: {
        deps: ['backbonePure', 'underscore']
      }
  }
});
/*
|--------------------------------------------------------------------------
| Test Suite
| It will require all testcases and run them
|--------------------------------------------------------------------------
*/
define(['statusTest', 'projectTest', 'taskTest'],function(StatusTest, ProjectTest, TaskTest){

	var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  jasmineEnv.execute();
});