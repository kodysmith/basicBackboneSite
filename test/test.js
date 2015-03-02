var assert = require("assert");
var app = require("../js/libs/require/require");



	describe('Array', function(){
	  describe('#indexOf()', function(){
	    it('should return -1 when the value is not present', function(){
	      assert.equal(-1, [1,2,3].indexOf(5));
	      assert.equal(-1, [1,2,3].indexOf(0));
	    })
	  })

	  describe("connect to database", function(){
	  	it('should return json object from the data source', function(){

	  	})
	  })

	  describe("create project object", function(){
	  	it('should create project object', function(){
	  		var project = new ProjectModel();
	  	})
	  })
	})
