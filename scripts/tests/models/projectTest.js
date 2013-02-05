// ### Project Test Suit
define(['project'], function(Project){
	describe('A Project Model test suit', function() {
				
		//Set up a model to be used by the tests
		beforeEach(function() {
		  this.project = new Project();
		});

		//Project model should be defined
		it('Project model should be defined', function() {
			expect(this.project).toBeDefined();
		});

		//Model should have a default name
		it("Project model should have a default name", function() {
			var p_name = this.project.get('p_name');
			expect(p_name).toBe('Project name');
		});

		//Model should have a default description
		it("Project model should have a default description", function() {
			var p_description = this.project.get('p_description');
			expect(p_description).toBe('Project description');
		});

		//Model should have a default status
		it("Project model should have a default status", function() {
			var p_status = this.project.get('p_status');
			expect(p_description).toBe('TO DO');
		});

		//Model should not accept an empty name
		it("Project model should require a name", function() {
			var status = this.project.set('p_name', '');
			expect(status).toBe(false);
		});

		//Model should not accept an empty Description
		it("Project model should require a description", function() {
			var status = this.project.set('p_description', '');
			expect(status).toBeFalsy();
		});

		//Model should have a status of TO DO
		it("Project model should have TO DO status when initialized", function() {
			//var status = this.project.get('status');
			//var status_name = status.name;
			//expect(status).toBe('TO DO');
		});
	});
});

