var sayHello = require('../src/hello.js');

describe('hello', function(){
   it('says hello', function() {
      expect(sayHello()).toBe('hello world!');
   });
});