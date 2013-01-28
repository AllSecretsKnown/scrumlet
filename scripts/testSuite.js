/*
|--------------------------------------------------------------------------
| Test Suite
| It will require all testcases and run them
|--------------------------------------------------------------------------
*/
require(['tests/models/statusTest', 'projectTest'], function(StatusTest, ProjectTest){
      console.log(StatusTest);
      console.log(ProjectTest);
      
      var jasmineEnv = jasmine.getEnv();
        jasmineEnv.updateInterval = 1000;

        var htmlReporter = new jasmine.HtmlReporter();

        jasmineEnv.addReporter(htmlReporter);

        jasmineEnv.specFilter = function(spec) {
          return htmlReporter.specFilter(spec);
        };

        var currentWindowOnload = window.onload;

        window.onload = function() {
          if (currentWindowOnload) {
            currentWindowOnload();
          }
          execJasmine();
        };

        function execJasmine() {
          jasmineEnv.execute();
        };
  });