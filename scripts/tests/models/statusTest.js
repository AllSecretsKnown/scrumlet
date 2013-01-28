define(['status'], function(Status){
	describe('A Status Model test suit', function() {
				
		//Set up a model to be used by the tests
		beforeEach(function() {
		  this.project_status = new Status({
		  	status_name: 'Started'
		  });
		});

		//Status model should be defined
		it('Status model should be defined', function() {
			expect(this.project_status).toBeDefined();
		});

		//Status model should not accept an empty name
		it("Status model should be able to get status name", function() {
			var status_name = this.project_status.get('status_name');
			expect(status_name).toBe('Started');
		});

		//Status model should not accept an empty name
		it("Status model should require a name", function() {
			var status = this.project_status.set('status_name', '');
			expect(status).toBe(false);
		});
	});
});

