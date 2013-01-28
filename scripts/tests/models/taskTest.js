define(['task'], function(Task){
	describe('A Task Model test suit', function() {
				
		//Set up a model to be used by the tests
		beforeEach(function() {
		  this.task = new Task({
		  	task_name: 'Set up tests',
		  	task_description: "Make sure we can run jasmine tests with testem and require"
		  });
		});

		//Status model should be defined
		it('Task model should be defined', function() {
			expect(this.task).toBeDefined();
		});

		//Status model should not accept an empty name
		it("Task model should be able to get name", function() {
			var task_name = this.task.get('task_name');
			expect(task_name).toBe('Set up tests');
		});

		//Status model should not accept an empty name
		it("Task model should require a name", function() {
			var status = this.task.set('task_name', '');
			expect(status).toBe(false);
		});

		//Model should not accept an empty Description
		it("Task model should be able to get description", function() {
			var task_description = this.task.get('task_description');
			expect(task_description).toBe("Make sure we can run jasmine tests with testem and require");
		});
	});
});

