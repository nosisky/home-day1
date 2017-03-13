var check = require("../app/library.js");
'use strict'
describe("Data types tests ", function() {
  describe("Case for some falsy values", function() {

    it("should return 'no value' for null", function() {
      expect(check.dataTypes(null)).toEqual('no value');
    });

    it("should return 'no value' for undefined", function() {
      expect(check.dataTypes(undefined)).toEqual('no value');
    });
    
    it("should return 'no value' for empty arguments", function() {
    	expect(check.dataTypes()).toEqual('no value');
    });

  });

  describe("Case for booleans", function() {

    it("should return true for `true`", function() {
      expect(check.dataTypes(true)).toBe(true);
    });

    it("should return false for `false`", function() {
      expect(check.dataTypes(false)).toBe(false);
    });

  });

  describe("Case for Numbers", function() {

    it("should return 'less than 100' for 44", function() {
      expect(check.dataTypes(44)).toBe('less than 100');
    });

    it("should return 'more than 100' for 144", function() {
      expect(check.dataTypes(144)).toBe('more than 100');
    });

    it("should return 'equal to 100' for 100", function() {
      expect(check.dataTypes(100)).toBe('equal to 100');
    });

    it("should return 'more than 100' for 1000", function() {
      expect(check.dataTypes(1000)).toBe('more than 100');
    });


  });

  describe("Case for Strings", function() {

    it("should return the length of `tergiversate`", function() {
      expect(check.dataTypes('tergiversate')).toBe(12);
    });

    it("should return the length of an empty string", function() {
      expect(check.dataTypes('')).toBe(0);
    });

    it("should return the length of `555`", function() {
      expect(check.dataTypes('555')).toBe(3);
    });

  });

  describe("Case for arrays", function() {

    it("should return `2` for `[0, 1, 2]`", function() {
      expect(check.dataTypes([0, 1, 2])).toBe(2);
    });

    it("should return `undefined` for `[]`", function() {
      expect(check.dataTypes([])).not.toBeDefined();
    });
    it("should return `undefined` for `[4, 9]`", function() {
      expect(check.dataTypes([4, 9])).not.toBeDefined();
    });

    it("should return `undefined` for `[0]`", function() {
      expect(check.dataTypes([0])).not.toBeDefined();
    })
  });

  describe("Case for functions", function() {
    it("should call the `callback` function with argument true, and return `called callback`", function() {
      var callback = function(arg) {
        expect(arg).toBeTruthy();
        if(arg === true) {
          return 'called callback';
        }
      };
      expect(check.dataTypes(callback)).toBe('called callback');
    });

    it("should call the `helloworld` function with argument true, and return `hello world`", function() {
      var helloworld = function(arg) {
        expect(arg).toBeTruthy();
        if(arg === true) {
          return 'hello world';
        }
      };
      expect(check.dataTypes(helloworld)).toBe('hello world')
    });

    
  });
});