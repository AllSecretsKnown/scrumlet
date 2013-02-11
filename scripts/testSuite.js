//##Set up a config for Require.js fitted for the TestSuite
//Differs from the Main require config file
require.config({
  paths: {
    jquery: 'vendor/jquery/dist/jquery',
    underscore: 'vendor/underscore/underscore',
    backbonePure: 'vendor/backbone/backbonePure',
    backbone: 'vendor/backbone/backboneLoader',
    relational: 'vendor/backbone-relational/relational',
    localStorage: 'vendor/localstorage/backbone.localStorage',
    alterProjectView: 'views/project/alterprojectview',
    addTaskView: 'views/task/addtaskview',
    projectCollection: 'collections/projectcollection',
    status: 'models/status',
    task: 'models/task',
    project: 'models/project',
    statusTest: 'tests/models/statusTest',
    projectTest: 'tests/models/projectTest',
    taskTest: 'tests/models/taskTest',
    alterProjectTest: 'tests/views/alterprojectviewtest',
    addTaskViewTest: 'tests/views/addtaskviewtest'
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
//##Include all testclasses and run tests with jasmine
define(['tests/models/statusTest', 'tests/models/projectTest', 'tests/models/taskTest', 'tests/views/alterprojectviewtest', 'tests/views/addtaskviewtest'],
        function(StatusTest, ProjectTest, TaskTest, AlterProjectTest, AddTaskViewTest){

	var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  jasmineEnv.execute();
});